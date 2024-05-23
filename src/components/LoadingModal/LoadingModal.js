import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

const LoadingModal = ({visible, onClose}) => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={visible} size="large" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  activityIndicatorWrapper: {
    // backgroundColor: '#FFFFFF',
    // height: 100,
    // width: 100,
    // borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingModal;
