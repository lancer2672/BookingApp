import {generalColor} from '@src/theme/color';
import {row, rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {formatCurrency} from '@src/utils/textFormat';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {navigate} from '@src/navigation/NavigationController';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const getColorByRoomStatus = s => {
  console.log("STatu's", s);
  return s == Room_Status.BOOKED ? 'tomato' : generalColor.status.checkedOut;
};
const StaffHome = () => {
  const staff = staffMockData;
  const rooms = hotelsMock.find(t => t.id == staff.hotelId)?.rooms;

  const renderItem = ({item, index}) => (
    <Pressable
      style={{
        margin: 4,
        marginTop: 12,
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
      }}
      onPress={() => {
        // onSelect(item);
      }}>
      <View></View>
      <Image
        resizeMode="cover"
        source={{uri: item.images[0]}}
        style={{
          borderRadius: 12,
          width: '100%',
          height: 130,
        }}></Image>
      <View style={[rowCenter, {marginBottom: 4, marginLeft: 4}]}>
        <Text style={[textStyle.h[4], {color: 'white'}]}>{item.name}</Text>
        <Text
          style={{
            color: getColorByRoomStatus(item.status_code),
            fontSize: 18,
            marginLeft: 8,
            fontWeight: '500',
          }}>
          ( {item.status} )
        </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Ionicons name="bed-outline" size={24} color={'white'}></Ionicons>
        <Text
          style={{
            color: 'white',
            ...textStyle.content.medium,
            marginRight: 12,
          }}>
          {item.bed} Giường
        </Text>

        <Ionicons name="person-outline" size={24} color={'white'}></Ionicons>
        <Text
          style={{
            color: 'white',
            ...textStyle.content.medium,
          }}>
          {item.numOfPeople} khách
        </Text>
      </View>
      <Text
        style={[
          textStyle.h[5],
          {color: 'white', fontWeight: 'bold', paddingVertical: 8},
        ]}>
        {formatCurrency(item.pricePerNight)}/ đêm
      </Text>
    </Pressable>
  );

  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/imgs/bg.png')}
        style={styles.bg}>
        <View style={[StyleSheet.absoluteFillObject, styles.overlay]}>
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            style={[StyleSheet.absoluteFillObject, {flex: 1}]}
            colors={[
              'rgba(9, 30, 61, 0.3)',
              'rgba(9, 30, 61, 0.4)',
              'rgba(9, 30, 61, 0.5)',
              'rgba(9, 30, 61, 0.6)',
              'rgba(9, 30, 61, 0.8)',
            ]}></LinearGradient>
        </View>
        <View
          style={[
            row,
            {
              padding: 12,
            },
          ]}>
          <View
            style={{
              flex: 1,
              marginLeft: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={[textStyle.h[2], {color: 'white', fontFamily: 'serif'}]}>
                Xin chào, {staff.name}
              </Text>
            </View>
            <IconButton
              icon="bell"
              size={24}
              onPress={() => {
                navigate('Notification');
              }}
              iconColor="white"
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          minHeight: SCREEN_HEIGHT - 100,
          flex: 1,
          padding: 12,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: generalColor.primary,
        }}>
        <View style={[rowCenter, {marginVertical: 8}]}>
          <View
            style={{
              width: 3,
              borderRadius: 25,

              height: 24,
              marginRight: 12,
              backgroundColor: 'white',
            }}></View>
          <Text style={[textStyle.h[3], {color: 'white', flex: 1}]}>
            Danh sách phòng
          </Text>
        </View>
        <View style={{flex: 1, backgroundColor: generalColor.primary}}>
          {rooms
            .sort((a, b) => a.status_code - b.status_code)
            .map((t, i) => {
              return renderItem({item: t, index: i});
            })}
        </View>
      </View>
    </ScrollView>
  );
};

export default StaffHome;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'tomato',
    flex: 1,
    height: 100,
  },
  playBtn: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlay: {
    // backgroundColor: "blue",
  },
  backBtn: {
    padding: 12,
    margin: 12,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(232, 232, 232, 0.7)',
  },
});

import {hotelsMock, staffMockData} from '@src/mock/mock';
import {Room_Status, SCREEN_HEIGHT} from '@src/utils/constant';
