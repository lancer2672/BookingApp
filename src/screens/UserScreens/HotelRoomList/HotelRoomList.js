import { useRoute } from '@react-navigation/native';
import { expandAnimation } from '@src/animation';
import bookingApi from '@src/api/booking';
import ButtonComponent from '@src/components/Button';
import { goBack, navigate } from '@src/navigation/NavigationController';
import { addItem, getNotiKey } from '@src/store/as/as';
import useUserStore from '@src/store/user';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { formatCurrency, formatDate } from '@src/utils/textFormat';
import { useState } from 'react';
import {
  FlatList,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RoomItem from '../components/RoomItem';

const HotelRoomList = () => {
  const {hotel, roomCustomer, date} = useRoute().params;
  const [selectedRooms, setSelectedRooms] = useState([]);
  const user = useUserStore(state => state.user);

  const renderItem = ({item, index}) => (
    <RoomItem
      hotel={hotel}
      room={item}
      isSelected={selectedRooms.includes(item.id)}
      onPress={() => {
        setSelectedRooms(prevSelectedRooms => {
          if (prevSelectedRooms.includes(item.id)) {
            return prevSelectedRooms.filter(id => id !== item.id);
          } else {
            return [...prevSelectedRooms, item.id];
          }
        });
        LayoutAnimation.configureNext(expandAnimation);
      }}
    />
  );
  const getTotal = () => {
    const rooms = hotel.rooms.filter(t => selectedRooms.includes(t.id));
    return rooms.reduce((ac, r) => {
      return ac + r.pricePerNight;
    }, 0);
  };
  const createBooking = async () => {
    try {
      await bookingApi.create({
        userId: user.id,
        roomIds: selectedRooms,
        deposit: 0,
        propertyId: hotel.id,
        depositImage: null,
        startDate: date.checkinDate,
        endDate: date.checkoutDate,
      })
      navigate('BookingResult', {
        date,
        roomCustomer,
        roomIds: selectedRooms,
        hotel,
        amount: getTotal(),
      });
      await addItem(getNotiKey(Date.now()), {
        title: 'Đặt phòng',
        description: 'Bạn đã đặt phòng thành công ở khách sạn ' + hotel.name,
        createdAt: Date.now(),
        isSeen: false,
      });
      showMessage({
        message: `Đặt phòng thành công`,
        type: 'success',
      });
    } catch (er) {
      console.log('er', er);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        </Pressable>
        <Text style={styles.title}>Phòng</Text>
      </View>

      <View style={[rowCenter, styles.header]}>
        <View style={{flex: 1}}>
          <Text>Nhận phòng</Text>
          <Text style={styles.infoText}>
            {formatDate(date.checkinDate, 'dd/MM')}{' '}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Trả phòng</Text>
          <Text style={styles.infoText}>
            {formatDate(date.checkoutDate, 'dd/MM')}{' '}
          </Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{textAlign: 'right'}}>Phòng & Khách</Text>
          <Text
            numberOfLines={1}
            style={{...styles.infoText, textAlign: 'right'}}>
            {roomCustomer.room} phòng {roomCustomer.mature} người
          </Text>
          {roomCustomer.children != 0 && (
            <Text
              numberOfLines={1}
              style={{...styles.infoText, textAlign: 'right'}}>
              {roomCustomer.children} trẻ em
            </Text>
          )}
        </View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          renderItem={renderItem}
          data={hotel.rooms}
          keyExtractor={(item, index) => index.toString()}
          showVertical={false}
          ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderTopColor: generalColor.other.lightgray,
          borderTopWidth: 1,
          padding: 8,
        }}>
        <View
          style={{
            flex: 2,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {selectedRooms.length > 0 && (
            <>
              <Text style={{color: generalColor.primary, fontSize: 16}}>
                Đã chọn {selectedRooms.length} phòng
              </Text>
              {selectedRooms.length > roomCustomer.room && (
                <Text style={{color: 'tomato', fontSize: 13}}>
                  Lưu ý: Vượt quá số phòng bạn tìm
                </Text>
              )}
              <Text
                style={{
                  color: generalColor.primary,
                  fontWeight: '500',
                  fontSize: 18,
                }}>
                Tổng {formatCurrency(getTotal())}
              </Text>
            </>
          )}
        </View>
        <ButtonComponent
          onPress={async () => {
            if (selectedRooms.length > 0) {
              if (hotel.deposit_percent > 0) {
                navigate('Payment', {
                  roomCustomer,
                  date,
                  hotel,
                  amount: getTotal(),
                  roomIds: selectedRooms,
                });
              } else {
                await createBooking();
              }
            }
          }}
          style={{
            borderRadius: 24,
          }}
          text={'Đặt phòng'}></ButtonComponent>
      </View>
    </View>
  );
};

export default HotelRoomList;

export const TextWithIcon = ({text, icon}) => {
  return (
    <View style={[rowCenter, {marginTop: 4}]}>
      {icon && icon}
      <Text numberOfLines={1} style={{fontSize: 16, color: 'black'}}>
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  title: {
    textTransform: 'uppercase',
    color: generalColor.primary,
    ...textStyle.h[2],
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
    fontFamily: 'serif',
  },
  infoText: {
    color: generalColor.primary,
    textDecorationLine: 'underline',
    ...textStyle.h[4],
  },
});
