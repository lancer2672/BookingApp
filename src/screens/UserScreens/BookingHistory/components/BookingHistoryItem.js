import {PinSVG} from '@src/assets/icons';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {formatDate} from '@src/utils/textFormat';
import {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CreateReviewModal from '../../ReviewHotel/CreateReview';

const BookingHistoryItem = ({item}) => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={[rowCenter, {alignItems: 'center', marginBottom: 12}]}>
          <Text
            style={{
              ...textStyle.content.medium,
              color: generalColor.primary,
              fontWeight: '500',
            }}>
            Ngày đặt phòng: {formatDate(item.checkInDate, 'dd-MM-yyyy')}
          </Text>

          <Text
            style={{
              ...textStyle.content.small,
              textDecorationLine: 'underline',
              marginBottom: 8,
              marginLeft: 'auto',
              color: generalColor.primary,
            }}>
            xem chi tiết
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <View style={{alignItems: 'center'}}>
            <Image source={{uri: item.hotel.avatar}} style={styles.img}></Image>
          </View>
          <View style={{marginLeft: 12, flex: 1}}>
            <View style={rowCenter}>
              <Text
                style={{
                  ...textStyle.content.medium,
                  fontWeight: '500',
                  marginBottom: 8,

                  color: generalColor.primary,
                }}>
                {item.hotel.name}
              </Text>
            </View>

            <View style={rowCenter}>
              <PinSVG height={18} color={generalColor.primary}></PinSVG>
              <Text numberOfLines={2} style={{...textStyle.content.small}}>
                {item.hotel.address}
              </Text>
            </View>

            <Pressable
              onPress={() => {
                setVisible(true);
              }}>
              <Text
                style={{
                  marginVertical: 4,
                  ...textStyle.content.medium,
                  textDecorationLine: 'underline',
                  fontWeight: '500',
                  color: generalColor.primary,
                }}>
                Xem đánh giá của bạn
              </Text>
            </Pressable>
          </View>
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
    padding: 12,
  },
  img: {
    width: 100,
    height: 80,

    borderRadius: 12,
  },
});
