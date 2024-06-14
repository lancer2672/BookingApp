import { useRoute } from '@react-navigation/native';
import bookingApi from '@src/api/booking';
import ButtonComponent from '@src/components/Button';
import ImagePickerModal from '@src/components/ImagePickerModal/ImagePickerModal';
import TextInputComponent from '@src/components/TextInputComponent';
import { goBack, navigate } from '@src/navigation/NavigationController';
import { addItem, getNotiKey } from '@src/store/as/as';
import useUserStore from '@src/store/user';
import { generalColor } from '@src/theme/color';
import { center, rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { formatCurrency } from '@src/utils/textFormat';
import { useFormik } from 'formik';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const PaymentMethod = {
  ATM: 'ATM',
  CASH: 'CASH',
};
const Payment = () => {
  const {date, roomCustomer, amount, roomIds, hotel} = useRoute().params;
  const [uploadImage, setUploadImage] = useState(null);
  const [visible, setVisible] = useState(false);
  const user = useUserStore(state => state.user);

  const [agentBank, setAgentBank] = useState({
    bank_name: 'Vietcombank',
    account_number: '071 1 00 0261892',
    qr_code:
      'https://hotel-booking-storage-30-04-2024.s3.ap-southeast-1.amazonaws.com/image/bank/bank-qr-f7f8357f-a359-43fb-8987-eedf9019149f.png',
    bank_name: 'Vietcombank',
  });

  const [selectedMethod, setSelectedMethod] = useState(PaymentMethod.CASH);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    // validationSchema: paymentSchema,
    onSubmit: async values => {
      // await addItem(getNotiKey(Date.now()), {
      //   title: 'Đặt phòng',
      //   description: 'Bạn đã đặt phòng thành công',
      //   createdAt: Date.now(),
      //   isSeen: false,

      // });
      // navigate('BookingResult', {
      //   date,
      //   roomCustomer,
      //   roomIds,
      //   hotel,
      //   amount,
      //   image: uploadImage,
      // });
    },
  });
  const createBooking = async () => {
    try {
      const formData = new FormData();
      formData.append('userId', user.id);
      roomIds.forEach((id)=>{
        
        formData.append('roomIds', id) // Convert array to JSON string
      })
      formData.append('deposit', hotel.deposit_percent == 0 ? 0 :(amount * hotel.deposit_percent) / 100,);
      formData.append('propertyId', hotel.id);
      formData.append('image', uploadImage); // Assuming no image for deposit
      formData.append('startDate', date.checkinDate);
      formData.append('endDate', date.checkoutDate);

      await bookingApi.create(formData)
      await addItem(getNotiKey(Date.now()), {
        title: 'Đặt phòng',
        description: 'Bạn đã đặt phòng thành công',
        createdAt: Date.now(),
        isSeen: false,
      });
      navigate('BookingResult', {
        date,
        roomCustomer,
        roomIds,
        hotel,
        amount,
        image: uploadImage,
      });
    } catch (er) {
      console.log('er', er);
    }
  };
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
                placeholder="Tên chủ tài khoản"
                placeholderColor="black"
                labelStyle={{color: generalColor.primary}}
                style={{...styles.input}}
                editable={false}
                styleTextInput={{color: 'black'}}
                value={agentBank.account_number}
                onChangeText={formik.handleChange('firstName')}
                onBlur={formik.handleBlur('firstName')}
                error={formik.touched.firstName || formik.errors.firstName}
                errorMessage={
                  formik.touched.firstName && formik.errors.firstName
                }
              />
            </View>
          </View>
          <TextInputComponent
            label="Tên ngân hàng"
            placeholder="Tên ngân hàng"
            placeholderColor="black"
            editable={false}
            labelStyle={{color: generalColor.primary}}
            style={styles.input}
            styleTextInput={{color: 'black'}}
            value={agentBank.bank_name}
            error={formik.touched.email || formik.errors.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            errorMessage={formik.touched.email && formik.errors.email}
          />
          <TextInputComponent
            label="Số tài khoản"
            placeholder="Số tài khoản"
            placeholderColor="black"
            labelStyle={{color: generalColor.primary}}
            style={styles.input}
            editable={false}
            styleTextInput={{color: 'black'}}
            value={agentBank.account_number}
            error={formik.touched.phoneNumber || formik.errors.phoneNumber}
            onChangeText={formik.handleChange('phoneNumber')}
            onBlur={formik.handleBlur('phoneNumber')}
            errorMessage={
              formik.touched.phoneNumber && formik.errors.phoneNumber
            }
          />

          <Text
            style={{
              ...textStyle.h[4],
              color: generalColor.primary,
            }}>
            Số tiền:{' '}
            {formatCurrency(
              Math.floor(Number((amount * hotel.deposit_percent) / 100)),
            )}
          </Text>

          <Text>Đặt cọc {hotel.deposit_percent}% tiền phòng</Text>
          <Image
            source={{uri: agentBank.qr_code}}
            style={{
              marginTop: 8,
              height: 120,
              width: 120,
              borderRadius: 4,
              alignSelf: 'center',
            }}></Image>
          <Text
            style={{
              marginTop: 12,
              ...textStyle.h[3],
              color: generalColor.primary,
              textAlign: 'left',
            }}>
            Ảnh chuyển khoản
          </Text>
          {/* <Item
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
          /> */}
          <ImagePickerModal
            onResult={images => {}}
            onResultOrigin={images => {
              console.log('images', images[0]);
              setUploadImage(() => images[0]);
            }}
            visible={visible}
            onClose={() => setVisible(false)}></ImagePickerModal>

          <TouchableOpacity
            onPress={async () => {
              setVisible(() => true);
            }}
            style={styles.identityCard}>
            {uploadImage ? (
              <Image
                style={styles.img}
                source={{
                  uri: uploadImage.uri,
                }}></Image>
            ) : (
              <View style={center}>
                <Text style={{color: generalColor.primary}}>tải ảnh lên</Text>
              </View>
            )}
          </TouchableOpacity>
          <ButtonComponent
            onPress={createBooking}
            style={{marginVertical: 24}}
            text="Tiếp tục"
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
  img: {width: '100%', height: '100%', resizeMode: 'contain'},
  identityCard: {
    borderRadius: 12,
    flex: 1,
    width: '50%',
    alignSelf: 'center',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    backgroundColor: generalColor.other.lightgray,
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
