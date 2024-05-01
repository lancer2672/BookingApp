import ButtonComponent from '@src/components/Button';
import {goBack} from '@src/navigation/NavigationController';
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
            <Text style={styles.infoText}>{formatDate(new Date())} </Text>
          </View>
          <View style={{flex: 1}}>
            <Text>Check-out</Text>
            <Text style={styles.infoText}>{formatDate(new Date())} </Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={{textAlign: 'right'}}>Phòng & Khách</Text>
            <Text style={{...styles.infoText, textAlign: 'right'}}>
              1 phòng 2 người{' '}
            </Text>
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
                Beach house studio
              </Text>
              <Text
                style={{
                  color: generalColor.primary,
                  ...textStyle.h[4],
                  marginTop: 8,
                  textAlign: 'left',
                }}>
                {formatCurrency(100000)}/ đêm
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
                  1 Giường
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
                  3 khách
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
          <FeeItem></FeeItem>
          <FeeItem></FeeItem>
          <FeeItem></FeeItem>

          <Divider style={{marginTop: 8}} bold></Divider>
          <FeeItem></FeeItem>
          <ButtonComponent
            style={{marginVertical: 24}}
            text={'Thanh toán'}></ButtonComponent>
        </View>
      </ScrollView>
    </View>
  );
};

const FeeItem = () => {
  return (
    <View
      style={{
        ...rowCenter,
        marginTop: 20,
        justifyContent: 'space-between',
      }}>
      <Text style={styles.txt}> Tổng cộng</Text>
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
