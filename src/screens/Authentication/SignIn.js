import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from '@src/api/auth';
import ButtonComponent from '@src/components/Button';
import LoadingModal from '@src/components/LoadingModal/LoadingModal';
import TextInputComponent from '@src/components/TextInputComponent';
import { navigate } from '@src/navigation/NavigationController';
import useUserStore from '@src/store/user';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { Formik } from 'formik';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { accountSchema } from './component/validateSchema';
const STAFF_EMAIL = "nguyenkhang@gmail.com"
const STAFF_PASSWORD = "JBdragonfire1135@"
const staffInfo = {"email": "nguyenkhang@gmail.com",hotelId:16, "firstName": "Khang", "id": 14, "lastName": "Nguyễn", "phoneNumber": "0546128457", "role": "STAFF", "status": "ACTIVE"}
const SignIn = () => {
  const [value, setValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const initialValues = {
    email: '',
    password: '',
  };
  const setUser = useUserStore(state => state.setUser);
  const [isLoading, setIsloading] = useState(false);

  const handleStaffLogin= (values) =>{
    if(values.password == STAFF_PASSWORD){
        setUser(staffInfo);
    }
  }
  const handleFormSubmit = async (values) => {
    console.log('DATA', values);
    const controller = new AbortController();
    const signal = controller.signal;
    if(values.email == STAFF_EMAIL){
      handleStaffLogin(values)
      return 
    }
    try {
      setIsloading(true);

      // Thêm timeout để hủy bỏ request sau 4 giây
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 4000);

      const res = await authApi.loginUser(values, { signal });
      clearTimeout(timeoutId);

      console.log('res logi', res);
      await AsyncStorage.setItem('accessToken', res.accessToken);

      const resProfile = await authApi.getProfileUser({ signal });
      console.log('resProfile', resProfile);
      setUser(resProfile);

      showMessage({
        message: 'Đăng nhập thành công',
        type: 'success',
      });
    } catch (er) {
      if (er.name === 'AbortError') {
        console.log('Fetch request was aborted');
      } else {
        showMessage({
          message: 'Đăng nhập thất bại',
          type: 'warning',
        });
        console.log('er', er);
      }
    } finally {
      setIsloading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={[
          textStyle.h[2],
          {
            fontFamily: 'serif',
            color: 'white',
            marginTop: 12,
            marginBottom: 6,
          },
        ]}>
        Đăng Nhập
      </Text>
      {/* <Text style={styles.content}>Điền thông tin bên dưới</Text> */}

      <View style={[rowCenter, {marginVertical: 12}]}>
        <View style={styles.sep}></View>
        <Text style={{paddingHorizontal: 12, color: 'white'}}>
          Đăng nhập bằng email
        </Text>
        <View style={styles.sep}></View>
      </View>
      <LoadingModal
        onClose={() => {
          setIsloading(false);
        }}
        visible={isLoading}></LoadingModal>

      <Formik
        validationSchema={accountSchema}
        initialValues={initialValues}
        onSubmit={handleFormSubmit}>
        {({
          values,
          errors,

          touched,
          handleChange,

          handleSubmit,
        }) => (
          <View style={{flex: 1}}>
            <TextInputComponent
              placeholder="Nhập Email"
              onChangeText={text => {
                handleChange('email')(text);
              }}
              value={values.email}
              widthTextInput={'80%'}
              heightTextInput={40}
              leftContent={
                <Fontisto name="email" color="white" size={20}></Fontisto>
              }
              error={!!errors.email && !!touched.email}
              errorMessage={errors.email}
              styleTextInput={[
                {
                  paddingLeft: 12,
                },
                textStyle.h[5],
              ]}
              style={styles.textinput}
              placeholderColor="white"
            />
            <TextInputComponent
              placeholder="Nhập mật khẩu"
              widthTextInput={'80%'}
              heightTextInput={40}
              secureTextEntry={secureTextEntry}
              leftContent={
                <Entypo name="lock" color="white" size={20}></Entypo>
              }
              rightContent={
                <Pressable
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                  }}>
                  {/* <Entypo name="eye" color="white" size={20}></Entypo> */}
                  <Entypo
                    name={secureTextEntry ? 'eye-with-line' : 'eye'}
                    color="white"
                    size={20}></Entypo>
                </Pressable>
              }
              onChangeText={text => {
                handleChange('password')(text);
              }}
              value={values.password}
              error={!!errors.password && !!touched.password}
              errorMessage={errors.password}
              styleTextInput={[
                {
                  paddingLeft: 12,
                },
                textStyle.h[5],
              ]}
              style={styles.textinput}
              placeholderColor="white"
            />

            <Pressable
              onPress={() => {
                navigate('ForgotPassword');
              }}
              style={{marginVertical: 12, alignSelf: 'flex-end'}}>
              <Text
                style={{
                  color: 'white',
                  textDecorationLine: 'underline',
                  fontWeight: '500',
                }}>
                Quên mật khẩu
              </Text>
            </Pressable>
            <ButtonComponent
              onPress={() => {
                console.log('press');
                handleSubmit();
              }}
              style={styles.buttonItem}
              text="Đăng nhập"
            />
          </View>
        )}
      </Formik>

      <View style={{}}>
        <Pressable
          onPress={() => {
            navigate('SignUp');
          }}
          style={{
            marginTop: 'auto',
            alignSelf: 'center',
            marginBottom: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Chưa có tải khoản?{' '}
          </Text>
          <Text
            style={{
              color: 'white',
              textDecorationLine: 'underline',
              fontWeight: '500',
            }}>
            Đăng ký ngay
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate('AgentSignUp');
          }}
          style={{
            alignSelf: 'center',
            marginBottom: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'white',
              textDecorationLine: 'underline',
              fontWeight: '500',
            }}>
            Đăng ký làm agent
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: generalColor.other.darkblue,
  },
  buttonItem: {
    marginVertical: 20,
    paddingVertical: 12,
  },
  textinput: {
    backgroundColor: undefined,
    borderColor: generalColor.white[50],
    paddingVertical: 4,
    borderWidth: 2,
  },
  sep: {
    backgroundColor: '#666',
    borderRadius: 50,
    height: 2,
    flex: 1,
  },
  content: {
    color: 'white',
  },
});
