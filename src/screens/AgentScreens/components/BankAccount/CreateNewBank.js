import ButtonComponent from '@src/components/Button';
import ImagePickerModal from '@src/components/ImagePickerModal/ImagePickerModal';
import TextInputComponent from '@src/components/TextInputComponent';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { SCREEN_HEIGHT } from '@src/utils/constant';
import { useFormik } from 'formik';
import { useState } from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { object, string } from 'yup';
export const bankSchema = object({
  accountNumber: string().required('số tài khoản không được để trống'),
  bankName: string().required('tên ngân hàng không được để trống'),
  accountName: string().required('tên không được để trống'),
});
import bankApi from '@src/api/bank';

const CreateNewBank = ({visible, onYesClick, onClose, account}) => {
  const day = new Date()
  const formik = useFormik({
    initialValues: {
      accountName: '',
      accountNumber: '',
      agentId: account.agentId,
      bankName: '',
      createdAt: day,
      id: account.length + 4,
      isDefault: false,
      qrCode: image
    },
    validationSchema: bankSchema,
    onSubmit: async values => {
      console.log('ahihi')
      bankApi.createBank(values).then(values=>{
        console.log("respose",values);
      }).catch(er=>{
        console.log('err',er.response);
      })
      
    },
  });
  const [imgVisible, setImgVisible] = useState(false);
  const [image, setImage] = useState('');
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={visible}
        animationIn="slideInUp"
        backdropOpacity={0.4}
        useNativeDriver={true}
        animationOut="slideOutDown"
        onBackButtonPress={onClose}
        onBackdropPress={onClose}>
        <View
  
          style={{
            height: SCREEN_HEIGHT * 0.8,
            padding: 12,
            borderRadius: 8,
            backgroundColor: 'white',
          }}>
          <View
            style={{  
            }}>
            <View
              style={[
                rowCenter,
                {
                  padding: 12,

                  paddingTop: 2,
                  borderBottomWidth: 1,
                  paddingBottom: 12,
                  marginBottom: 12,
                },
              ]}>
              <Text
                style={[
                  textStyle.h[3],
                  {
                    textAlign: 'left',

                    color: generalColor.primary,
                    borderColor: generalColor.primary,
                  },
                ]}>
                Thông tin ngân hàng
              </Text>
              <Pressable
                onPress={onClose}
                style={{
                  ...textStyle.content.small,
                  textDecorationLine: 'underline',
                  marginLeft: 'auto',
                  color: generalColor.primary,
                }}>
                <AntDesign
                  name="close"
                  size={24}
                  color={generalColor.primary}></AntDesign>
              </Pressable>
            </View>
            <TextInputComponent
              label="Tên ngân hàng"
              placeholder="Nhập tên ngân hàng"
              placeholderColor="black"
              labelStyle={{color: generalColor.primary}}
              style={{...styles.input}}
              styleTextInput={{color: 'black'}}
              value={formik.values.bankName}
              onChangeText={formik.handleChange('bankName')}
              onBlur={formik.handleBlur('bankName')}
              error={formik.touched.bank || formik.errors.bank}
              errorMessage={formik.touched.bank && formik.errors.bank}
            />
            <TextInputComponent
              label="Tên chủ tài khoản"
              placeholder="Nhập tên chủ tài khoản"
              placeholderColor="black"
              labelStyle={{color: generalColor.primary}}
              style={{...styles.input}}
              styleTextInput={{color: 'black'}}
              value={formik.values.accountName}
              onChangeText={formik.handleChange('accountName')}
              onBlur={formik.handleBlur('accountName')}
              error={formik.touched.accountName || formik.errors.accountName}
              errorMessage={
                formik.touched.accountName && formik.errors.accountName
              }
            />
            <TextInputComponent
              label="Số tài khoản"
              placeholder="Nhập số tài khoản"
              placeholderColor="black"
              labelStyle={{color: generalColor.primary}}
              style={{...styles.input}}
              styleTextInput={{color: 'black'}}
              keyboardType={'numeric'}
              value={formik.values.accountNumber}
              onChangeText={formik.handleChange('accountNumber')}
              onBlur={formik.handleBlur('accountNumber')}
              error={formik.touched.stk || formik.errors.stk}
              errorMessage={formik.touched.stk && formik.errors.stk}
            />
            <Pressable
              onPress={() => {
                setImgVisible(true);
              }}>
              <Image
                source={{uri: image[0]}}
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: 'center',
                  backgroundColor: 'gray',
                }}></Image>
            </Pressable>
            <Text
              style={{alignSelf: 'center', marginTop: 4, textAlign: 'center'}}>
              Đính kèm mã qr
            </Text>
            <ButtonComponent
              onPress={formik.handleSubmit}
              style={{marginVertical: 12, marginHorizontal: 12}}
              text={'Thêm'}></ButtonComponent>

            <ImagePickerModal
              onResult={image => {
                setImage(image);
                console.log('image', image);
              }}
              visible={imgVisible}
              onClose={() => setImgVisible(false)}></ImagePickerModal>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateNewBank;
const styles = StyleSheet.create({
  option: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 2,
    flex: 1,
  },
  txt: {
    fontSize: 18,
    fontWeight: '500',
    color: generalColor.primary,
    textAlign: 'center',
  },
  input: {
    marginBottom: 0,
    borderRadius: 0,
    textAlign: 'center',
    backgroundColor: generalColor.other.lightgray,
  },
});
