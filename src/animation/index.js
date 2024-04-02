import {LayoutAnimation} from 'react-native';

export const expandAnimation = {
  update: {
    duration: 300,
    property: LayoutAnimation.Properties.scaleXY,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 300,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};
