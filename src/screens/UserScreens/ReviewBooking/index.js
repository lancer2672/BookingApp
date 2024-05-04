import {useRoute} from '@react-navigation/native';
import ButtonComponent from '@src/components/Button';
import {goBack, navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {formatCurrency, formatDate} from '@src/utils/textFormat';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReviewBooking = () => {
  const {roomCustomer, date, hotel, room} = useRoute().params;

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
            Review
          </Text>
        </View>
        <View style={[rowCenter, styles.header]}>
          <View style={{flex: 1}}>
            <Text>Check-in</Text>
            <Text style={styles.infoText}>
              {formatDate(date.checkinDate, 'dd/MM')}{' '}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text>Check-out</Text>
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
        <View
          style={{
            padding: 12,
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
                {formatCurrency(room.pricePerNight)}/ đêm
              </Text>
              <View
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
              </View>
            </View>
            <Image
              style={styles.img}
              source={{uri: 'https://picsum.photos/200'}}></Image>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#DDDDDD',
              backgroundColor: 'tomato',
            }}></View>
          <View>
            <Text
              style={{
                marginTop: 12,
                ...textStyle.h[3],
                color: generalColor.primary,
                textAlign: 'left',
              }}>
              Chính sách
            </Text>
            <PolicyItem></PolicyItem>
          </View>
          <FeeItem title="phí A"></FeeItem>
          <FeeItem title="phí B"></FeeItem>
          <FeeItem title="phí C"></FeeItem>

          <Divider style={{marginTop: 8}} bold></Divider>
          <FeeItem title={'Tổng cộng'}></FeeItem>
          <ButtonComponent
            onPress={() => {
              navigate('Payment');
            }}
            style={{marginVertical: 24, marginTop: 40}}
            text={'Tiếp tục'}></ButtonComponent>
        </View>
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
export default ReviewBooking;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 18,
    justifyContent: 'space-between',
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
