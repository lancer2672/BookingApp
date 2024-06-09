import {goBack, navigate} from '@src/navigation/NavigationController';
import useRoomStore from '@src/store/fav_room';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-ranges';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChooseRoomAndCustomer from '../Search/components/ChooseRoomAndCustomer';
import HotelItem from '../components/HotelItem';
const FavouriteRooms = () => {
  // const {bookingHistory = bookingHistoryMock} = useRoute().params;
  const {rooms, setRoom, removeRoom} = useRoomStore();
  console.log('Rooms', rooms);
  const [roomCustomer, setRoomCustomer] = useState({
    children: 0,
    room: 1,
    mature: 2,
  });
  const [roomCustomerVisible, setRoomCustomerVisbile] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [datepickerVisible, setDatepickerVisible] = useState(false);
  const handleSelectDate = ({startDate, endDate}) => {
    setDate(() => ({
      checkinDate: startDate.replace(/\//g, '-'),
      checkoutDate: endDate.replace(/\//g, '-'),
    }));
    setRoomCustomerVisbile(true);
  };
  const [date, setDate] = useState({
    checkinDate: null,
    checkoutDate: null,
  });
  const renderItem = ({item, index}) => (
    <HotelItem
      onPress={() => {
        setSelectedItem(() => item);
        setDatepickerVisible(true);
      }}
      hotel={item}
    />
  );
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <ChooseRoomAndCustomer
        roomCustomer={roomCustomer}
        onChange={setRoomCustomer}
        onClose={() => {
          setRoomCustomerVisbile(() => false);
          navigate('ReviewBooking', {
            roomCustomer,
            date,
            hotel: selectedItem.hotel,
            room: selectedItem.room,
          });
        }}
        isVisible={roomCustomerVisible}></ChooseRoomAndCustomer>
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
      </View>
      <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        </Pressable>
        <Text style={styles.title}>Đã lưu</Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          renderItem={renderItem}
          data={rooms}
          keyExtractor={(item, index) => index.toString()}
          showVertical={false}
          ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
        />
      </View>
    </View>
  );
};

export default FavouriteRooms;

const styles = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    color: generalColor.primary,
    ...textStyle.h[2],
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
    fontFamily: 'serif',
  },
});
