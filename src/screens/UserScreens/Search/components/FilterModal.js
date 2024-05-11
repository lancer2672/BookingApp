import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {SCREEN_HEIGHT} from '@src/utils/constant';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

const listStar = [1, 2, 3, 4, 5];
export const PRICE_CODE = {
  DOWN: 'PRICE_ASC',
  UP: 'PRICE_UP',
};
export const REVIEW_CODE = {
  DOWN: 'REVIEW_DOWN',
  UP: 'REVIEW_UP',
};

const FilterModal = ({isVisible, onSelect, selectedItem, onClose}) => {
  const handleItemClick = item => {
    // onPress()
    onSelect(item);
    onClose();
  };
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
        <Item
          onPress={() => handleItemClick(PRICE_CODE.UP)}
          isSelected={selectedItem === PRICE_CODE.UP}
          icon={
            <AntDesign
              name="arrowup"
              size={24}
              color={generalColor.white[100]}></AntDesign>
          }
          content={'Giá tiền tăng dần'}></Item>
        <Item
          onPress={() => handleItemClick(PRICE_CODE.DOWN)}
          icon={
            <AntDesign
              name="arrowdown"
              size={24}
              color={generalColor.white[100]}></AntDesign>
          }
          isSelected={selectedItem === PRICE_CODE.DOWN}
          content={'Giá tiền giảm dần'}></Item>
        <Item
          onPress={() => handleItemClick(REVIEW_CODE.UP)}
          isSelected={selectedItem === REVIEW_CODE.UP}
          content={'Số lượng đánh giá tích cực'}></Item>
      </View>
    </ReactNativeModal>
  );
};
const Item = ({onPress, content, icon, isSelected}) => {
  return (
    <TouchableOpacity style={{opacity: isSelected ? 1 : 0.5}} onPress={onPress}>
      <View style={{...rowCenter, marginVertical: 8}}>
        <View
          style={{
            minWidth: 30,
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
          }}>
          <Text style={styles.content}>{content}</Text>
        </View>
        {icon && icon}
      </View>
    </TouchableOpacity>
  );
};
export default FilterModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: generalColor.primary,
    marginTop: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: (SCREEN_HEIGHT * 2) / 7,
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
