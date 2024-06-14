import { useRoute } from '@react-navigation/native';
import { reviewBookingMock } from '@src/mock/mock';
import { goBack, navigate } from '@src/navigation/NavigationController';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { useState, useEffect } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import { Button } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReviewHotel from './ReviewHotel';
import LoadingModal from '@src/components/LoadingModal/LoadingModal';
import useRatingStore from '@src/store/rating';
import ratingsApi from '@src/api/rating';
const DetailHotel = () => {
  const [isLoading, setIsloading] = useState(false);
  const ratings = useRatingStore(state => state.ratings);
  const setRatings = useRatingStore(state => state.setRatings);
  const route = useRoute();
  const hotel = route.params;
  // useEffect(() => {
  //   (async () => {
  //     setIsloading(true);
  //     try {
  //       const resRatings = await ratingsApi.getRatings(hotel.id);
  //       setRatings(resRatings);
  //     } catch (er) {
  //       if (er.name === 'AbortError') {
  //         console.log('Fetch request was aborted');
  //       } else {
  //         console.log('er', er);
  //       }
  //     } finally {
  //       console.log('fetching user');
  //       setIsloading(false);
  //     }
  //   })();
  // }, hotel.id);



  const [isVisible, setIsVisible] = useState(false)
  const handlePress = () => {
    // This is where you specify the URL you want to link to
    Linking.openURL('https://example.com');
  };
  const [active, setActive] = useState('thamquan');
  // const thamquan = () => {
  //   return (
  //     <View>
  //       <View
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           marginTop: 15,
  //         }}>
  //         <FontAwesome5 name="location-arrow" size={18}></FontAwesome5>
  //         <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
  //           Địa điểm tham quan hàng đầu
  //         </Text>
  //       </View>
  //       {hotel.around.visit.map(item => (
  //         <View
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             marginRight: 30,
  //             marginTop: 5,
  //             marginLeft: 30,
  //           }}>
  //           <AntDesign name="pushpino" size={18}></AntDesign>
  //           <Text
  //             style={{
  //               marginLeft: 5,
  //               fontSize: 18,
  //               width: '60%',
  //               flexWrap: 'wrap',
  //             }}>
  //             {item}
  //           </Text>
  //           {/* <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text> */}
  //         </View>
  //       ))}
  //     </View>
  //   );
  // };
  // const anuong = () => {
  //   return (
  //     <View>
  //       <View
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           marginTop: 15,
  //         }}>
  //         <FontAwesome5 name="location-arrow" size={18}></FontAwesome5>
  //         <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
  //           Nhà hàng và Coffee House
  //         </Text>
  //       </View>
  //       {hotel.around.food.map(item => (
  //         <View
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             marginRight: 30,
  //             marginTop: 5,
  //             marginLeft: 30,
  //           }}>
  //           <AntDesign name="pushpino" size={18}></AntDesign>
  //           <Text
  //             style={{
  //               marginLeft: 5,
  //               fontSize: 18,
  //               width: '60%',
  //               flexWrap: 'wrap',
  //             }}>
  //             {item}
  //           </Text>
  //           {/* <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text> */}
  //         </View>
  //       ))}
  //     </View>
  //   );
  // };
  // const dichuyen = () => {
  //   return (
  //     <View>
  //       <View
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           marginTop: 15,
  //         }}>
  //         <FontAwesome5 name="location-arrow" size={18}></FontAwesome5>
  //         <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
  //           Phương tiện di chuyển
  //         </Text>
  //       </View>
  //       {hotel.around.transport.map(item => (
  //         <View
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             marginRight: 30,
  //             marginTop: 5,
  //             marginLeft: 30,
  //           }}>
  //           <AntDesign name="pushpino" size={18}></AntDesign>
  //           <Text
  //             style={{
  //               marginLeft: 5,
  //               fontSize: 18,
  //               width: '60%',
  //               flexWrap: 'wrap',
  //             }}>
  //             {item}
  //           </Text>
  //           {/* <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text> */}
  //         </View>
  //       ))}
  //     </View>
  //   );
  // };
  const navigateToListRoom = () => {
    navigate('ListRoom', hotel);
    setIsVisible(false)
  };
  const navigateToStaff = () => {
    navigate('Staff', hotel);
    setIsVisible(false)
  };
  if (isLoading) {
    return (
      <LoadingModal
        onClose={() => {
          setIsloading(false);
        }}
        visible={isLoading}></LoadingModal>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View
        style={{ padding: 12, marginTop: 12, ...rowCenter, marginBottom: 12 }}>
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
          Chi tiết Hotel
        </Text>
        <Pressable
          onPress={() => {
            setIsVisible(true);
          }}>
          <AntDesign
            name="bars"
            color={generalColor.primary}
            size={35}></AntDesign>
        </Pressable>
      </View>

      <View style={{ width: '90%', marginLeft: '5%' }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: generalColor.primary,
            marginBottom: 10,
          }}>
          {hotel.name}
        </Text>
        <Text style={{ fontSize: 18 }}>{hotel.address}</Text>
        <TouchableOpacity onPress={handlePress} style={{}}>
          <Text style={{ color: 'blue', fontSize: 18, marginTop: 2 }}>
            Hiển thị trên bản đồ
          </Text>
        </TouchableOpacity>
        <Swiper style={styles.slider} autoplay={true} autoplayTimeout={3}>
          {hotel.images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: image.imageUrl }} style={styles.imageslider} />
            </View>
          ))}
        </Swiper>
        <Text
          style={{
            fontSize: 22,
            color: generalColor.primary,
            fontWeight: 'bold',
            marginBottom: 10,
            marginTop: 10
          }}>
          Mô tả hotel
        </Text>
        <Text style={{ fontSize: 18 }}>{hotel.description}</Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: generalColor.primary,
            marginTop: 10
          }}>
          Các tiện ích
        </Text>
        <View style={{ marginTop: 10 }}>
          {hotel.amenities.map(item => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <AntDesign name="check" size={20}></AntDesign>
              <Text style={{ fontSize: 18, marginLeft: 5 }}>{item.name}</Text>
            </View>
          ))}
        </View>
        {/* <Text
          style={{
            fontSize: 22,
            color: generalColor.primary,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Chính sách và quy định
        </Text>
        <Text style={{ fontSize: 18 }}>Khong co policy trong database</Text> */}
        {/* <Text
          style={{
            fontSize: 22,
            color: generalColor.primary,
            fontWeight: 'bold',
            marginBottom: 15,
            marginTop: 10
          }}>
          Xung quanh Hotel
        </Text>
        <Text style={{ fontSize: 18 }}>Khong co Xung quanh hotel trong database</Text> */}
        {/* <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            style={[styles.buton, active == 'thamquan' && styles.active]}
            onPress={() => {
              setActive('thamquan');
            }}>
            {' '}
            <Text
              style={[
                { fontSize: 18, color: 'black' },
                active == 'thamquan' && { color: 'white' },
              ]}>
              Tham quan
            </Text>
          </Button>
          <Button
            style={[styles.buton, active == 'anuong' && styles.active]}
            onPress={() => {
              setActive('anuong');
            }}>
            {' '}
            <Text
              style={[
                { fontSize: 18, color: 'black' },
                active == 'anuong' && { color: 'white' },
              ]}>
              Ăn uống
            </Text>
          </Button>
          <Button
            style={[styles.buton, active == 'dichuyen' && styles.active]}
            onPress={() => {
              setActive('dichuyen');
            }}>
            {' '}
            <Text
              style={[
                { fontSize: 18, color: 'black' },
                active == 'dichuyen' && { color: 'white' },
              ]}>
              Di chuyển
            </Text>
          </Button>
        </View>
        {active == 'thamquan' && thamquan()}
        {active == 'anuong' && anuong()}
        {active == 'dichuyen' && dichuyen()} */}
        <View style={styles.hotelCards}>
          <Text
            style={{
              fontSize: 22,
              color: generalColor.primary,

              fontWeight: 'bold',
            }}>
            Đánh giá khách hàng
          </Text>
          <View>
            <ReviewHotel
              review={ratings}
            ></ReviewHotel>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        useNativeDriver={true}
        onRequestClose={() => setIsVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closebutton}
              onPress={() => setIsVisible(false)}>
              <AntDesign name="close" size={20}></AntDesign>
            </TouchableOpacity>

            <Pressable style={styles.option} onPress={navigateToListRoom}>
              <Text style={styles.txt}>Quản lý phòng</Text>
            </Pressable>
            <Pressable style={styles.option} onPress={navigateToStaff}>
              <Text style={styles.txt}>Quản lý nhân viên</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
const itemStyles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: 10,
  },
  text: {
    marginLeft: 4,
    fontSize: 18,
    fontWeight: '500',
  },
});
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
  modalContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 99,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    paddingTop: 40,
    paddingBottom: 30,
  },
  optionButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closebutton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  option: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 20,
    padding: 12,
    borderColor: generalColor.primary,
    borderWidth: 1
  },
  txt: {
    ...textStyle.h[4],
    fontWeight: 'bold',
    color: generalColor.primary,
    textAlign: 'center',
  },
});

export default DetailHotel;
