import {hotelsMock} from '@src/mock/mock';
import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {formatDate} from '@src/utils/textFormat';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RoomItem from '../components/RoomItem';

const hotels = [
  {
    id: '1',
    name: 'Khách sạn A',
    image: 'https://picsum.photos/200',
    bed: 1,
    guest: 3,
  },
  {
    id: '2',
    name: 'Khách sạn B',
    image: 'https://picsum.photos/200',
    bed: 2,
    guest: 4,
  },
  {
    id: '3',
    name: 'Khách sạn C',
    image: 'https://picsum.photos/200',
    bed: 2,
    guest: 4,
  },
  // Thêm các khách sạn khác vào đây
];

const UserSearchResultScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 12, marginTop: 12}}>
          <Pressable onPress={goBack}>
            <AntDesign
              name="left"
              size={24}
              color={generalColor.other.gray}></AntDesign>
          </Pressable>
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
            paddingTop: 12,
            flex: 1,
            minHeight: 140,
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: generalColor.primary,
              ...textStyle.h[2],
              textAlign: 'center',
            }}>
            Phòng
          </Text>
          {/* {hotels.map(hotel => (
          ))} */}
          <RoomItem
            hotel={hotelsMock}
            room={hotelsMock[0].rooms[0]}
            onPress={() => console.log('Đặt phòng')}
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
