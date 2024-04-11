import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Image } from 'react-native';
import AgentHeader from '../Header';
import HotelCard from '@src/screens/HomeScreen/Component/HotelCard';
import Swiper from 'react-native-swiper';
import TextInputComponent from '@src/components/TextInputComponent';
import { rowCenter } from '@src/theme/style';

const ListHotel = () => {
  const hotels = [
    { name: 'Hotel A', location: 'City A, Country A', price: '$100' },
    { name: 'Hotel B', location: 'City B, Country B', price: '$150' },
    { name: 'Hotel C', location: 'City C, Country C', price: '$200' }
  ];
  const images = [
    require('@src/assets/imgs/DefaultAvatar.png') ,
    require('@src/assets/imgs/DefaultAvatar.png') ,
    require('@src/assets/imgs/DefaultAvatar.png') ,
  ];
  const renderItem = ({ item }) => (
    <HotelCard hotelName={item.name} location={item.location} price={item.price} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../../assets/imgs/Group.png')} style={styles.image}></Image>
      </View>
      <View style={styles.search}>
          <TextInputComponent
            style={styles.input}
            placeholder="Tìm kiếm..."
            placeholderTextColor="#999"
          />
      </View>
      <View style={styles.slider}>
        <Swiper
          autoplay={true}
          autoplayTimeout={3}
          style={styles.wrapper}
        >
        {images.map((image,index) => (
           <View key={index} style={styles.slide}>
           <Image
             source={image}
             style={styles.imageslider}
           />
         </View>
        ))}
        </Swiper>
      </View>
      <View style={styles.hotelCards}>
      <View style={styles.intro}> 
        <Text style={styles.textIntro}>Discover a global collection of one-of-a-kind luxury hotels, resorts and residences, each inspired by our A Sense of Place® philosophy to reflect the local culture and spirit of a destination. </Text>
      </View>
      <Text style={{fontWeight: "bold", fontSize: 20, paddingBottom:20}}>Ho Chi Minh City</Text>
        <FlatList
          style={styles.flatList}
          data={hotels}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.hotelList}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      <HomeHeader style={styles.header} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
  },
  hotelCards: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingLeft:10,
  },
  header: {
    flex:1,
    display: "flex",
    justifyContent: "space-between",
    width: '90%',
    position: "absolute",
    bottom: 0,
    backgroundColor:"red",
  },
  separator: {
    width: 10,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: -50,
    marginTop: -50,
    zIndex: 1,
  },
  input: {
    height:60,
    width: 150,
  },
  background: {
    backgroundColor: "#091E3D",
    height: "25%",
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageslider: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slider: {
    
    height:"25%"
  },
  flatList: {
    width: "100%",
  },
  intro: {
    fontSize:16,
    width:"80%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
    marginBottom:10,
  }, 
  textIntro: {
    textAlign: "center",
  }
});

export default ListHotel;
