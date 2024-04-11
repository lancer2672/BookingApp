import React from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Image } from 'react-native';
import AgentHeader from '../Header';
import HotelCard from './HotelCard';
import Swiper from 'react-native-swiper';
import TextInputComponent from '@src/components/TextInputComponent';
import { rowCenter } from '@src/theme/style';


const ListHotel = () => {
  const hotels = [
    { name: 'Hotel A', location: 'City A, Country A', price: '$100' , sales: "Miễn phí bữa sáng và đồ uống", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"},
    { name: 'Hotel A', location: 'City A, Country A', price: '$100' , sales: "Miễn phí bữa sáng và đồ uống", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"},
    { name: 'Hotel A', location: 'City A, Country A', price: '$100' , sales: "Miễn phí bữa sáng và đồ uống", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"},
    { name: 'Hotel A', location: 'City A, Country A', price: '$100' , sales: "Miễn phí bữa sáng và đồ uống", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"},
    { name: 'Hotel A', location: 'City A, Country A', price: '$100' , sales: "Miễn phí bữa sáng và đồ uống", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"},
  ];
  const renderItem = ({ item }) => (
    <HotelCard image={item.image} name={item.name} location={item.location} price={item.price} sales={item.sales}/>
  );

  return (
    <View style={styles.container}>
      <AgentHeader active="Danh sách" detail="* Danh sách khách sạn của bạn *"></AgentHeader>


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
  },
  hotelCards: {
    width:"100%",
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
