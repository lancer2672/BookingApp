import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';

const ImagePickerModal = ({visible, onClose, onResult, onResultOrigin}) => {
  const handleLaunchLibrary = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
      maxSelection: 4,
      multiple: true,
    };
    launchImageLibrary(options, response => {
      if (response.assets) {
        onResult(response.assets.map(asset => asset.uri));
        onClose();
        if (onResultOrigin) {
          onResultOrigin(response.assets);
        }
      }
    });
  };

  const handleLaunchCamera = () => {
    launchCamera({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        onResult([response.assets.map(asset => asset.uri)[0]]);
      }
      onClose();
    });
  };

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
        <View style={{height: 120, marginTop: 'auto'}}>
          <Pressable style={styles.option} onPress={handleLaunchLibrary}>
            <Text style={styles.txt}>Chọn file từ thiết bị</Text>
          </Pressable>
          <Pressable style={styles.option} onPress={handleLaunchCamera}>
            <Text style={styles.txt}>Chọn từ camera</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default ImagePickerModal;
const styles = StyleSheet.create({
  option: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 20,
    padding: 12,
  },
  txt: {
    ...textStyle.h[4],
    fontWeight: 'bold',
    color: generalColor.primary,
    textAlign: 'center',
  },
});
