import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
            minHeight: 130,
            margin: 'auto',
            padding: 12,
            borderRadius: 8,
            backgroundColor: 'white',
          }}>
          <View
            style={[
              rowCenter,
              {
                padding: 12,
                paddingTop: 2,
                paddingBottom: 17,
              },
            ]}>
            <Text
              style={[
                textStyle.h[4],
                {
                  color: generalColor.primary,
                  borderColor: generalColor.primary,
                },
              ]}>
              {heading}
            </Text>
            <Pressable
              onPress={onClose}
              style={{
                ...textStyle.content.small,
                textDecorationLine: 'underline',
                marginLeft: 'auto',
                color: generalColor.primary,
              }}>
              <AntDesign
                name="close"
                size={24}
                color={generalColor.primary}></AntDesign>
            </Pressable>
          </View>

          <View
            style={[
              rowCenter,
              {
                flex: 1,
                borderTopWidth: 2,
                borderColor: generalColor.primary,
                marginTop: 'auto',
                justifyContent: 'flex-end',
              },
            ]}>
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
    marginVertical: 2,
    flex: 1,
  },
  txt: {
    fontSize: 18,
    fontWeight: '500',
    color: generalColor.primary,
    textAlign: 'center',
  },
});
