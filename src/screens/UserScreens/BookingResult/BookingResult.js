import { useRoute } from '@react-navigation/native';
import { PinSVG } from '@src/assets/icons';
import ButtonComponent from '@src/components/Button';
import { goBack, navigate } from '@src/navigation/NavigationController';
import useUserStore from '@src/store/user';
import { generalColor } from '@src/theme/color';
import { row, rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { formatCurrency, formatDate } from '@src/utils/textFormat';
import { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Divider } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BookingResult = () => {
  const {date, roomCustomer, roomIds, hotel, amount, image} = useRoute().params;
  const [roomsBooked, setRoomBooked] = useState([]);
  const user = useUserStore(state => state.user);

  useEffect(() => {
    const rooms = hotel.rooms.filter(t => roomIds.includes(t.id));
    setRoomBooked(rooms);
  }, []);
  const handleBooking = () => {
    navigate('Home');
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
            Thông tin
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
            <Text style={{...styles.infoText, textAlign: 'right'}}>
              {roomCustomer.room} phòng {roomCustomer.mature} người{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 12,
            flex: 1,
          }}>
          <Divider style={{marginVertical: 12}} bold></Divider>
          <View style={[rowCenter,{paddingRight:8}]}>
            <Image
              source={{uri: hotel.avatar}}
              style={{
                width: 80,
                height: 80,
                margin: 12,
                borderRadius: 12,
              }}></Image>

            <View
              style={{
                ...row,
                padding: 12,
                paddingLeft: 4,
                paddingRight: 4,
                alignItems: 'flex-end',
              }}>
              <View style={{marginRight:8, flex:1,marginRight:20,paddingRight:20}}>
                <Text numberOfLines={2} style={[styles.txt]}>{hotel.name}</Text>
                <View style={rowCenter}>
                  <Text style={styles.rating}>{hotel.rating}</Text>
                  <Text> (120 lượt đánh giá)</Text>
                </View>
              </View>
            </View>
          </View>
          <ResultItem
            label={`Số lượng phòng`}
            content={roomsBooked.length}></ResultItem>
          <View style={[rowCenter, {alignItems: 'center', marginVertical: 8}]}>
            <Text
              style={{
                ...textStyle.h[4],
                color: generalColor.primary,
              }}>
              Trạng thái:
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: image ? generalColor.other.star : generalColor.active,
              }}>
              {' '}
              {image ? 'đang chờ xác nhận' : 'thành công'}
            </Text>
          </View>

          {roomsBooked.map((t, i) => {
            return (
              <>
                <ResultItem
                  label={`Mã phòng số ${i + 1}`}
                  content={t.id}></ResultItem>
                <ResultItem
                  label={`Tên phòng số ${i + 1}`}
                  content={t.name}></ResultItem>
                <ResultItem
                  label={`Giá phòng số ${i + 1}`}
                  content={formatCurrency(t.pricePerNight)}></ResultItem>
              </>
            );
          })}
          <ResultItem
            label="Tên khách hàng"
            content={`${user.lastName} ${user.firstName}`}></ResultItem>
          <ResultItem label="Email" content={user.email}></ResultItem>
          <ResultItem
            label="Số điện thoại"
            content={user.phoneNumber}></ResultItem>

          {image && (
            <>
              <ResultItem
                label="Số tiền đã cọc"
                content={formatCurrency(
                  Math.floor(Number((amount * hotel.deposit_percent) / 100)),
                )}></ResultItem>
              <Image
                source={{uri: image.uri}}
                style={{
                  marginVertical: 6,
                  height: 120,
                  width: 120,
                  borderRadius: 4,
                  alignSelf: 'center',
                }}></Image>
            </>
          )}

          <ResultItem
            label="Tổng"
            content={formatCurrency(amount)}></ResultItem>

          {/* not need deposit -> */}
          {!image && (
            <>
              <Text
                style={{
                  marginTop: 12,
                  ...textStyle.h[4],
                  color: generalColor.primary,
                  textAlign: 'center',
                }}>
                Quét mã để nhận phòng
              </Text>

              <View style={{alignSelf: 'center', marginVertical: 8}}>
                <QRCode></QRCode>
              </View>
            </>
          )}
          <ButtonComponent
            leftIcon={<PinSVG></PinSVG>}
            onPress={() => {
              navigate('ViewOnMap', {
                hotel,
              });
            }}
            style={{marginVertical: 12}}
            text={'Xem trên bản đồ'}></ButtonComponent>
          <ButtonComponent
            onPress={handleBooking}
            style={{marginVertical: 12}}
            text={'Quay về màn hình chính'}></ButtonComponent>
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default BookingResult;
export const ResultItem = ({label, content}) => {
  return (
    <View style={[rowCenter, {alignItems: 'center', marginVertical: 8}]}>
      <Text
        style={{
          ...textStyle.h[4],
          color: generalColor.primary,
        }}>
        {label}:{' '}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: generalColor.gray,
        }}>
        {content}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    // borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 2,
    marginRight:12,
    justifyContent: 'space-between',
  },
  txt: {
    ...textStyle.content.large
,
    color: generalColor.primary,
  },
  infoText: {
    color: generalColor.primary,
    textDecorationLine: 'underline',
    ...textStyle.h[4],
  },
  label: {
    textTransform: 'uppercase',
    ...textStyle.h[4],
    fontWeight: '400',
  },
  input: {
    marginBottom: 0,
    borderRadius: 0,
    textAlign: 'center',
    backgroundColor: generalColor.other.lightgray,
  },
});
