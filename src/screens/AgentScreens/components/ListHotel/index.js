import React from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Image ,ScrollView} from 'react-native';
import AgentHeader from '../Header';
import HotelCard from './HotelCard';
import Swiper from 'react-native-swiper';
import TextInputComponent from '@src/components/TextInputComponent';
import { rowCenter } from '@src/theme/style';



const ListHotel = () => {
  const hotels = [
    {
      name: "Hotel 1",
      location: "binh thach, ho chi minh",
      price: "$300-$500",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      ],
      detail: "Khach san bao phong 1 phong ngu co giuong king , view thang ra bien, day du tien nghi ",
      policy: "Duoc hoan tra coc khi huy dat phong",
      sales: "gan cong vien giai tri"
    },
    { name: "Hotel 2",
    location: "binh thach, ho chi minh",
    price: "$300-$450",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    ],
    detail: "Khach san bao phong 1 phong ngu co giuong king , view thang ra bien, day du tien nghi ",
    policy: "Duoc hoan tra coc khi huy dat phong",
    sales: "Co cho dau oto" },
    { name: "Hotel 3",
    location: "binh thach, ho chi minh",
    price: "$300-$650",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    ],
    detail: "Khach san bao phong 1 phong ngu co giuong king , view thang ra bien, day du tien nghi ",
    policy: "Duoc hoan tra coc khi huy dat phong",
    sales: "duoc phep mang thu cung" },
    
  ];
  const renderItem = ({ item }) => (
    <HotelCard images={item.images} name={item.name} location={item.location} price={item.price} sales={item.sales} policy={item.policy} detail={item.detail} />
  );

  return (
    <View style={styles.container}>
      <AgentHeader active="Danh sách Hotel" detail="* Tên người dùng *"></AgentHeader>


      <Text></Text>
      <View style={styles.hotelCards}>
        <FlatList
          style={styles.flatList}
          data={hotels}
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
    backgroundColor: "white"
  },
  hotelCards: {
    width: "100%",
  },
  separator: {
    width: 10,
  },
  flatList: {
    width: "100%",
    marginBottom: 100,
  },
});

export default ListHotel;
