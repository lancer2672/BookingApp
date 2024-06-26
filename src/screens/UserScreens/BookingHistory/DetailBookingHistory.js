import { useRoute } from '@react-navigation/native';
import { expandAnimation } from '@src/animation';
import AskingModel from '@src/components/AskingModal/AskingModal';
import ButtonComponent from '@src/components/Button';
import { reviewBookingMock } from '@src/mock/mock';
import { goBack, navigate } from '@src/navigation/NavigationController';
import { addItem, getNotiKey } from '@src/store/as/as';
import { generalColor } from '@src/theme/color';
import { center, rowCenter } from '@src/theme/style';
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
  LayoutAnimation,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import QRCode from 'react-native-qrcode-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ListReview from '../ReviewHotel/components/ListReview';

const isReviewed = (userId, bookingHistory) => {};
const DetailBookingHitory = ({}) => {
  const {historyItem} = useRoute().params;

  const hotel = historyItem.property;
  const room = historyItem.rooms[0]
  const date = {
    checkinDate: historyItem.startDate,
    checkoutDate: historyItem.endDate,
  };
  const roomCustomer = {
    children: 0,
    room: 1,
    mature: 2,
  }
  const [reviewVisible, setRiewVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleNavigateReviewAll = () => {
    navigate('Review', {hotel});
  };
 
  const getQRTEXT = status => {
    switch (status) {
      case History_Status.NOT_CHECKED_IN:
        return 'Mã QR nhận phòng';
      case History_Status.NOT_CHECKED_OUT:
        return 'Mã QR trả phòng';
      default:
        return '';
    }
  };
  const handleCancelBooking = async () => {
    await addItem(getNotiKey(Date.now()), {
      title: 'Đặt phòng',

      description: 'Bạn đã huỷ phòng thành công',
      createdAt: Date.now(),
      isSeen: false,
    });
    showMessage({
      message: `Huỷ phòng thành công`,
      type: 'success',
    });
    setVisible(false);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
          <Pressable onPress={goBack}>
            <AntDesign
              name="left"
              size={24}
              color={generalColor.other.gray}></AntDesign>
          </Pressable>
          <Text
            style={{
              textTransform: 'uppercase',
              color: generalColor.primary,
              ...textStyle.h[2],
              flex: 1,
              textAlign: 'center',
              marginRight: 24,
              fontFamily: 'serif',
            }}>
            pHÒNG
          </Text>
        </View>
        <View style={[rowCenter, styles.header]}>
          <View style={{flex: 1}}>
            <Text>Nhận phòng</Text>
            <Text style={styles.infoText}>
              {formatDate(date.checkinDate, 'dd/MM')}{' '}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text>Trả phòng</Text>
            <Text style={styles.infoText}>
              {formatDate(date.checkoutDate, 'dd/MM')}{' '}
            </Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={{textAlign: 'right'}}>Phòng & Khách</Text>
            <Text
              numberOfLines={1}
              style={{...styles.infoText, textAlign: 'right'}}>
              {roomCustomer.room} phòng {roomCustomer.mature} người
            </Text>
            {roomCustomer.children != 0 && (
              <Text
                numberOfLines={1}
                style={{...styles.infoText, textAlign: 'right'}}>
                {roomCustomer.children} trẻ em
              </Text>
            )}
          </View>
        </View>
        <View style={[rowCenter, {marginLeft: 12, marginTop: 4}]}>
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
              color: getStatusColor(historyItem.status),
              fontWeight: '500',
              marginBottom: 12,
            }}>
            {getStatusText(historyItem.status)}
          </Text>
        </View>
        <View
          style={{
            padding: 12,
            paddingTop: 4,
            flex: 1,
            minHeight: 140,
          }}>
          <View style={{flexDirection: 'row', paddingBottom: 12}}>
            <View style={{flex: 1.4}}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  color: generalColor.primary,
                  ...textStyle.h[2],
                  textAlign: 'left',
                }}>
                {hotel.name}
              </Text>
              <Text
                style={{
                  color: generalColor.primary,
                  ...textStyle.h[4],
                  marginTop: 8,
                  textAlign: 'left',
                }}>
                {formatCurrency(room.price)}/ đêm
              </Text>
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Ionicons
                  name="bed-outline"
                  size={24}
                  color={generalColor.black[100]}></Ionicons>
                <Text
                  style={{
                    color: generalColor.black[100],
                    ...textStyle.content.medium,
                    marginRight: 12,
                  }}>
                  {room.bed} Giường
                </Text>

                <Ionicons
                  name="person-outline"
                  size={24}
                  color={generalColor.black[100]}></Ionicons>
                <Text
                  style={{
                    color: generalColor.black[100],
                    ...textStyle.content.medium,
                  }}>
                  {Number(room.numOfPeople) + room.numOfChildren} khách
                </Text>
              </View> */}
            </View>
            <Image
              style={styles.img}
              source={{uri: hotel.images[0]?.url}}></Image>
          </View>
       

          <View
            style={{
              borderTopWidth: 1,
              borderColor: '#DDDDDD',
              paddingTop: 10,
              marginTop: 10,
            }}>
            <View>
              <View style={rowCenter}>
                <Text style={styles.policy}>Đánh giá</Text>

                {reviewVisible ? (
                  <Pressable
                    onPress={handleNavigateReviewAll}
                    style={{marginLeft: 'auto'}}>
                    <Text style={{textDecorationLine: 'underline'}}>
                      {' '}
                      Xem tất cả
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      setRiewVisible(!reviewVisible);
                      LayoutAnimation.configureNext(expandAnimation);
                    }}
                    style={{marginLeft: 'auto'}}>
                    <AntDesign
                      name="down"
                      size={18}
                      color={generalColor.other.gray}></AntDesign>
                  </Pressable>
                )}
              </View>
            </View>

            {reviewVisible && (
              <View style={{}}>
                <ListReview
                  reviews={[reviewBookingMock[0]]}
                  hotel={hotel}></ListReview>
              </View>
            )}
          </View>

          <View
            style={{
              marginVertical: 8,
              height: 7,
              borderRadius: 15,
              backgroundColor: generalColor.other.lightgray,
            }}></View>
        
      
      
          <View style={center}>
            {(historyItem.status === History_Status.NOT_CHECKED_IN ||
              historyItem.status === History_Status.NOT_CHECKED_OUT) && (
              <QRCode value={historyItem.id.toString()} />
            )}
            <Text style={{marginTop: 4}}>{getQRTEXT(historyItem.status)}</Text>
          </View>
          {historyItem.status === History_Status.NOT_CHECKED_IN && (
            <ButtonComponent
              onPress={() => {
                setVisible(true);
              }}
              style={{
                marginVertical: 24,
                marginTop: 40,
                backgroundColor: 'tomato',
              }}
              text={'Huỷ phòng'}></ButtonComponent>
          )}
        </View>
        <AskingModel
          heading="Bạn có chắc muốn huỷ?"
          onYesClick={handleCancelBooking}
          onNoClick={() => {
            setVisible(false);
          }}
          noText={'Không'}
          yesText={'Có'}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}></AskingModel>
      </ScrollView>
    </View>
  );
};

