import { PinSVG } from '@src/assets/icons';
import { navigate } from '@src/navigation/NavigationController';
import { generalColor } from '@src/theme/color';
import { rowCenter, shadowBox } from '@src/theme/style';
import textStyle from '@src/theme/text';
import {
  History_Status,
  getStatusColor,
  getStatusText,
} from '@src/utils/constant';
import { formatCurrency, formatDate } from '@src/utils/textFormat';
import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CreateReviewModal from '../../ReviewHotel/CreateReview';
import UserReviewModal from './UserReviewModal';
const isReviewed = (userId, bookingHistory) => {
  return userId == null;
};
const BookingHistoryItem = ({item}) => {
  const [visible, setVisible] = useState(false);
  const [visibleReview, setVisibleReview] = useState(false);
  const reviewClick = () => {
    if (isReviewed(1)) {
      setVisible(true);
    } else {
      setVisibleReview(true);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('DetailBookingHitory', {
          historyItem: item,
        });
      }}>
      <View
        style={[
          styles.container,
          shadowBox,
          {
            backgroundColor: generalColor.other.lightgray,
          },
        ]}>
        <View style={[rowCenter, {alignItems: 'center', marginBottom: 4}]}>
          <View style={rowCenter}>
            <Text
              style={{
                ...textStyle.content.medium,
                color: generalColor.primary,
              }}>
              Ngày đặt phòng:{' '}
            </Text>
            <Text
              style={{
                ...textStyle.content.medium,
                color: generalColor.primary,
                fontWeight: '500',
              }}>
              {formatDate(item.startDate, 'dd-MM-yyyy')}
            </Text>
          </View>

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
        <View style={rowCenter}>
          <Text
            style={{
              ...textStyle.content.medium,
              color: generalColor.primary,
              fontWeight: '400',
              marginBottom: 12,
            }}>
            Trạng thái:{' '}
          </Text>
          <Text
            style={{
              ...textStyle.content.medium,
              color: getStatusColor(item.status),
              fontWeight: '500',
              marginBottom: 12,
            }}>
            {getStatusText(item.status)}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{uri: item.property?.images.length > 0? item.property?.images[0].url: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"}}
              style={[shadowBox, styles.img]}></Image>
            <Text
              style={{
                ...textStyle.content.medium,

                marginVertical: 8,

                color: generalColor.primary,
              }}>
           
              {formatCurrency(
                item.totalPrice
              )}
            </Text>
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
                {item.property.name}
              </Text>
            </View>

            <View style={rowCenter}>
              <PinSVG height={18} color={generalColor.primary}></PinSVG>
              <Text numberOfLines={2} style={{...textStyle.content.small}}>
                {item.property.address}
              </Text>
            </View>
                
            {item.status == History_Status.CHECKED_OUT && (
              <Pressable onPress={reviewClick}>
                <Text
                  style={{
                    marginVertical: 4,
                    ...textStyle.content.medium,
                    textDecorationLine: 'underline',
                    fontWeight: '500',
                    color: generalColor.primary,
                  }}>
                  {isReviewed(1) ? 'Xem đánh giá của bạn' : 'Thêm đánh giá '}
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>

      <CreateReviewModal
        bookingHistory={item}
        isVisible={visible}
        onClose={() => {
          setVisible(false);
        }}></CreateReviewModal>
      <UserReviewModal
        bookingHistory={item}
        isVisible={visibleReview}
        onClose={() => {
          setVisibleReview(false);
        }}></UserReviewModal>
    </TouchableOpacity>
  );
};

export default BookingHistoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  img: {
    width: 100,
    elevation: 2,
    borderWidth: 1,
    height: 80,
    borderColor: 'gray',
    borderRadius: 12,
  },
});
