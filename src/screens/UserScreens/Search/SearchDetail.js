import {PinSVG} from '@src/assets/icons';
import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-ranges';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChooseRoomAndCustomer from './components/ChooseRoomAndCustomer';
const roomCustomerText = ({room, mature, children}) => {
  return `${room} phòng - ${mature} người lớn - ${children} trẻ em`;
};
const UserSearchDetailScreen = () => {
  const [datepickerVisible, setDatepickerVisible] = useState(false);
  const [roomCustomerVisible, setRoomCustomerVisbile] = useState(false);
  const [roomCustomer, setRoomCustomer] = useState({
    children: 0,
    room: 1,
    mature: 2,
  });
  const [date, setDate] = useState({
    checkinDate: null,
    checkoutDate: null,
  });

  console.log('datepickerVisible', datepickerVisible);
  const handleSelectDate = ({startDate, endDate}) => {
    console.log('Selected', {startDate, endDate});
    setDate({checkinDate: startDate, checkoutDate: endDate});
  };
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
      <View style={{paddingTop: 12}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        </Pressable>
      </View>
      <View
        style={{
          paddingTop: 36,
          flex: 1,
          minHeight: 140,
        }}>
        <Item
          icon={<PinSVG color={generalColor.black[25]}></PinSVG>}
          label={'Địa điểm'}
          value={'Chọn địa điểm'}
          onPress={() => {}}></Item>
        <Item
          icon={
            <AntDesign
              name="calendar"
              size={24}
              color={generalColor.black[25]}></AntDesign>
          }
          label={'Ngày'}
          value={
            date.checkinDate
              ? `${date.checkinDate} - ${date.checkoutDate}`
              : 'Chọn ngày'
          }
          onPress={() => {
            setDatepickerVisible(true);
            console.log('showModel');
          }}></Item>
        <Item
          placerholder={'Nhấn để chọn'}
          label={'Phòng và số lượng khách'}
          value={roomCustomerText(roomCustomer)}
          onPress={() => setRoomCustomerVisbile(true)}></Item>
      </View>
      <ButtonComponent text={'Tìm phòng'}></ButtonComponent>
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
      <ChooseRoomAndCustomer
        roomCustomer={roomCustomer}
        onChange={setRoomCustomer}
        onClose={() => setRoomCustomerVisbile(false)}
        isVisible={roomCustomerVisible}></ChooseRoomAndCustomer>
    </View>
  );
};

const Item = ({icon, label, placerholder, value, onPress}) => {
  return (
    <>
      <View style={{flexDirection: 'row', marginTop: 12, alignItems: 'center'}}>
        {icon && <View style={{marginRight: 12}}>{icon}</View>}
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInputComponent
        heightTextInput={60}
        colorText={'white'}
        editable={false}
        onPress={onPress}
        placeholder={placerholder}
        value={value}
        placeholderColor={generalColor.other.gray}
        marginBottom={0}
        rightContent={
          <AntDesign
            name="right"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        }
        styleTextInput={{
          ...textStyle.h[4],
          color: generalColor.other.gray,
          fontWeight: '400',
        }}
        style={{
          backgroundColor: generalColor.other.lightgray,
          borderWidth: 0,
        }}
      />
    </>
  );
};
export default UserSearchDetailScreen;

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    ...textStyle.h[4],
    fontWeight: '400',
  },
});
