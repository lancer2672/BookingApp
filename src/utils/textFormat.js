import {format} from 'date-fns';
import {vi} from 'date-fns/locale/vi';
import {createNumberMask} from 'react-native-mask-input';

const numberMask = createNumberMask({
  separator: '.',
  precision: 3,
});
export const MASK_FORMAT = {
  NUMBER: numberMask,
};
export const formatCurrency = amount => {
  return amount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
};

export const formatDate = (date, formatStr = 'MM/yyyy') => {
  if (typeof date === 'number') {
    // Convert timestamp to Date object
    date = new Date(date * 1000);
  } else if (typeof date === 'string') {
    // Convert date string to Date object
    date = new Date(date);
  }

  return format(date, formatStr, {locale: vi});
};
