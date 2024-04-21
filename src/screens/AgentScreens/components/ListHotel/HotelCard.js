import ButtonComponent from '@src/components/Button';
import {navigate} from '@src/navigation/NavigationController';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
const HotelCard = ({name, location, price, sales, images, policy, detail}) => {

  const navigateToDetail = () => {
    navigate('ListRoom');
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
        {name}
      </Text>
      <Text style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
        {location}
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
        text="Chi tiết"
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
    paddingBottom: 20,
    backgroundColor: '#F2F5FA',
    width: '90%',
    marginLeft: '5%',
    marginBottom: 20,
    borderRadius: 20,
  },
  delete: {
    width: '30%',
    position: 'absolute',
    bottom: 5,
    right: 20,
    backgroundColor: '#18C0C1',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HotelCard;
