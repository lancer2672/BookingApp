import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {center, rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {Formik} from 'formik';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
const PersonalInfoPage = ({onNext}) => {
  const [value, setValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    identityCard: '',
    frontIdentityCard: '',
    backIdentityCard: 'keke',
  };
  const handleFormSubmit = values => {
    onNext(values);
  };
  const [images, setImages] = useState([]);
  const selectImages = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
      multiple: false,
    };

    return launchImageLibrary(options, response => {
      if (response.assets) {
        return response.assets[0];
      }
      return null;
    });
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
        Đăng Ký
      </Text>
      <Text style={styles.content}>Điền thông tin bên dưới</Text>

      <View style={[rowCenter, {marginVertical: 12}]}>
        <View style={styles.sep}></View>

        <View style={styles.sep}></View>
      </View>

      <Formik
        validationSchema={profileUserSchema}
        initialValues={initialValues}
        onSubmit={handleFormSubmit}>
        {({
          values,
          errors,

          touched,
          handleChange,

          handleSubmit,
        }) => (
          <>
            <View style={rowCenter}>
              <TextInputComponent
                placeholder="Nhập Tên"
                onChangeText={text => {
                  handleChange('firstName')(text);
                }}
                value={values.firstName}
                widthTextInput={'80%'}
                label="Email"
                labelStyle={{color: 'white'}}
                heightTextInput={40}
                error={!!errors.firstName && !!touched.firstName}
                errorMessage={errors.firstName}
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
                placeholder="Nhập Họ"
                onChangeText={text => {
                  handleChange('lastName')(text);
                }}
                value={values.lastName}
                widthTextInput={'80%'}
                label="Email"
                labelStyle={{color: 'white'}}
                heightTextInput={40}
                error={!!errors.lastName && !!touched.lastName}
                errorMessage={errors.lastName}
                styleTextInput={[
                  {
                    paddingLeft: 12,
                  },
                  textStyle.h[5],
                ]}
                style={styles.textinput}
                placeholderColor="white"
              />
            </View>
            <TextInputComponent
              placeholder="Nhập Email"
              onChangeText={text => {
                handleChange('email')(text);
              }}
              value={values.email}
              widthTextInput={'80%'}
              label="Email"
              labelStyle={{color: 'white'}}
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
              placeholder="Nhập số điện thoại"
              widthTextInput={'80%'}
              heightTextInput={40}
              labelStyle={{color: 'white'}}
              onChangeText={text => {
                handleChange('phoneNumber')(text);
              }}
              value={values.phoneNumber}
              error={!!errors.c && !!touched.phoneNumber}
              errorMessage={errors.phoneNumber}
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
              placeholder="Nhập CCCD/CMND"
              widthTextInput={'80%'}
              heightTextInput={40}
              labelStyle={{color: 'white'}}
              onChangeText={text => {
                handleChange('identityCard')(text);
              }}
              value={values.c}
              error={!!errors.identityCard && !!touched.identityCard}
              errorMessage={errors.identityCard}
              styleTextInput={[
                {
                  paddingLeft: 12,
                },
                textStyle.h[5],
              ]}
              style={styles.textinput}
              placeholderColor="white"
            />
            <View style={rowCenter}>
              <TouchableOpacity
                onPress={async () => {
                  const image = await selectImages();
                  handleChange('frontIdentityCard')(image.uri);
                }}
                style={styles.identityCard}>
                {values.frontIdentityCard ? (
                  <Image
                    style={{flex: 1}}
                    source={{uri: values.frontIdentityCard}}></Image>
                ) : (
                  <View style={center}>
                    <AntDesign
                      name="idcard"
                      color={generalColor.primary}
                      size={20}></AntDesign>
                    <Text style={{color: 'white'}}>Mặt trước</Text>
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  const image = await selectImages();
                  handleChange('backIdentityCard')(image.uri);
                }}
                style={styles.identityCard}>
                {values.backIdentityCard ? (
                  <Image
                    style={{flex: 1}}
                    source={{uri: values.backIdentityCard}}></Image>
                ) : (
                  <View style={center}>
                    <AntDesign
                      name="idcard"
                      color={generalColor.primary}
                      size={20}></AntDesign>
                    <Text style={{color: 'white'}}>Mặt sau</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <ButtonComponent
              onPress={() => {
                console.log('press');
                handleSubmit();
              }}
              style={styles.buttonItem}
              text="Tiếp tục"
            />
          </>
        )}
      </Formik>

      <Pressable
        onPress={() => {
          navigate('SignIn');
        }}
        style={{
          marginTop: 'auto',
          alignSelf: 'center',
          marginBottom: 12,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Đã có tài khoản{' '}
        </Text>
        <Text
          style={{
            color: 'white',
            textDecorationLine: 'underline',
            fontWeight: '500',
          }}>
          Đăng nhập
        </Text>
      </Pressable>
    </View>
  );
};

export default PersonalInfoPage;

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
  identityCard: {
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 200,
    backgroundColor: generalColor.other.lightgray,
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
