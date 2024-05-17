import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

const CustomEditText = ({
  style,
  label,
  defaultValue,
  value,
  onChangeText = null,
  onPress = null,
  editable = true,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.defaultStyle, style]}>
      <Text style={styles.label}>{label}</Text>
      <View pointerEvents={editable ? 'auto' : 'none'}>
        <TextInput
          onChangeText={onChangeText}
          editable={editable}
          value={value}
          numberOfLines={1}
          style={[styles.input, {color: 'black'}]}
          defaultValue={defaultValue}></TextInput>
      </View>
    </Pressable>
  );
};

export default CustomEditText;

const styles = StyleSheet.create({
  defaultStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 16,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  label: {
    marginTop: 2,
    marginLeft: 12,
    color: 'gray',
  },
  input: {
    marginLeft: 12,
    marginBottom: 4,
    fontSize: 18,
    fontWeight: '500',
  },
});
