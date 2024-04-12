import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import ButtonComponent from '@src/components/Button';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
const HotelCard = ({ name, location, price, sales, images, policy, detail }) => {
    const navigation = useNavigation()
    const hotel = {
        name: name,
        location: location,
        price:price,
        sales:sales,
        images:images,
        policy:policy,
        detail:detail,
    }
    const navigateToDetail = () => {
        navigation.navigate("DetailHotel", {hoteldata: hotel })
    } 
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <Swiper
                    style={styles.wrapper}
                >
                    {images.map((image, index) => (
                        <View key={index} style={styles.slide}>
                            <Image
                                source={{ uri: image }}
                                style={styles.imageslider}
                            />
                        </View>
                    ))}
                </Swiper>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20, marginTop: 20 }}>{name}</Text>
            <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 10 }}>{location}</Text>
            <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: "bold", marginTop: 10 }}>{price}</Text>
            <Text style={{ fontSize: 12, marginLeft: 20, marginTop: 5, width: "30%" }}>{sales}</Text>
            <ButtonComponent style={styles.delete} text="Chi tiết" onPress={navigateToDetail}></ButtonComponent>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        position: "relative",
        paddingBottom: 40,
    },
    delete: {
        width: "20%",
        position: "absolute",
        bottom: 5,
        right: 20
    },
    slider: {
        width: "100%",
        height: 200,
        resizeMode: 'cover',
    },
    imageslider: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default HotelCard;