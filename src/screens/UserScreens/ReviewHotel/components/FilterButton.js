import {generalColor} from '@src/theme/color';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const FilterButton = ({onPress, style = {}, title, subtitle}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: generalColor.other.lightgray,
        borderRadius: 4,
        padding: 8,
        ...style,
      }}
      onPress={onPress}>
      <View style={{alignItems: 'center'}}>
        {title && title()}
        {subtitle && subtitle()}
      </View>
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
