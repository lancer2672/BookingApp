import {PinSVG} from '@src/assets/icons';
import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UserSearchDetailScreen = () => {
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
      <View style={{paddingTop: 12}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        </Pressable>
      </View>
      <View
        style={{
          paddingTop: 36,
          flex: 1,
          minHeight: 140,
        }}>
        <Item
          icon={<PinSVG color={generalColor.black[25]}></PinSVG>}
          label={'Địa điểm'}
          value={'Chọn địa điểm'}
          onPress={() => {}}></Item>
        <Item
          icon={
            <AntDesign
              name="calendar"
              size={24}
              color={generalColor.black[25]}></AntDesign>
          }
          label={'Ngày'}
          value={'Chọn ngày'}
          onPress={() => {}}></Item>
        <Item
          label={'Phòng và số lượng khách'}
          value={'Nhấn để chọn'}
          onPress={() => {}}></Item>
      </View>
      <ButtonComponent text={'Tìm phòng'}></ButtonComponent>
    </View>
  );
};

const Item = ({icon, label, value, onPress}) => {
  return (
    <Pressable style={{marginTop: 12}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {icon && <View style={{marginRight: 12}}>{icon}</View>}
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInputComponent
        heightTextInput={60}
        colorText={'white'}
        editable={false}
        placeholder={value}
        value={value}
        placeholderColor={generalColor.other.gray}
        marginBottom={0}
        rightContent={
          <AntDesign
            name="right"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        }
        styleTextInput={{
          ...textStyle.h[4],
          color: generalColor.other.gray,
          fontWeight: '400',
        }}
        style={{
          backgroundColor: generalColor.other.lightgray,
          borderWidth: 0,
        }}
      />
    </Pressable>
  );
};
export default UserSearchDetailScreen;

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    ...textStyle.h[4],
    fontWeight: '400',
  },
});
