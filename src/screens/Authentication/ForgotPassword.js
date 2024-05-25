import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {showMessage} from 'react-native-flash-message';

import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {View} from 'react-native';
import InputTextComponent from './component/InputText.component';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();

  const sendEmailResetPassword = async () => {
    // await authApi.sendVerificationEmail({ email});
    showMessage({
      message: 'Thành công. Kiểm tra email của bạn',
      type: 'success',
    });
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.4}}></View>

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
        Quên Mật Khẩu
      </Text>
      {/* <Text style={styles.content}>Điền thông tin bên dưới</Text> */}

      <View style={[rowCenter, {marginVertical: 12}]}>
        <View style={styles.sep}></View>
        <Text style={{color: 'white'}}>
          Mật khẩu mới sẽ được gửi tới email của bạn
        </Text>
        <View style={styles.sep}></View>
      </View>
      <View style={{flex: 0.7}}></View>
      <InputTextComponent
        text={email}
        iconLeft={'email'}
        setText={setEmail}
        placeholder={'Nhập email'}></InputTextComponent>

      <TouchableOpacity
        style={styles.btnContinue}
        onPress={() => {
          sendEmailResetPassword();
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            color: generalColor.primary,
          }}>
          Tiếp tục
        </Text>
      </TouchableOpacity>
      <View style={{flex: 1.6}}></View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: generalColor.other.darkblue,
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  btnContinue: {
    padding: 6,
    justifyContent: 'center',
    marginTop: 32,
    alignItems: 'center',
    borderRadius: 4,

    backgroundColor: 'white',
  },
});
