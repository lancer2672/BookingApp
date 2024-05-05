import ButtonComponent from '@src/components/Button';
import {navigate} from '@src/navigation/NavigationController';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import { generalColor } from '@src/theme/color';
const RoomCard = ({type, tienich, price, sales, images, policy, detail}) => {
  const room = {
    type: type,
    tienich: tienich,
    price: price,
    sales: sales,
    images: images,
    policy: policy,
    detail: detail,
  };
  const navigateToDetail = () => {
    navigate('DetailRoom', room);
  };
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Swiper style={styles.wrapper}>
          {images.map((image, index) => (
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
          marginTop: 20,
        }}>
        {type}
      </Text>
      <Text style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
        {detail}
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginLeft: 20,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        {price}
      </Text>
      <Text style={{fontSize: 12, marginLeft: 20, marginTop: 5, width: '30%'}}>
        {sales}
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
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    width: '90%',
    marginBottom: 20,
    borderRadius: 20,
    height: 100,
  },
  delete: {
    width: '40%',
    position: 'absolute',
    bottom: 5,
    right: 20,
    backgroundColor: generalColor.primary,
    borderRadius: 15,
  },
  slider: {
    width: '100%',
    height:200,
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
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RoomCard;
