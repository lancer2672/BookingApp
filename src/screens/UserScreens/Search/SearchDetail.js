import {PinSVG} from '@src/assets/icons';
import ButtonComponent from '@src/components/Button';
import {
  DistrictModal,
  ProvinceModal,
  WardModal,
} from '@src/components/LocationModal/LocationModal';
import TextInputComponent from '@src/components/TextInputComponent';
import {goBack, navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {formatDate} from '@src/utils/textFormat';
import {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-ranges';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChooseRoomAndCustomer from './components/ChooseRoomAndCustomer';
0;
const roomCustomerText = ({room, mature, children}) => {
  return `${room} phòng - ${mature} người lớn ${
    children > 0 ? '- ' + children + ' trẻ em' : ''
  }`;
};
const locationText = location => {
  return ` ${location.ward?.wardName || ''}  ${
    location.district?.districtName || ''
  }`;
};
const UserSearchDetailScreen = () => {
  const [datepickerVisible, setDatepickerVisible] = useState(false);
  const [provinceVisible, setProvinceVisble] = useState(false);
  const [districtVisible, setDistrictVisble] = useState(false);
  const [wardVisbile, setWardVisible] = useState(false);
  const [location, setLocation] = useState({
    province: null,
    district: null,
    ward: null,
  });
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
    const currentDate = new Date();
    const selectedStartDate = new Date(startDate);

    // Kiểm tra nếu startDate lớn hơn thời gian hiện tại
    if (selectedStartDate <= currentDate) {
      console.error('Error: Start date must be greater than the current date');
      return;
    }

    console.log('Selected', startDate, new Date('2024-3-15'), {
      startDate: selectedStartDate,
      endDate,
    });

    setDate({
      checkinDate: selectedStartDate,
      checkoutDate: new Date(endDate),
    });
  };

  return (
    <ScrollView style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
      <View style={{paddingTop: 0, flexDirection: 'row', alignItems: 'center'}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.primary}></AntDesign>
        </Pressable>
        <Text style={styles.title}>Tìm kiếm</Text>
      </View>
      <View
        style={{
          paddingTop: 8,
          flex: 1,
          minHeight: 140,
        }}>
        <Item
          icon={<PinSVG color={generalColor.black[25]}></PinSVG>}
          label={'Tỉnh *'}
          placerholder={'Chọn địa điểm'}
          value={location.province?.provinceName || ''}
          onPress={() => {
            setProvinceVisble(true);
          }}></Item>
        <Item
          icon={<PinSVG color={generalColor.black[25]}></PinSVG>}
          label={'Huyện'}
          placerholder={'Chọn địa điểm'}
          value={location.district?.districtName || ''}
          onPress={() => {
            if (location.province) {
              setDistrictVisble(true);
            } else {
              setProvinceVisble(true);
            }
          }}></Item>
        <Item
          icon={<PinSVG color={generalColor.black[25]}></PinSVG>}
          label={'Phường - Thị trấn'}
          placerholder={'Chọn địa điểm'}
          value={location.ward?.wardName || ''}
          onPress={() => {
            if (location.district) {
              setWardVisible(true);
            } else {
              setProvinceVisble(true);
            }
          }}></Item>
        <Item
          icon={
            <AntDesign
              name="calendar"
              size={24}
              color={generalColor.black[25]}></AntDesign>
          }
          label={'Ngày *'}
          value={
            date.checkinDate
              ? `${formatDate(date.checkinDate, 'dd')} tháng ${formatDate(
                  date.checkoutDate,
                  'MM',
                )} - ${formatDate(date.checkoutDate, 'dd')} tháng ${formatDate(
                  date.checkoutDate,
                  'MM',
                )}`
              : 'Chọn ngày'
          }
          onPress={() => {
            setDatepickerVisible(true);
            console.log('showModel');
          }}></Item>
        <Item
          placerholder={'Nhấn để chọn'}
          label={'Phòng và số lượng khách *'}
          value={roomCustomerText(roomCustomer)}
          onPress={() => setRoomCustomerVisbile(true)}></Item>
      </View>
      <ButtonComponent
        style={{marginTop: 20}}
        onPress={() => {
          navigate('UserSearchResultScreen', {
            roomCustomer,
            date,
          });
        }}
        text={'Tìm phòng'}></ButtonComponent>
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
      <ProvinceModal
        onSelect={p => {
          setLocation(() => ({...location, province: p}));
          setDistrictVisble(true);
        }}
        isVisible={provinceVisible}
        onClose={() => {
          setProvinceVisble(false);
        }}></ProvinceModal>
      <DistrictModal
        provinceId={location.province?.id}
        onSelect={p => {
          setLocation({...location, district: p});
          setWardVisible(true);
        }}
        isVisible={districtVisible}
        onClose={() => {
          setDistrictVisble(false);
        }}></DistrictModal>

      <WardModal
        districtId={location.district?.id}
        onSelect={p => {
          setLocation({...location, ward: p});
          setWardVisible(false);
        }}
        isVisible={wardVisbile}
        onClose={() => {
          setWardVisible(false);
        }}></WardModal>
    </ScrollView>
  );
};

const Item = ({icon, label, placerholder, value, onPress}) => {
  return (
    <>
      <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
        {icon && <View style={{marginRight: 12}}>{icon}</View>}
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInputComponent
        heightTextInput={48}
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
            size={20}
            color={generalColor.other.gray}></AntDesign>
        }
        styleTextInput={{
          ...textStyle.h[5],
          fontSize: 18,
          color: generalColor.black[100],
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
    color: generalColor.primary,
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
});
