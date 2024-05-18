import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const AskingModel = ({
  visible,
  heading = '',
  yesText,
  noText,
  onYesClick,
  onNoClick,
  onClose,
}) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={visible}
        animationIn="slideInUp"
        backdropOpacity={0.4}
        useNativeDriver={true}
        animationOut="slideOutDown"
        onBackButtonPress={onClose}
        onBackdropPress={onClose}>
        <View
          style={{
            height: 120,
            margin: 'auto',
            padding: 12,
            borderRadius: 8,
            backgroundColor: 'white',
          }}>
          <Text
            style={[
              textStyle.h[4],
              {
                color: generalColor.primary,
                borderColor: generalColor.primary,
                padding: 8,
                paddingBottom: 8,
                borderBottomWidth: 2,
              },
            ]}>
            {heading}
          </Text>
          <View style={[rowCenter, {flex: 1, justifyContent: 'flex-end'}]}>
            <Pressable style={styles.option} onPress={onYesClick}>
              <Text style={{...styles.txt, color: 'tomato'}}>{yesText}</Text>
            </Pressable>
            <Pressable style={styles.option} onPress={onNoClick}>
              <Text style={styles.txt}>{noText}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AskingModel;
const styles = StyleSheet.create({
  option: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 4,
    flex: 1,
  },
  txt: {
    fontSize: 16,
    fontWeight: '400',
    color: generalColor.primary,
    textAlign: 'center',
  },
});
