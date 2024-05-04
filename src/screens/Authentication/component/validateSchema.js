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

export const profileUserSchema = object({
  firstName: string().required('Họ không được để trống'),
  lastName: string().required('Tên không được để trống'),
  email: string()
    .email('Địa chỉ email không hợp lệ')
    .required('Email không được để trống'),
  phoneNumber: string()
    .matches(/^(\+84|0)[3|5|7|8|9][0-9]{8}$/, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại không được để trống'),
  identityCard: string()
    .matches(/^[0-9]{9}$|^[0-9]{12}$/, 'CMND/CCCD phải chứa 9 hoặc 12 số')
    .required('CMND/CCCD không được để trống'),
});
export const addressSchema = object({
  province: object().notOneOf([null, {}], 'Thông tin không được để trống'),
  district: object().notOneOf([null, {}], 'Thông tin không được để trống'),
  ward: object().notOneOf([null, {}], 'Thông tin không được để trống'),
});
