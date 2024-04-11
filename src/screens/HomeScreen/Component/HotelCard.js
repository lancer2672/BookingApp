import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonComponent from '@src/components/Button';
const HotelCard = ({ hotelName, location, price }) => {
  return (
    <View style={styles.hotelCard}>
      <Text style={styles.hotelName}>{hotelName}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.price}>Price: {price}/night</Text>
      <ButtonComponent style={styles.button}>
        <Text style={styles.buttonText}>Xem Ngay</Text>
      </ButtonComponent>
      
    </View>
  );
};
const styles = StyleSheet.create({
  hotelCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    width: 200,
    marginBottom: 20,
  },
  hotelName: {
    fontSize: 20,
    color: '#333',
    marginBottom: 5,
  },
  location: {
    color: '#666',
    marginBottom: 5,
  },
  price: {
    color: '#666',
  },
  button: {
    display: "flex",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    padding: 5,
    marginTop: 20,
    width:100,
    textAlign:"center",
    justifyContent:"center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: 'black',
  },
});

export default HotelCard;
