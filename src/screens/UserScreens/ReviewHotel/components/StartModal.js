import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {SCREEN_HEIGHT} from '@src/utils/constant';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const listStar = [1, 2, 3, 4, 5];
const StartModal = ({isVisible, onPress, onClose}) => {
  const handleItemClick = () => {
    // onPress()
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

        {listStar.map(item => {
          return (
            <Item onPress={handleItemClick} content={item} count={item}></Item>
          );
        })}
      </View>
    </ReactNativeModal>
  );
};
const Item = ({count, onPress, content, isSelected}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...rowCenter, marginVertical: 8}}>
        <View
          style={{minWidth: 30, flexDirection: 'row', alignItems: 'center'}}>
          {new Array(count).fill(0).map(() => {
            return (
              <AntDesign
                style={{marginRight: 4}}
                name="star"
                color={'white'}
                size={20}></AntDesign>
            );
          })}
        </View>
        <Text style={styles.content}>{content}</Text>
        {true && <Entypo name="check" color={'white'} size={32}></Entypo>}
      </View>
    </TouchableOpacity>
  );
};
export default StartModal;

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
