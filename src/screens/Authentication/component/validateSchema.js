import {object, string} from 'yup';

export const accountSchema = object({
  password: string()
    .min(8, 'Mật khẩu phải chứa ít nhất 8 ký tự')
    .required('Mật khẩu không được để trống')
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      'Mật khẩu phải chứa ít nhất một chữ cái viết hoa và một chữ số',
    ),
  email: string()
    .email('Địa chỉ email không hợp lệ')
    .required('Email không được để trống'),
});
