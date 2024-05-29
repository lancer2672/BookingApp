import {useRoute} from '@react-navigation/native';
import {reviewBookingMock} from '@src/mock/mock';
import {goBack, navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoomCard from './RoomCard';
const ListRoom = () => {
  const route = useRoute();
  const hotel = route.params;

  return (
    <ScrollView style={styles.container}>
      <View
        style={{padding: 12, marginTop: 12, ...rowCenter, marginBottom: 12}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.primary}></AntDesign>
        </Pressable>
        <Text
          style={{
            textTransform: 'uppercase',
            color: 'black',
            ...textStyle.h[2],
            flex: 1,
            textAlign: 'center',
            marginRight: -12,
            fontFamily: 'serif',
          }}>
          Quản Lý Phòng
        </Text>
        <Pressable
          onPress={() => {
            navigate('CreateRoom');
          }}>
          <Ionicons
            name="add-circle"
            color={generalColor.primary}
            size={42}></Ionicons>
        </Pressable>
      </View>

      <View style={{width: '90%', marginLeft: '5%'}}>
   
        <Text
          style={{
            fontSize: 22,
            color: generalColor.primary,
            fontWeight: 'bold',
          }}>
        </Text>
        <View style={styles.hotelCards}>
          {hotel.rooms.map(item => (
            <RoomCard room={item} />
          ))}

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hotelCards: {
    width: '100%',
    height: '100%',
    marginTop: 10,
  },
  separator: {
    width: 10,
  },
  flatList: {
    width: '100%',
  },
  slider: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  imageslider: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buton: {
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 0,
    marginRight: 5,
  },
  active: {
    backgroundColor: generalColor.primary,
    borderRadius: 5,
  },
});

export default ListRoom;
