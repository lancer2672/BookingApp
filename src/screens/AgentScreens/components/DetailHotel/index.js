import {useRoute} from '@react-navigation/native';
import ButtonComponent from '@src/components/Button';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DetailHotel = () => {
  // useEffect(() => {
  //     handleShowMessage();
  // }, []);
  // const handleShowMessage = () => {
  //     showMessage({
  //         message: 'Cập nhật thất bại',
  //         type: 'danger',
  //     });
  // };
  const route = useRoute();
  const {hoteldata} = route.params;
  return (
    <View style={{backgroundColor: '#F2F5FA'}}>
      <View style={styles.slider}>
        <Swiper autoplay={true} autoplayTimeout={3} style={styles.wrapper}>
          {hoteldata.images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{uri: image}} style={styles.imageslider} />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>Thông tin chung</Text>
      </View>

      <View style={styles.main}>
        <FontAwesome5 name="hotel" size={20}></FontAwesome5>
        <Text style={styles.textmain}>{hoteldata.type}</Text>
      </View>
      <View style={styles.main}>
        <Entypo name="location" size={20}></Entypo>
        <Text style={styles.textmain}>{hoteldata.detail}</Text>
      </View>
      <View style={styles.main}>
        <FontAwesome name="money" size={20}></FontAwesome>
        <Text style={styles.textmain}>{hoteldata.price}</Text>
      </View>

      <View style={styles.title}>
        <Text style={styles.text}>Chi tiết tiện tích</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="right" size={20}></AntDesign>
        <Text style={styles.textmain}>{hoteldata.tienich}</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="right" size={20}></AntDesign>
        <Text style={styles.textmain}>{hoteldata.sales}</Text>
      </View>

      <View style={styles.title}>
        <Text style={styles.text}>Chính sách</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="right" size={20}></AntDesign>
        <Text style={styles.textmain}>{hoteldata.policy}</Text>
      </View>
      <ButtonComponent style={styles.delete} text="XOÁ"></ButtonComponent>
    </View>
  );
};

export default DetailHotel;

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    justifyContent: 'center',
    height: 30,
    backgroundColor: '#18C0C1',
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white',
  },
  textmain: {
    fontSize: 16,
    marginLeft: 5,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2.5,
    marginBottom: 2.5,
    height: 'auto',
    marginLeft: 20,
    marginRight: 20,
  },
  slider: {
    height: '30%',
  },
  imageslider: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: {
    width: '60%',
    marginLeft: '20%',
    marginTop: '50%',
    backgroundColor: '#18C0C1',
    borderRadius: 20,
  },
});
