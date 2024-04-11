import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import ButtonComponent from '@src/components/Button';

const HotelCard = ({ name, location, price, sales, image }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image}></Image>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20, marginTop: 20 }}>{name}</Text>
            <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 10 }}>{location}</Text>
            <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: "bold", marginTop: 10 }}>{price}</Text>
            <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 5, width:"30%" }}>{sales}</Text>
            <ButtonComponent style={styles.delete} text="XOÁ"></ButtonComponent>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        position: "relative",
        paddingBottom:40
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: 'cover',
    },
    delete: {
        width: "20%",
        position: "absolute",
        bottom: 5,
        right:20
    },
});
export default HotelCard;