import {object, string} from 'yup';
export const paymentSchema = object({
  firstName: string().required('Tên không được để trống'),
  lastName: string().required('Họ không được để trống'),
  email: string()
    .email('Địa chỉ email không hợp lệ')
    .required('Email không được để trống'),
  phoneNumber: string()
    .matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại không được để trống'),
});
