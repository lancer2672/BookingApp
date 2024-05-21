import ButtonComponent from '@src/components/Button';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
const RoomCard = ({room}) => {
  const navigateToDetail = () => {
    navigate('DetailRoom', room);
  };
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Swiper style={styles.wrapper}>
          {room.images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{uri: image}} style={styles.imageslider} />
            </View>
          ))}
        </Swiper>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 20,
          color: generalColor.primary,

          marginTop: 20,
        }}>
        {room.name}
      </Text>
      <Text
        style={{
          fontSize: 16,

          marginLeft: 20,
          marginTop: 10,
        }}>
        {room.bed} giường , tối đa {room.numOfPeople} người và{' '}
        {room.numOfChildren} trẻ em
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginLeft: 20,
          fontWeight: 'bold',
          color: generalColor.primary,

          marginTop: 10,
          marginBottom: 10,
        }}>
        Giá : {room.pricePerNight}/1d $
      </Text>
      <View
        style={{
          fontSize: 16,
          marginLeft: 20,
          backgroundColor: 'black',
          height: 1,
          width: '35%',
        }}></View>
      {/* {room.amenities.map(item => (
        <View style={{display:'flex', flexDirection:'row',marginTop: 3,marginLeft:20}}>
          <AntDesign name='plus' size={16}></AntDesign>
          <Text style={{ fontSize: 14, marginLeft: 5, marginTop: 0, width: '30%', fontStyle:'italic' }}>{item}</Text>
        </View>

      ))} */}
      <Text style={{fontSize: 16, marginLeft: 20, marginTop: 10}}>
        ( {room.status} )
      </Text>
      <ButtonComponent
        style={styles.delete}
        text="Xem Phòng"
        onPress={navigateToDetail}></ButtonComponent>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    paddingBottom: 20,
    backgroundColor: '#F2F5FA',
    width: '100%',
    marginBottom: 20,
    borderRadius: 20,
  },
  delete: {
    width: '40%',
    position: 'absolute',
    bottom: 0,
    right: 20,
    backgroundColor: generalColor.primary,
    borderRadius: 15,
  },
  slider: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  imageslider: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  slide: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RoomCard;
