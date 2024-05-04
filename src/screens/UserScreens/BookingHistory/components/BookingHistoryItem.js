import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CreateReviewModal from '../../ReviewHotel/CreateReview';

const BookingHistoryItem = ({}) => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setVisible(true);
      }}>
      <View style={styles.container}>
        <Image
          source={{uri: 'https://picsum.photos/200'}}
          style={styles.img}></Image>
        <View style={{marginLeft: 12, justifyContent: 'space-between'}}>
          <Text
            style={{
              ...textStyle.content.medium,
              fontWeight: '500',
              marginBottom: 8,
            }}>
            Studio J Hotel
          </Text>
          <Text style={{...textStyle.content.small}}>
            Phường 12, Bà rịa Vũng Tàu
          </Text>
          <Text style={{...textStyle.content.medium, fontWeight: '500'}}>
            Check in 20-02-2020
          </Text>
          <Text
            style={{
              ...textStyle.content.medium,
              textDecorationLine: 'underline',
              fontWeight: '500',
              color: generalColor.primary,
            }}>
            Xem đánh giá của bạn
          </Text>
        </View>
      </View>
      <CreateReviewModal
        isVisible={visible}
        onClose={() => {
          setVisible(false);
        }}></CreateReviewModal>
    </TouchableOpacity>
  );
};

export default BookingHistoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: generalColor.other.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  img: {
    width: 100,
    height: 80,

    borderRadius: 12,
  },
});
