import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {StyleSheet, Text, View} from 'react-native';
const ButtonComponent = ({style = {}, text, txtStyle = {}}) => {
  return (
    <View
      style={{
        backgroundColor: generalColor.primary,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 55,
        ...style,
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          ...textStyle.h[4],
          ...txtStyle,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
