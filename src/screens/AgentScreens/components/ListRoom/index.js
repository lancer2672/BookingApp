import React from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Image } from 'react-native';
import AgentHeader from '../Header';
import RoomCard from './RoomCard';
import ButtonComponent from '@src/components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ListRoom = () => {
    const room = [
        {
            type: "Phòng đơn",
            tienich: "Dieu hoa, ghe sofa, tu quan ao",
            price: "$300",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s",
                "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            ],
            detail: "2 người lớn",
            policy: "Cam hut thuoc duoi moi hinh thuc",
            sales: "Mien phi bua an sang di kem"
        },
        {
            type: "Phòng đôi",
            tienich: "Dieu hoa, ghe sofa, tu quan ao",
            price: "$300",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s",
                "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            ],
            detail: "4 người lớn + 2 trẻ em",
            policy: "Cam hut thuoc duoi moi hinh thuc",
            sales: "Mien phi bua an sang di kem"
        },
        {
            type: "Phòng King",
            tienich: "Dieu hoa, ghe sofa, tu quan ao, guong King 2m, kinh 360 do",
            price: "$300",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s",
                "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            ],
            detail: "2 người lớn + 1 trẻ em",
            policy: "Cam hut thuoc duoi moi hinh thuc",
            sales: "Mien phi bua an sang di kem"
        },

    ];
    const navigation = useNavigation()
    const renderItem = ({ item }) => (
        <RoomCard images={item.images} type={item.type} tienich={item.tienich} price={item.price} sales={item.sales} policy={item.policy} detail={item.detail} />
    );

    return (
        <View style={styles.container}>
            <Text></Text>
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
            <View style={styles.icon} >
                <Ionicons name='add-circle' color="#18C0C1" size={70} onPress={navigation.navigate("DetailHotel")}></Ionicons>
            </View>
               
       
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F5FA"
    },
    hotelCards: {
        width: "100%",
    },
    separator: {
        width: 10,
    },
    flatList: {
        width: "100%",
        
    },
    add: {
        width:80,
        height:80,
        backgroundColor: "#18C0C1",
        position:"absolute",
        bottom:20,
        left:20,
        borderRadius:40
    },
    icon: {
        zIndex:99,
        position:"absolute",
        bottom:20,
        left:20,
        backgroundColor:"white",
        borderRadius:40,
    }
});

export default ListRoom;
