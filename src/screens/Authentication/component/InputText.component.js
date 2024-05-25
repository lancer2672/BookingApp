import {forwardRef, memo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

const Error = styled(Text)`
  margin-top: 8px;
  color: tomato;
`;
const InputText = forwardRef(
  (
    {
      iconLeft,
      error,
      placeholder,
      text,
      setText,
      onBlur,
      disabled,
      passwordType,
      hasValidationError,
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <View>
        <TextInput
          mode="outlined"
          outlineStyle={{
            borderRadius: 0,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          }}
          contentStyle={{
            margin: 0,
          }}
          placeholderTextColor={'white'}
          textColor={'white'}
          editable={!disabled}
          outlineColor={hasValidationError ? '#b85454' : 'white'}
          style={styles.textInput}
          activeOutlineColor={hasValidationError ? '#b85454' : '#8145ba'}
          secureTextEntry={passwordType && !showPassword}
          // disabled={disabled}
          ref={ref}
          value={text}
          onBlur={onBlur}
          right={
            passwordType && (
              <TextInput.Icon
                size={20}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
                color={'white'}
                icon={showPassword ? 'eye' : 'eye-off'}
              />
            )
          }
          onChangeText={setText}
          placeholder={placeholder}></TextInput>
        {hasValidationError && <Error variant="error">{error}</Error>}
      </View>
    );
  },
);

export default memo(InputText);

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 8,

    fontSize: 14,
    padding: 0,
    color: 'white',
  },
  sep: {
    backgroundColor: '#666',
    borderRadius: 50,
    height: 2,
    flex: 1,
  },
});
