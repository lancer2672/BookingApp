import { navigate } from '@src/navigation/NavigationController';
import { FlatList, StyleSheet, Text, View, Pressable, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoomCard from './RoomCard';
import { goBack } from '@src/navigation/NavigationController';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import ButtonComponent from '@src/components/Button';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { autoScroll } from '@shopify/flash-list';
const ListRoom = () => {
  const room = [
    {
      type: 'Phòng đơn',
      tienich: 'Dieu hoa, ghe sofa, tu quan ao',
      price: '$300',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s',
        'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      ],
      detail: '2 người lớn',
      policy: 'Cam hut thuoc duoi moi hinh thuc',
      sales: 'Mien phi bua an sang di kem',
    },
    {
      type: 'Phòng đôi',
      tienich: 'Dieu hoa, ghe sofa, tu quan ao',
      price: '$300',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s',
        'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      ],
      detail: '4 người lớn + 2 trẻ em',
      policy: 'Cam hut thuoc duoi moi hinh thuc',
      sales: 'Mien phi bua an sang di kem',
    },
    {
      type: 'Phòng King',
      tienich: 'Dieu hoa, ghe sofa, tu quan ao, guong King 2m, kinh 360 do',
      price: '$300',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s',
        'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      ],
      detail: '2 người lớn + 1 trẻ em',
      policy: 'Cam hut thuoc duoi moi hinh thuc',
      sales: 'Mien phi bua an sang di kem',
    },
  ];
  const renderItem = ({ item }) => (
    <RoomCard
      images={item.images}
      type={item.type}
      tienich={item.tienich}
      price={item.price}
      sales={item.sales}
      policy={item.policy}
      detail={item.detail}
    />
  );
  const image = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s',
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s',
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  ]
  const tienichHotel = [
    {
      name: "Ho boi",
      icon: "water"
    },
    {
      name: "Wifi free",
      icon: "wifi"
    },
    {
      name: "Cho dau xe rieng",
      icon: "car"
    }
  ]
  const handlePress = () => {
    // This is where you specify the URL you want to link to
    Linking.openURL('https://example.com');
  };
  const [active, setActive] = useState('thamquan')
  const thamquan = () => {
    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" , marginTop:15}}>
          <FontAwesome5 name='location-arrow' size={18} ></FontAwesome5>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 18 }}>Dia diem tham quan hang dau</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 30 , marginTop:5}}>
          <Text style={{ marginLeft: 30, fontSize: 18, width:"60%", flexWrap:"wrap" }}>White rabbit park</Text>
          <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 30,  marginTop:5 }}>
          <Text style={{ marginLeft: 30, fontSize: 18, width:"60%", flexWrap:"wrap" }}>White rabbit park</Text>
          <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text>
        </View>
      </View>
    )
  }
  const anuong = () => {
    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" , marginTop:15}}>
          <FontAwesome5 name='location-arrow' size={18} ></FontAwesome5>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 18 }}>Nha hang duoc ua chuong</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 30 , marginTop:5}}>
          <Text style={{ marginLeft: 30, fontSize: 18, width:"60%", flexWrap:"wrap" }}>White rabbit park</Text>
          <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 30,  marginTop:5 }}>
          <Text style={{ marginLeft: 30, fontSize: 18, width:"60%", flexWrap:"wrap" }}>White rabbit park</Text>
          <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text>
        </View>
      </View>
    )
  }
  const dichuyen = () => {
    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" , marginTop:15}}>
          <FontAwesome5 name='location-arrow' size={18} ></FontAwesome5>
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 18 }}>San bay</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 30 , marginTop:5}}>
          <Text style={{ marginLeft: 30, fontSize: 18, width:"60%", flexWrap:"wrap" }}>White rabbit park</Text>
          <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 30,  marginTop:5 }}>
          <Text style={{ marginLeft: 30, fontSize: 18, width:"60%", flexWrap:"wrap" }}>White rabbit park</Text>
          <Text style={{ marginLeft: 10, fontSize: 18 }}>16km</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
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
        <Pressable onPress={navigate('ListRoom')}>
          <Ionicons
            name="add-circle"
            color="#18C0C1"
            size={42}
          ></Ionicons>
        </Pressable>
      </View>

      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>SNOW homestay</Text>
        <Text style={{ fontSize: 18 }}>28 Dong thi sach vung tau</Text>
        <TouchableOpacity onPress={handlePress} style={{ marginBottom: 200 }}>
          <Text style={{ color: 'blue', fontSize: 18 }}>Hiển thị trên bản đồ</Text>
        </TouchableOpacity>
        <Swiper
          style={styles.slider}
          autoplay={true}
          autoplayTimeout={3}
        >
          {image.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: image }} style={styles.imageslider} />
            </View>
          ))}
        </Swiper>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Mo ta hotel</Text>
        <Text style={{ fontSize: 18 }}>SNOW homestay là chỗ nghỉ có sân hiên nằm ở Vũng Tàu, cách Bãi Sau 19 phút đi bộ, Bãi Trước 2.2 km và Bãi Dứa 2.5 km. Wi-Fi miễn phí có sẵn ở toàn bộ chỗ nghỉ và chỗ đậu xe riêng có sẵn trong khuôn viên.

          Căn hộ cách Tượng Chúa Ki-tô 1.6...</Text>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Cac tien nghi</Text>
        <View style={{ marginTop: 10 }}>
          {tienichHotel.map((item) => (
            <View style={{ display: "flex", flexDirection: "row", marginBottom: 10, alignItems: "center" }}>
              <FontAwesome5 name={item.icon} size={24} style={{ width: 34, height: 24, textAlign: "center" }} ></FontAwesome5>
              <Text style={{ fontSize: 15, marginLeft: 10 }}>{item.name}</Text>
            </View>
          ))}
        </View>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Xung quanh Hotel</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Button style={[styles.buton, active == "thamquan" && styles.active]} onPress={()=> {setActive('thamquan')}}> <Text style={{ fontSize: 18, color:"black" }}>Tham quan</Text></Button>
          <Button style={[styles.buton, active == "anuong" && styles.active]} onPress={()=> {setActive('anuong')}}> <Text style={{ fontSize: 18 ,color:"black"}}>An uong</Text></Button>
          <Button style={[styles.buton, active == "dichuyen" && styles.active]} onPress={()=> {setActive('dichuyen')}}> <Text style={{ fontSize: 18,color:"black" }}>Di chuyen</Text></Button>
        </View>
        {active == "thamquan" &&  thamquan()}
        {active == "anuong" &&  anuong()}
        {active == "dichuyen" &&  dichuyen()}
      </View>
      <View style={styles.hotelCards}>
        <FlatList
          style={styles.flatList}
          data={room}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.hotelList}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hotelCards: {
    width: '100%',
    height:"100%",
    marginTop:10
  },
  separator: {
    width: 10,
  },
  flatList: {
    width: '100%',
  },
  add: {
    width: 80,
    height: 80,
    backgroundColor: '#18C0C1',
    position: 'absolute',
    bottom: 20,
    left: 20,
    borderRadius: 40,
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
  buton: {
    height: 50,
    textAlign: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderRadius: 0,  
  },
  active:{
    backgroundColor: "#18C0C1"
  }
});

export default ListRoom;
