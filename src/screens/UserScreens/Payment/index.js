import {useRoute} from '@react-navigation/native';
import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import {goBack, navigate} from '@src/navigation/NavigationController';
import {addItem, getNotiKey} from '@src/store/as/as';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useFormik} from 'formik';
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
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {paymentSchema} from './components/validateSchema';

export const PaymentMethod = {
  ATM: 'ATM',
  CASH: 'CASH',
};
const Payment = () => {
  const {date, roomCustomer, room, hotel} = useRoute().params;
  const handleBooking = async () => {
    await addItem(getNotiKey(Date.now()), {
      title: 'Đặt phòng',
      description: 'Bạn đã đặt phòng thành công',
      createdAt: Date.now(),
      isSeen: false,
    });
    navigate('BookingResult', {
      date,
      roomCustomer,
      room,
      hotel,
    });
  };
  const [selectedMethod, setSelectedMethod] = useState(PaymentMethod.CASH);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: paymentSchema,
    onSubmit: async values => {
      await addItem(getNotiKey(Date.now()), {
        title: 'Đặt phòng',
        description: 'Bạn đã đặt phòng thành công',
        createdAt: Date.now(),
        isSeen: false,
      });
      navigate('BookingResult', {
        date,
        roomCustomer,
        room,
        hotel,
      });
    },
  });
  console.log('formik.errors', formik.errors);
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
          <Pressable onPress={goBack}>
            <AntDesign name="left" size={24} color={generalColor.other.gray} />
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
        <View style={{padding: 12, flex: 1}}>
          <Divider style={{marginVertical: 12}} bold />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TextInputComponent
                label="Tên"
                placeholder="Nhập tên"
                placeholderColor="black"
                labelStyle={{color: generalColor.primary}}
                style={{...styles.input}}
                styleTextInput={{color: 'black'}}
                value={formik.values.firstName}
                onChangeText={formik.handleChange('firstName')}
                onBlur={formik.handleBlur('firstName')}
                error={formik.touched.firstName || formik.errors.firstName}
                errorMessage={
                  formik.touched.firstName && formik.errors.firstName
                }
              />
            </View>
            <View style={{flex: 1, marginLeft: 20}}>
              <TextInputComponent
                label="Họ"
                placeholder="Nhập Họ"
                placeholderColor="black"
                labelStyle={{color: generalColor.primary}}
                style={{...styles.input}}
                styleTextInput={{color: 'black'}}
                value={formik.values.lastName}
                error={formik.touched.lastName || formik.errors.lastName}
                onChangeText={formik.handleChange('lastName')}
                onBlur={formik.handleBlur('lastName')}
                errorMessage={formik.touched.lastName && formik.errors.lastName}
              />
            </View>
          </View>
          <TextInputComponent
            label="Email"
            placeholder="Nhập địa chỉ email"
            placeholderColor="black"
            labelStyle={{color: generalColor.primary}}
            style={styles.input}
            styleTextInput={{color: 'black'}}
            value={formik.values.email}
            error={formik.touched.email || formik.errors.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            errorMessage={formik.touched.email && formik.errors.email}
          />
          <TextInputComponent
            label="Số điện thoại"
            placeholder="Nhập số điện thoại"
            placeholderColor="black"
            labelStyle={{color: generalColor.primary}}
            style={styles.input}
            styleTextInput={{color: 'black'}}
            keyboardType="numeric"
            value={formik.values.phoneNumber}
            error={formik.touched.phoneNumber || formik.errors.phoneNumber}
            onChangeText={formik.handleChange('phoneNumber')}
            onBlur={formik.handleBlur('phoneNumber')}
            errorMessage={
              formik.touched.phoneNumber && formik.errors.phoneNumber
            }
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
            methodName="Thẻ tín dụng"
            src={require('../../../assets/icons/atm.png')}
            onClick={() => setSelectedMethod(PaymentMethod.ATM)}
            isSelected={selectedMethod === PaymentMethod.ATM}
            methodDes="Thanh toán sử dụng thẻ tín dụng"
          />
          <Item
            methodName="Tiền mặt"
            src={require('../../../assets/icons/atm.png')}
            onClick={() => setSelectedMethod(PaymentMethod.CASH)}
            isSelected={selectedMethod === PaymentMethod.CASH}
            methodDes="Thanh toán bằng tiền mặt"
          />
          <ButtonComponent
            onPress={formik.handleSubmit}
            style={{marginVertical: 24}}
            text="Đặt phòng"
          />
        </View>
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
