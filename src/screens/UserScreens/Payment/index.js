import {useRoute} from '@react-navigation/native';
import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import {goBack, navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const PaymentMethod = {
  ATM: 'ATM',
  CASH: 'CASH',
};
const Payment = () => {
  const {date, roomCustomer, room, hotel} = useRoute().params;
  const handleBooking = () => {
    showMessage({
      message: 'Đặt phòng thành công',
      type: 'success',
    });
    navigate('BookingResult', {
      date,
      roomCustomer,
      room,
      hotel,
    });
  };
  const [selectedMethod, setSelectedMethod] = useState(PaymentMethod.CASH);
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
          <Pressable onPress={goBack}>
            <AntDesign
              name="left"
              size={24}
              color={generalColor.other.gray}></AntDesign>
          </Pressable>
          <Text
            style={{
              textTransform: 'uppercase',
              color: generalColor.primary,
              ...textStyle.h[2],
              flex: 1,
              textAlign: 'center',
              marginRight: 24,
              fontFamily: 'serif',
            }}>
            Thanh toán
          </Text>
        </View>
        <View
          style={{
            padding: 12,
            flex: 1,
          }}>
          <Divider style={{marginVertical: 12}} bold></Divider>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TextInputComponent
                label="Tên"
                placeholder="Nhập tên"
                placeholderColor="black"
                labelStyle={{color: generalColor.primary}}
                style={{...styles.input}}
                styleTextInput={{color: 'black'}}
              />
            </View>
            <View style={{flex: 1, marginLeft: 20}}>
              <TextInputComponent
                label="Họ"
                style={{...styles.input}}
                placeholder="Nhập Họ"
                labelStyle={{color: generalColor.primary}}
                placeholderColor="black"
                styleTextInput={{color: 'black'}}
              />
            </View>
          </View>
          <TextInputComponent
            label="Email"
            style={styles.input}
            labelStyle={{color: generalColor.primary}}
            placeholder="Nhập địa chỉ email"
            placeholderColor="black"
            styleTextInput={{color: 'black'}}
          />
          <TextInputComponent
            label="Số điện thoại"
            style={styles.input}
            labelStyle={{color: generalColor.primary}}
            text
            keyboardType="numeric"
            placeholder="Nhập số điện thoại"
            placeholderColor="black"
            styleTextInput={{color: 'black'}}
          />
          <Text
            style={{
              marginTop: 12,
              ...textStyle.h[3],
              color: generalColor.primary,
              textAlign: 'left',
            }}>
            Thanh toán
          </Text>
          <Item
            methodName={'Thẻ tín dụng'}
            src={require('../../../assets/icons/atm.png')}
            onClick={() => {
              setSelectedMethod(PaymentMethod.ATM);
            }}
            isSelected={selectedMethod == PaymentMethod.ATM}
            methodDes={'Thanh toán sử dụng thẻ tín dụng'}></Item>
          <Item
            methodName={'Tiền mặt'}
            isSelected={selectedMethod == PaymentMethod.CASH}
            src={require('../../../assets/icons/atm.png')}
            onClick={() => {
              setSelectedMethod(PaymentMethod.CASH);
            }}
            methodDes={'Thanh toán bằng tiền mặt'}></Item>

          <ButtonComponent
            onPress={handleBooking}
            style={{marginVertical: 24}}
            text={'Đặt phòng'}></ButtonComponent>
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default Payment;
const Item = ({methodName, src, methodDes, onClick, isSelected}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        ...rowCenter,
        paddingVertical: 8,
        borderBottomWidth: 1,
        marginTop: 8,
        paddingHorizontal: 4,
        backgroundColor: isSelected ? generalColor.primary : null,
        borderBottomColor: generalColor.other.gray,
      }}>
      <Image source={src}></Image>
      <View
        style={{
          flex: 1,
          marginLeft: 12,
        }}>
        <Text
          style={{
            marginTop: 2,
            ...textStyle.content.large,

            color: isSelected ? 'white' : generalColor.black[100],
          }}>
          {methodName}
        </Text>
        <Text
          style={{
            marginTop: 2,
            ...textStyle.content.medium,
            color: isSelected ? 'white' : generalColor.other.gray,
          }}>
          {methodDes}
        </Text>
      </View>
      <AntDesign
        name="right"
        size={24}
        color={isSelected ? 'white' : generalColor.other.gray}></AntDesign>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 18,
    justifyContent: 'space-between',
  },
  txt: {
    ...textStyle.content.large,
    color: generalColor.other.stronggray,
  },
  label: {
    textTransform: 'uppercase',
    ...textStyle.h[4],
    fontWeight: '400',
  },
  input: {
    marginBottom: 0,
    borderRadius: 0,
    textAlign: 'center',
    backgroundColor: generalColor.other.lightgray,
  },
});
