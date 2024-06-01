import ButtonComponent from '@src/components/Button';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const HotelCard = ({hotels}) => {
  const navigateToDetail = () => {
    navigate('DetalRoom', hotels);
  };
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Swiper style={styles.wrapper}>
          {hotels.images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{uri: image}} style={styles.imageslider} />
            </View>
          ))}
        </Swiper>
      </View>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          marginLeft: 20,
          color: generalColor.primary,

          marginTop: 20,
        }}>
        {hotels.name}
      </Text>
      <Text style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
        {hotels.address}
      </Text>
      <View style={rowCenter}>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 20,
            fontWeight: 'bold',
            marginTop: 5,
            color: generalColor.primary,
            marginRight: 4,
            marginBottom: 5,
          }}>
          {hotels.rating}
        </Text>
        <AntDesign
          name="star"
          color={generalColor.other.star}
          size={18}></AntDesign>
      </View>
      {hotels.amenities.map(item => (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 3,
            marginLeft: 20,
          }}>
          <AntDesign name="plus" size={16}></AntDesign>
          <Text
            style={{
              fontSize: 14,
              marginLeft: 5,
              marginTop: 0,
              width: '30%',
              fontStyle: 'italic',
            }}>
            {item.name}
          </Text>
        </View>
      ))}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HotelCard;
