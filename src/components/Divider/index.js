import React from 'react';
import {View} from 'react-native';

const Divider = ({position = 'horizontal', color = 'black', size = 1}) => {
  const dividerStyles = {
    flex: position === 'horizontal' ? 0 : 1,
    width: position === 'horizontal' ? '100%' : size,
    height: position === 'horizontal' ? size : '100%',
    backgroundColor: color,
  };

  return <View style={dividerStyles} />;
};

export default Divider;
