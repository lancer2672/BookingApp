import React from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Image ,ScrollView} from 'react-native';
import AgentHeader from '../Header';
import HotelCard from './HotelCard';
import { hotelsMock } from '@src/mock/mock';
import useHotelStore from '@src/store/hotel';
import LoadingModal from '@src/components/LoadingModal/LoadingModal';
import hotelApi from '@src/api/hotel';
import { useState, useEffect } from 'react';
import useUserStore from '@src/store/user';
const ListHotel = () => {
  const [isLoading, setIsloading] = useState(false);
  const hotels = useHotelStore(state => state.hotels);
  const setHotels = useHotelStore(state => state.setHotels);
  const agentid = useUserStore(state => state.user)
  useEffect(()=>{
    hotelApi.getList(agentid.id).then(data=>{
      setHotels(data.hotels)
      console.log("respose",data.hotels);
    }).catch(er=>{
      console.log('err',er.response);
    })
  },[])
  if (isLoading) {
    return (
      <LoadingModal
        onClose={() => {
          setIsloading(false);
        }}
        visible={isLoading}></LoadingModal>
    );
  }
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