const FeeItem = ({title}) => {
  return (
    <View
      style={{
        ...rowCenter,
        marginTop: 20,
        justifyContent: 'space-between',
      }}>
      <Text style={styles.txt}>{title}</Text>
      <Text style={styles.txt}> {formatCurrency(100000)}</Text>
    </View>
  );
};
const PolicyItem = ({}) => {
  return (
    <View>
      <Text
        style={{
          ...textStyle.h[4],
          color: generalColor.primary,
          textAlign: 'left',
          marginTop: 8,
          marginBottom: 4,
        }}>
        Chính sách bảo đảm
      </Text>
      <Text
        style={{
          ...textStyle.content.small,
          color: generalColor.black[100],
          textAlign: 'left',
        }}>
        Yêu cầu thẻ tín dụng khi đặt phòng
      </Text>
    </View>
  );
};
export default DetailBookingHitory;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 18,
    justifyContent: 'space-between',
  },
  policy: {
    ...textStyle.h[3],
    color: generalColor.primary,
    textAlign: 'left',
  },
  txt: {
    ...textStyle.content.medium,
    color: generalColor.other.stronggray,
  },
  label: {
    textTransform: 'uppercase',
    ...textStyle.h[4],
    fontWeight: '400',
  },
  infoText: {
    color: generalColor.primary,
    textDecorationLine: 'underline',
    ...textStyle.h[4],
  },
  img: {
    // height: 80,
    flex: 1,
  },
});
