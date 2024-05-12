import { navigate } from '@src/navigation/NavigationController';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoomCard from './RoomCard';
import { goBack } from '@src/navigation/NavigationController';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { generalColor } from '@src/theme/color';
import { center, rowCenter } from '@src/theme/style';
import ButtonComponent from '@src/components/Button';
import textStyle from '@src/theme/text';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
const ListRoom = () => {
  const route = useRoute();
  const hotel = route.params
  const handlePress = () => {
    // This is where you specify the URL you want to link to
    Linking.openURL('https://example.com');
  };
  const [active, setActive] = useState('thamquan')
  const thamquan = () => {
    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
          <FontAwesome5 name='location-arrow' size={18} ></FontAwesome5>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 18 }}>Địa điểm tham quan hàng đầu</Text>
        </View>
        {hotel.around.visit.map((item) => (
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 30, marginTop: 5, marginLeft: 30, }}>
            <AntDesign name='pushpino' size={18} ></AntDesign>
            <Text style={{ marginLeft: 5, fontSize: 18, width: "60%", flexWrap: "wrap" }}>{item}</Text>
            {/* <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text> */}
          </View>
        ))}

      </View>
    )
  }
  const anuong = () => {
    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
          <FontAwesome5 name='location-arrow' size={18} ></FontAwesome5>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 18 }}>Nhà hàng và Coffee House</Text>
        </View>
        {hotel.around.food.map((item) => (
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 30, marginTop: 5, marginLeft: 30, }}>
            <AntDesign name='pushpino' size={18} ></AntDesign>
            <Text style={{ marginLeft: 5, fontSize: 18, width: "60%", flexWrap: "wrap" }}>{item}</Text>
            {/* <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text> */}
          </View>
        ))}

      </View>
    )
  }
  const dichuyen = () => {
    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
          <FontAwesome5 name='location-arrow' size={18} ></FontAwesome5>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 18 }}>Phương tiện di chuyển</Text>
        </View>
        {hotel.around.transport.map((item) => (
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 30, marginTop: 5, marginLeft: 30, }}>
            <AntDesign name='pushpino' size={18} ></AntDesign>
            <Text style={{ marginLeft: 5, fontSize: 18, width: "60%", flexWrap: "wrap" }}>{item}</Text>
            {/* <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text> */}
          </View>
        ))}


      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 12, marginTop: 12, ...rowCenter, marginBottom: 12 }}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        </Pressable>
        <Text
          style={{
            textTransform: 'uppercase',
            color: "black",
            ...textStyle.h[2],
            flex: 1,
            textAlign: 'center',
            marginRight: -12,
            fontFamily: 'serif',
          }}>
          Chi tiết Hotel
        </Text>
        <Pressable onPress={() => { navigate('CreateRoom') }}>
          <Ionicons
            name="add-circle"
            color={generalColor.primary}
            size={42}
          ></Ionicons>
        </Pressable>
      </View>

      <View style={{ width: "90%", marginLeft: "5%" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{hotel.name}</Text>
        <Text style={{ fontSize: 18 }}>{hotel.address}</Text>
        <TouchableOpacity onPress={handlePress} style={{}}>
          <Text style={{ color: 'blue', fontSize: 18 }}>Hiển thị trên bản đồ</Text>
        </TouchableOpacity>
        <Swiper
          style={styles.slider}
          autoplay={true}
          autoplayTimeout={3}
        >
          {hotel.images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: image }} style={styles.imageslider} />
            </View>
          ))}
        </Swiper>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Mô tả hotel</Text>
        <Text style={{ fontSize: 18 }}>{hotel.description}</Text>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Các tiện ích</Text>
        <View style={{ marginTop: 10 }}>
          {hotel.amenities.map((item) => (
            <View style={{ display: "flex", flexDirection: "row", marginBottom: 10, alignItems: "center" }}>
              <AntDesign name='check' size={20}  ></AntDesign>
              <Text style={{ fontSize: 18, marginLeft: 5, }}>{item.name}</Text>
            </View>
          ))}
        </View>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Chính sách và quy định</Text>
        <Text style={{ fontSize: 18 }}>{hotel.policy}</Text>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Xung quanh Hotel</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Button style={[styles.buton, active == "thamquan" && styles.active]} onPress={() => { setActive('thamquan') }}> <Text style={[{ fontSize: 18, color: "black" }, active == "thamquan" && { color: "white" }]}>Tham quan</Text></Button>
          <Button style={[styles.buton, active == "anuong" && styles.active]} onPress={() => { setActive('anuong') }}> <Text style={[{ fontSize: 18, color: "black" }, active == "anuong" && { color: "white" }]}>Ăn uống</Text></Button>
          <Button style={[styles.buton, active == "dichuyen" && styles.active]} onPress={() => { setActive('dichuyen') }}> <Text style={[{ fontSize: 18, color: "black" }, active == "dichuyen" && { color: "white" }]}>Di chuyển</Text></Button>
        </View>
        {active == "thamquan" && thamquan()}
        {active == "anuong" && anuong()}
        {active == "dichuyen" && dichuyen()}
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Danh sách các phòng</Text>
        <View style={styles.hotelCards}>
          {hotel.rooms.map((item) => (
            <RoomCard
              room={item}
            />
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
    height: "100%",
    marginTop: 10,
    alignItems: "center",
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
    marginBottom: 10
  },
  imageslider: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buton: {
    height: 50,
    textAlign: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderRadius: 0,
    marginRight: 5
  },
  active: {
    backgroundColor: generalColor.primary,
    borderRadius: 5
  }
});

export default ListRoom;
