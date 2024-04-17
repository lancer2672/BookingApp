import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {SCREEN_HEIGHT} from '@src/utils/constant';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChooseRoomAndCustomer = ({
  roomCustomer,
  onChange,
  isVisible,
  onClose,
}) => {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn="slideInUp"
      useNativeDriver={true}
      animationOut="slideOutDown"
      style={{justifyContent: 'flex-end', margin: 0}}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.mark}></View>
        <Text style={{...textStyle.h[4], marginBottom: 12, color: 'white'}}>
          Chọn phòng và khách
        </Text>
        <Item
          value={roomCustomer.room}
          onChange={value => {
            onChange({
              ...roomCustomer,
              room: value,
            });
          }}
          content="Phòng"
          icon={
            <Ionicons name="bed" color={'white'} size={32}></Ionicons>
          }></Item>
        <Item
          value={roomCustomer.mature}
          onChange={value => {
            onChange(prev => ({
              ...prev,
              mature: value,
            }));
          }}
          content="Người lớn"
          icon={
            <Ionicons name="person" color={'white'} size={32}></Ionicons>
          }></Item>
        <Item
          value={roomCustomer.children}
          onChange={value => {
            onChange(prev => ({
              ...prev,
              children: value,
            }));
          }}
          content="Trẻ em (0 - 17 tuổi)"
          icon={
            <FontAwesome6
              name="children"
              color={'white'}
              size={32}></FontAwesome6>
          }></Item>
      </View>
    </ReactNativeModal>
  );
};
const Item = ({icon, content, value, onChange}) => {
  return (
    <View style={{...rowCenter, marginVertical: 8}}>
      <View style={{minWidth: 30}}>{icon}</View>
      <Text style={styles.content}>{content}</Text>
      <View style={{...rowCenter, justifyContent: 'flex-end', flex: 1}}>
        <Pressable
          onPress={() => {
            if (value > 0) {
              onChange(value - 1);
            }
          }}>
          <Entypo name="squared-minus" color={'white'} size={32}></Entypo>
        </Pressable>
        <Text
          style={{
            ...textStyle.h[4],
            color: 'white',
            textAlign: 'right',
            fontWeight: 500,
            width: 24,
            marginHorizontal: 8,
          }}>
          {value}
        </Text>
        <Pressable
          onPress={() => {
            onChange(value + 1);
          }}>
          <Entypo name="squared-plus" color={'white'} size={32}></Entypo>
        </Pressable>
      </View>
    </View>
  );
};
export default ChooseRoomAndCustomer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: generalColor.primary,
    marginTop: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: (SCREEN_HEIGHT * 1) / 3,
  },
  content: {
    marginLeft: 12,
    flex: 1,
    ...textStyle.content.medium,
    color: 'white',
  },
  mark: {
    backgroundColor: 'white',
    borderRadius: 12,
    height: 4,
    width: '50%',
    alignSelf: 'center',
    marginBottom: 8,
  },
});
