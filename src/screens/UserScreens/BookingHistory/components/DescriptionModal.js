import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@src/utils/constant';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DescriptionModal = ({visible, onClose, description}) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={visible}
        animationIn="slideInUp"
        backdropOpacity={0.4}
        style={{justifyContent: 'flex-end', margin: 0}}
        useNativeDriver={true}
        animationOut="slideOutDown"
        onBackButtonPress={onClose}
        onBackdropPress={onClose}>
        <View
          style={{
            width: SCREEN_WIDTH,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            height: SCREEN_HEIGHT * 0.66,
            backgroundColor: 'white',
            marginTop: 'auto',
          }}>
          <View
            style={[
              rowCenter,
              {
                paddingVertical: 16,
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderBottomColor: generalColor.primary,
                marginBottom: 12,
              },
            ]}>
            <Pressable onPress={onClose} style={{}}>
              <AntDesign
                name="close"
                size={24}
                color={generalColor.primary}></AntDesign>
            </Pressable>
            <Text style={[styles.txt, textStyle.h[3]]}>Mô tả Khách sạn</Text>
          </View>

          <ScrollView>
            <Text
              style={[
                styles.txt,
                {
                  textAlign: 'left',
                  fontWeight: 400,
                  fontSize: 15,
                  padding: 8,
                  marginRight: 0,
                  lineHeight: 24,
                },
              ]}>
              {description}
            </Text>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default DescriptionModal;
const styles = StyleSheet.create({
  option: {},
  txt: {
    ...textStyle.h[4],
    fontWeight: 'bold',
    flex: 1,
    marginRight: 24,
    color: generalColor.primary,
    textAlign: 'center',
  },
});
