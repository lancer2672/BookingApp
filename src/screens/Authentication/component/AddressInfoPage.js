import ButtonComponent from '@src/components/Button';
import {
  DistrictModal,
  ProvinceModal,
} from '@src/components/LocationModal/LocationModal';
import TextInputComponent from '@src/components/TextInputComponent';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {Formik} from 'formik';

import {Pressable, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
const AddressInfoPage = ({onNext}) => {
  const [provinceVisible, setProvinceVisible] = useState(false);
  const [districtVisible, setDistrictVisible] = useState(false);
  const [wardVisible, setWardVisible] = useState(false);

  const initialValues = {
    province: null,
    district: null,
    ward: null,
  };
  const handleFormSubmit = values => {
    onNext(values);
  };
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
            <TextInputComponent
              placeholder="Chọn tỉnh"
              onPress={() => {
                setProvinceVisible(true);
              }}
              onChangeText={text => {
                // handleChange('email')(text);
              }}
              value={values.province}
              widthTextInput={'80%'}
              label="Tỉnh"
              labelStyle={{color: 'white'}}
              heightTextInput={40}
              error={!!errors.province && !!touched.province}
              errorMessage={errors.province}
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
              placeholder="Chọn huyện"
              onPress={() => {
                if (
                  values.province == null ||
                  Object.keys(values.province).length == 0
                )
                  return;
                setDistrictVisible(true);
              }}
              onChangeText={text => {
                // handleChange('email')(text);
              }}
              value={values.district}
              widthTextInput={'80%'}
              label="Tỉnh"
              labelStyle={{color: 'white'}}
              heightTextInput={40}
              error={!!errors.district && !!touched.district}
              errorMessage={errors.district}
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
              placeholder="Chọn phường/xã"
              onPress={() => {
                if (
                  values.district == null ||
                  Object.keys(values.district).length == 0
                )
                  return;
                setWardVisible(true);
              }}
              onChangeText={text => {
                // handleChange('email')(text);
              }}
              value={values.ward}
              widthTextInput={'80%'}
              label="Tỉnh"
              labelStyle={{color: 'white'}}
              heightTextInput={40}
              error={!!errors.ward && !!touched.ward}
              errorMessage={errors.ward}
              styleTextInput={[
                {
                  paddingLeft: 12,
                },
                textStyle.h[5],
              ]}
              style={styles.textinput}
              placeholderColor="white"
            />

            <ButtonComponent
              onPress={() => {
                console.log('press');
                handleSubmit();
              }}
              style={styles.buttonItem}
              text="Tạo tài khoản"
            />
            <ProvinceModal
              onSelect={province => {
                handleChange('province', province);
              }}
              isVisible={provinceVisible}
              onClose={() => {
                setProvinceVisible(false);
              }}></ProvinceModal>
            <DistrictModal
              onSelect={district => {
                handleChange('district', district);
              }}
              isVisible={districtVisible}
              onClose={() => {
                setDistrictVisible(false);
              }}></DistrictModal>
            <WardModal
              onSelect={ward => {
                handleChange('ward', ward);
              }}
              isVisible={wardVisible}
              onClose={() => {
                setWardVisible(false);
              }}></WardModal>
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

export default AddressInfoPage;

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
