import {useRoute} from '@react-navigation/native';
import {hotelsMock} from '@src/mock/mock';
import {goBack, navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {formatDate} from '@src/utils/textFormat';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RoomItem from '../components/RoomItem';

const UserSearchResultScreen = () => {
  const {date, roomCustomer} = useRoute().params;
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 12,
            marginTop: 12,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Pressable onPress={goBack}>
            <AntDesign
              name="left"
              size={24}
              color={generalColor.primary}></AntDesign>
          </Pressable>
          <Text
            style={{
              flex: 1,
              marginRight: 24,
              textTransform: 'uppercase',
              color: generalColor.primary,
              ...textStyle.h[2],
              textAlign: 'center',
            }}>
            Phòng
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
            <Text style={{...styles.infoText, textAlign: 'right'}}>
              {roomCustomer.room} phòng {roomCustomer.mature} người{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingTop: 12,
            flex: 1,
            minHeight: 140,
          }}>
          {/* {hotels.map(hotel => (
          ))} */}
          <RoomItem
            hotel={hotelsMock[0]}
            room={hotelsMock[0].rooms[0]}
            onPress={() => {
              navigate('ReviewBooking', {
                roomCustomer,
                date,
                hotel: hotelsMock[0],
                room: hotelsMock[0].rooms[0],
              });
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserSearchResultScreen;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 18,
    justifyContent: 'space-between',
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
});
