import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaskInput from 'react-native-mask-input';

const AppTextInput = props => {
  const {
    leftContent,
    rightContent,
    label,
    value,
    placeholder,
    onChangeText,
    error,
    errorMessage,
    keyboardType,
    maxLength,
    labelStyle = {},
    marginBottom = 20,
    labelRight,
    onPress,
    labelColor = generalColor.black['25'],
    hasPress = false,

    colorText = generalColor.white['100'],
    placeholderColor = generalColor.white['100'],
    heightTextInput,
    multiline = false,
    active = true,
    widthContainer,
    styleTextInput,
    isMask = false,
    editable = true,
    mask,
    secureTextEntry = false,
    style,
    containerStyle,
    autoFocus,
  } = props;

  const Wrapper = isMask ? MaskInput : TextInput;
  return (
    <View
      style={{
        width: widthContainer,
        marginBottom: marginBottom,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 8,
        }}>
        {label && (
          <Text
            style={{
              ...textStyle.h[4],
              color: generalColor.black['25'],
              ...labelStyle,
            }}>
            {label}
          </Text>
        )}
        {/* {hasChecked && (
          <AppCheckbox checked={checked} onPress={onPressChecked} />
        )} */}
        {labelRight && labelRight}
      </View>
      <View
        style={[
          {
            backgroundColor: generalColor.black[10],
          },
          styles.textInputContainer,
          style,
        ]}>
        {leftContent && leftContent}
        <Pressable onPress={onPress} style={styles.flexGrow}>
          <View style={{}}>
            <Wrapper
              mask={mask}
              multiline={multiline}
              autoCapitalize={'none'}
              editable={editable}
              maxLength={maxLength}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              onChangeText={onChangeText}
              value={value}
              placeholderTextColor={placeholderColor}
              autoFocus={autoFocus}
              placeholder={placeholder}
              style={[
                styles.textInput,
                {
                  color: colorText,
                  height: heightTextInput && heightTextInput,
                },
                styleTextInput,
              ]}
            />
          </View>
        </Pressable>

        {rightContent && rightContent}
      </View>
      {error && errorMessage && (
        <Text style={styles.textError}>{errorMessage}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
  textError: {
    color: 'tomato',
    fontSize: 12,
    marginLeft: 4,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    borderColor: generalColor.black[10],
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
  },
  textInput: {
    maxWidth: '90%',
    ...textStyle.content.medium,
  },
});
export default React.memo(AppTextInput);
