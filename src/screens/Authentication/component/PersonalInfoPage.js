import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {center, row, rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {Formik} from 'formik';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ImagePickerModal from '@src/components/ImagePickerModal/ImagePickerModal';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {profileUserSchema} from './validateSchema';
const PersonalInfoPage = ({onNext, handleFinish}) => {
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    identityNumber: '',
  };
  const [imagesData, setImagesData] = useState({
    avatar: null,
    frontIdentityCard: null,
    backIdentityCard: null,
  });
  const [field, setField] = useState('');
  const [visible, setVisible] = useState(false);
  const handleFormSubmit = async values => {
    console.log('values', values);
    await onNext({
      frontIdentityCard: imagesData.frontIdentityCard,
      backIdentityCard: imagesData.backIdentityCard,
      selfieImg: imagesData.avatar,
      anotherData: {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        identityNumber: values.identityNumber,
      },
    });
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
    <ScrollView style={styles.container}>
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
            <Text style={[textStyle.h[3], {color: 'white', marginVertical: 4}]}>
              Thông tin cá nhân
            </Text>
            <View style={[row, {justifyContent: 'space-between'}]}>
              <View style={{flex: 1}}>
                <TextInputComponent
                  placeholder="Nhập Tên"
                  onChangeText={text => {
                    handleChange('firstName')(text);
                  }}
                  value={values.firstName}
                  widthTextInput={'80%'}
                  labelStyle={{color: 'white'}}
                  heightTextInput={40}
                  error={!!errors.firstName && !!touched.firstName}
                  errorMessage={errors.firstName}
                  styleTextInput={[textStyle.h[5]]}
                  style={styles.textinput}
                  placeholderColor="white"
                />
              </View>
              <View style={{flex: 1, marginLeft: 12}}>
                <TextInputComponent
                  placeholder="Nhập Họ"
                  onChangeText={text => {
                    handleChange('lastName')(text);
                  }}
                  value={values.lastName}
                  widthTextInput={'90%'}
                  labelStyle={{color: 'white'}}
                  heightTextInput={40}
                  error={!!errors.lastName && !!touched.lastName}
                  errorMessage={errors.lastName}
                  styleTextInput={[textStyle.h[5]]}
                  style={styles.textinput}
                  placeholderColor="white"
                />
              </View>
            </View>
            <TextInputComponent
              placeholder="Nhập Email"
              onChangeText={text => {
                handleChange('email')(text);
              }}
              value={values.email}
              widthTextInput={'90%'}
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
              keyboardType="numeric"
              labelStyle={{color: 'white'}}
              onChangeText={text => {
                handleChange('phoneNumber')(text);
              }}
              value={values.phoneNumber}
              error={!!errors.phoneNumber && !!touched.phoneNumber}
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
              keyboardType="numeric"
              labelStyle={{color: 'white'}}
              onChangeText={text => {
                handleChange('identityNumber')(text);
              }}
              value={values.identityNumber}
              error={!!errors.identityNumber && !!touched.identityNumber}
              errorMessage={errors.identityNumber}
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
                  setField(() => 'frontIdentityCard');
                  setVisible(() => true);
                }}
                style={styles.identityCard}>
                {imagesData.frontIdentityCard ? (
                  <Image
                    style={styles.img}
                    source={{uri: imagesData.frontIdentityCard.uri}}></Image>
                ) : (
                  <View style={center}>
                    <AntDesign
                      name="idcard"
                      color={generalColor.primary}
                      size={20}></AntDesign>
                    <Text style={{color: generalColor.primary}}>Mặt trước</Text>
                  </View>
                )}
              </TouchableOpacity>
              <View style={{width: 12}}></View>
              <TouchableOpacity
                onPress={async () => {
                  setField(() => 'backIdentityCard');
                  setVisible(() => true);
                }}
                style={styles.identityCard}>
                {imagesData.backIdentityCard ? (
                  <Image
                    style={styles.img}
                    source={{
                      uri: imagesData.backIdentityCard.uri,
                    }}></Image>
                ) : (
                  <View style={center}>
                    <AntDesign
                      name="idcard"
                      color={generalColor.primary}
                      size={20}></AntDesign>
                    <Text style={{color: generalColor.primary}}>Mặt sau</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={async () => {
                setField(() => 'avatar');
                setVisible(() => true);
              }}
              style={styles.avatar}>
              {imagesData.avatar ? (
                <Image
                  style={styles.img}
                  source={{uri: imagesData.avatar.uri}}></Image>
              ) : (
                <View style={center}>
                  <AntDesign
                    name="user"
                    color={generalColor.primary}
                    size={20}></AntDesign>
                  <Text style={{color: generalColor.primary}}>
                    Ảnh đại diện
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <ImagePickerModal
              onResult={images => {}}
              onResultOrigin={images => {
                console.log('images', images[0], field);
                setImagesData(() => ({...imagesData, [field]: images[0]}));
              }}
              visible={visible}
              onClose={() => setVisible(false)}></ImagePickerModal>
            <ButtonComponent
              onPress={() => {
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
    </ScrollView>
  );
};

export default PersonalInfoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: generalColor.other.darkblue,
  },
  buttonItem: {
    marginVertical: 20,
    paddingVertical: 12,
  },
  img: {width: '100%', height: '100%', resizeMode: 'contain'},
  textinput: {
    backgroundColor: undefined,
    borderColor: generalColor.white[50],
    paddingVertical: 4,
    borderWidth: 2,
  },
  identityCard: {
    borderRadius: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    backgroundColor: generalColor.other.lightgray,
  },
  avatar: {
    borderRadius: 12,
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 12,
    alignItems: 'center',
    height: 120,
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
