import React from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Image ,ScrollView} from 'react-native';
import AgentHeader from '../Header';
import HotelCard from './HotelCard';
import { hotelsMock } from '@src/mock/mock';


const ListHotel = () => {
  const renderItem = ({ item }) => (
    <HotelCard hotels={item} />
  );

  return (
    <View style={styles.container}>
      <AgentHeader active="Danh sách Hotel" detail="* Tên người dùng *"></AgentHeader>
      <Text></Text>
      <View style={styles.hotelCards}>
        <FlatList
          style={styles.flatList}
          data={hotelsMock}
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
