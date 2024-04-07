import {createNumberMask} from 'react-native-mask-input';

const numberMask = createNumberMask({
  separator: '.',
  precision: 3,
});
export const MASK_FORMAT = {
  NUMBER: numberMask,
};
