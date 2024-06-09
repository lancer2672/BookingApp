import {useRoute} from '@react-navigation/native';
import {hotelsMock} from '@src/mock/mock';
import {goBack, navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {formatDate} from '@src/utils/textFormat';
import {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {PRICE_CODE, REVIEW_CODE} from '../Search/components/FilterModal';
import RoomItem from '../components/RoomItem';
const getTextReview = CODE => {
  switch (CODE) {
    case PRICE_CODE.DOWN:
      return 'Giá giảm dần';
    case PRICE_CODE.UP:
      return 'Giá tăng dần';
    case REVIEW_CODE.UP:
      return 'Đánh giá tích cực';
    default:
      return '';
  }
};
const HomeListRoom = () => {
  const [low, setLow] = useState(0);
  const {roomCustomer, date, hotel} = useRoute().params;

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 12,
            marginTop: 12,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Pressable onPress={goBack}>
            <AntDesign
              name="left"
              size={24}
              color={generalColor.primary}></AntDesign>
          </Pressable>
          <Text
            style={{
              flex: 1,
              marginRight: 24,
              textTransform: 'uppercase',
              color: generalColor.primary,
              ...textStyle.h[2],
              textAlign: 'center',
            }}>
            Phòng
          </Text>
        </View>
        <View style={[rowCenter, styles.header]}>
          <View style={{flex: 1}}>
            <Text>Nhận phòng</Text>
            <Pressable>
              <Text
                // onPress={() => setDatepickerVisible(true)}
                style={styles.infoText}>
                {formatDate(date.checkinDate, 'dd/MM')}{' '}
              </Text>
            </Pressable>
          </View>
          <View style={{flex: 1}}>
            <Text>Trả phòng</Text>
            <Pressable>
              <Text
                // onPress={() => setDatepickerVisible(true)}
                style={styles.infoText}>
                {formatDate(date.checkoutDate, 'dd/MM')}{' '}
              </Text>
            </Pressable>
          </View>
          <View style={{flex: 2}}>
            <Text style={{textAlign: 'right'}}>Phòng & Khách</Text>
            <Pressable
              onPress={() => {
                setRoomCustomerVisbile(true);
              }}>
              <Text style={{...styles.infoText, textAlign: 'right'}}>
                {roomCustomer.room} phòng {roomCustomer.mature} người{' '}
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            ...rowCenter,
            marginTop: 8,
            justifyContent: 'flex-end',
            marginHorizontal: 8,
          }}></View>
        <View
          style={{
            flex: 1,
            minHeight: 140,
          }}>
          {/* {hotels.map(hotel => (
          ))} */}
          <RoomItem
            hotel={hotelsMock[0]}
            room={hotelsMock[0].rooms[0]}
            onPress={() => {
              navigate('ReviewBooking', {
                roomCustomer,
                date,
                hotel: hotelsMock[0],
                room: hotelsMock[0].rooms[0],
              });
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeListRoom;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 18,
    justifyContent: 'space-between',
  },
  label: {
    textTransform: 'uppercase',
    ...textStyle.h[4],
    fontWeight: '400',
  },
  infoText: {
    color: generalColor.primary,
    textDecorationLine: 'underline',
    ...textStyle.h[4],
  },
  filter: {color: generalColor.primary, fontSize: 16, marginRight: 4},
});
