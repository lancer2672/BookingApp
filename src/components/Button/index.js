import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {Pressable, StyleSheet, Text, View} from 'react-native';
const ButtonComponent = ({style = {}, text, txtStyle = {}, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          backgroundColor: generalColor.primary,
          borderRadius: 2,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8,
          minHeight: 48,
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
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
