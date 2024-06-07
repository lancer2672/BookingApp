import { hotelsMock } from '@src/mock/mock';
import { goBack, navigate } from '@src/navigation/NavigationController';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { formatDate } from '@src/utils/textFormat';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-date-ranges';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChooseRoomAndCustomer from '../Search/components/ChooseRoomAndCustomer';
import RoomItem from '../components/RoomItem';

const HomeListNearbyRoom = () => {
  const [roomCustomerVisible, setRoomCustomerVisbile] = useState(false);
  const [roomCustomer, setRoomCustomer] = useState({
    children: 0,
    room: 1,
    mature: 2,
  });
  const [date, setDate] = useState({
    checkinDate: new Date(),
    checkoutDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  });
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [datepickerVisible, setDatepickerVisible] = useState(false);
  const handleSelectDate = ({startDate, endDate}) => {
    setDate(() => ({
      checkinDate: startDate.replace(/\//g, '-'),
      checkoutDate: endDate.replace(/\//g, '-'),
    }));
  };
  // const handleSelectDate = ({startDate, endDate}) => {
  //   console.log('Selected', startDate, new Date('2024-3-15'), {
  //     startDate: new Date(startDate),
  //     endDate,
  //   });
  //   setDate({
  //     checkinDate: new Date(startDate),
  //     checkoutDate: new Date(endDate),
  //   });
  // };
  console.log('roomCustomer', roomCustomer);

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
              fontFamily: 'serif',
              textAlign: 'center',
            }}>
            Phòng
          </Text>
        </View>
        <View style={[rowCenter, styles.header]}>
          <Pressable  onPress={()=>{
            setDatepickerVisible(true);
          }}style={{flex: 1}}>
            <Text>Nhận phòng</Text>
            <Text style={styles.infoText}>
              {formatDate(date.checkinDate, 'dd/MM')}{' '}
            </Text>
          </Pressable>
          <Pressable onPress={()=>{
            setDatepickerVisible(true);
          }} style={{flex: 1}}>
            <Text>Trả phòng</Text>
            <Text style={styles.infoText}>
              {formatDate(date.checkoutDate, 'dd/MM')}{' '}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setRoomCustomerVisbile(true);
            }}
            style={{flex: 2}}>
            <Text style={{textAlign: 'right'}}>Phòng & Khách</Text>
            <Text style={{...styles.infoText, textAlign: 'right'}}>
              {roomCustomer.room} phòng {roomCustomer.mature} người{' '}
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            ...rowCenter,
            marginTop: 8,
            justifyContent: 'flex-end',
            marginHorizontal: 8,
          }}>
          {/* <View style={{flex: 1}}>
            <RangeSlider
              style={styles.slider}
              min={0}
              max={10000}
              step={1}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleValueChange}
            />
          </View> */}
        </View>
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
        <View style={{position: 'absolute', bottom: 0}}>
          <DatePicker
            style={{width: 350, height: 45}}
            isVisible={datepickerVisible}
            markText="Chọn ngày"
            onConfirm={handleSelectDate}
            onChangeVisible={setDatepickerVisible}
            customStyles={{
              placeholderText: {fontSize: 20}, // placeHolder style
              headerStyle: {}, // title container style
              headerMarkTitle: {}, // title mark style
              headerDateTitle: {}, // title Date style
              contentInput: {}, //content text container style
              contentText: {}, //after selected text Style
            }} // optional
            centerAlign // optional text will align center or not
            allowFontScaling={false} // optional
            placeholder={''}
            mode={'range'}
          />
          <ChooseRoomAndCustomer
            roomCustomer={roomCustomer}
            onChange={setRoomCustomer}
            onClose={() => setRoomCustomerVisbile(false)}
            isVisible={roomCustomerVisible}></ChooseRoomAndCustomer>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeListNearbyRoom;

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
