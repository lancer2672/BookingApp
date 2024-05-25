import AntDesign from 'react-native-vector-icons/AntDesign';

import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {useFormik} from 'formik';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {object, ref, string} from 'yup';

const ResetPassword = () => {
  const theme = null;
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const resetPasswordSchema = object().shape({
    currentPassword: string().required('Mật khẩu hiện tại không được để trống'),
    newPassword: string()
      .min(8, 'Mật khẩu phải chứa ít nhất 8 ký tự')
      .matches(
        /^(?=.*[A-Z])(?=.*\d).+$/,
        'Mật khẩu phải chứa ít nhất một chữ cái viết hoa và một chữ số',
      )
      .required('Mật khẩu mới không được để trống'),
    confirmNewPassword: string()
      .oneOf([ref('newPassword'), null], 'Mật khẩu xác nhận không khớp')
      .required('Xác nhận mật khẩu không được để trống'),
  });
  const {handleChange, handleSubmit, values, errors, touched} = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: values => {
      console.log('Form data', values);
      showMessage({
        message: 'Lưu thông tin thành công',
        type: 'success',
      });
      resetFormInput();
    },
  });

  const resetUserPassword = async () => {
    showMessage({
      message: 'Lưu thông tin thành công',
      type: 'success',
    });
    showMessage({
      message: 'Lỗi. Lưu thông tin thất bại',
      type: 'danger',
    });
    resetFormInput();
  };
  const resetFormInput = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <View style={styles.container(theme)}>
      <View style={styles.header(theme)}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
          style={styles.touchable}>
          <AntDesign name="arrowleft" size={24} color={generalColor.primary} />
        </TouchableOpacity>
        <Text style={styles.headerText()}>Đổi mật khẩu</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label()}>Mật khẩu hiện tại</Text>
        <TextInput
          secureTextEntry
          style={styles.input()}
          onChangeText={handleChange('currentPassword')}
          value={values.currentPassword}
        />
        {errors.currentPassword && touched.currentPassword && (
          <Text style={styles.errorText}>{errors.currentPassword}</Text>
        )}
        <Text style={styles.label()}>Mật khẩu mới</Text>
        <TextInput
          secureTextEntry
          style={styles.input()}
          onChangeText={handleChange('newPassword')}
          value={values.newPassword}
        />
        {errors.newPassword && touched.newPassword && (
          <Text style={styles.errorText}>{errors.newPassword}</Text>
        )}
        <Text style={styles.label()}>Nhập lại mật khẩu</Text>
        <TextInput
          secureTextEntry
          style={styles.input()}
          onChangeText={handleChange('confirmNewPassword')}
          value={values.confirmNewPassword}
        />
        {errors.confirmNewPassword && touched.confirmNewPassword && (
          <Text style={styles.errorText}>{errors.confirmNewPassword}</Text>
        )}
        <TouchableOpacity onPress={handleSubmit} style={styles.saveBtn}>
          <Text style={styles.saveBtnContent()}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    backgroundColor: 'white',
  }),
  header: theme => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: generalColor.primary,
  }),
  touchable: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  errorText: {
    color: 'tomato',
  },
  headerText: theme => ({
    fontWeight: 'bold',
    fontSize: 28,
    color: generalColor.primary,
  }),
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  label: theme => ({
    color: generalColor.primary,
    fontSize: 18,
    opacity: 0.8,
    marginTop: 8,
    marginBottom: 12,
  }),
  input: theme => ({
    color: generalColor.primary,
    borderBottomWidth: 1,
    paddingVertical: 2,
    fontSize: 18,
    borderBottomColor: generalColor.primary,
  }),
  saveBtnContent: theme => ({
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  }),
  saveBtn: {
    backgroundColor: generalColor.primary,
    padding: 8,
    borderRadius: 4,
    marginVertical: 24,
  },
});
