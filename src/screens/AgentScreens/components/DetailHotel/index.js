import { useEffect, useState } from 'react';
import { Avatar, IconButton } from 'react-native-paper';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import AgentHeader from '../Header';
import { generalColor } from '@src/theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonComponent from '@src/components/Button';
import Swiper from 'react-native-swiper';
import { useRoute } from '@react-navigation/native';

const DetailHotel = () => {
    // useEffect(() => {
    //     handleShowMessage();
    // }, []);
    // const handleShowMessage = () => {
    //     showMessage({
    //         message: 'Cập nhật thất bại',
    //         type: 'danger',
    //     });
    // };
    const route = useRoute();
    const { hoteldata } = route.params;
    return (
        <View >
            
            <View style={styles.slider}>
                <Swiper
                    autoplay={true}
                    autoplayTimeout={3}
                    style={styles.wrapper}
                >
                    {hoteldata.images.map((image, index) => (
                        <View key={index} style={styles.slide}>
                            <Image
                                source={{uri: image}}
                                style={styles.imageslider}
                            />
                        </View>
                    ))}
                </Swiper>
            </View>
            <View style={styles.title}><Text style={styles.text}>Thông tin chung</Text></View>
            
            <View style={styles.main}>
                <AntDesign name='right' size={20}></AntDesign>
                <Text style={styles.textmain}>{hoteldata.name}</Text>
            </View>
            <View style={styles.main}>
                <AntDesign name='right' size={20}></AntDesign>
                <Text style={styles.textmain}>{hoteldata.location}</Text>
            </View>
            <View style={styles.main}>
                <AntDesign name='right' size={20}></AntDesign>
                <Text style={styles.textmain}>{hoteldata.price}</Text>
            </View>
            
            <View style={styles.title}><Text style={styles.text}>Chi tiết tiện tích</Text></View>
            <View style={styles.main}>
                <AntDesign name='right' size={20}></AntDesign>
                <Text style={styles.textmain}>{hoteldata.detail}</Text>
            </View>
            <View style={styles.main}>
                <AntDesign name='right' size={20}></AntDesign>
                <Text style={styles.textmain}>{hoteldata.sales}</Text>
            </View>
           
           <View style={styles.title}><Text style={styles.text}>Chính sách</Text></View>
            <View style={styles.main}>
                <AntDesign name='right' size={20}></AntDesign>
                <Text style={styles.textmain}>{hoteldata.policy}</Text>
            </View>
            <ButtonComponent style={styles.delete} text="XOÁ"></ButtonComponent>       
        </View>
    );
};

export default DetailHotel;

const styles = StyleSheet.create({
    title: {
        display: "flex",
        justifyContent: "center",
        height: 30,
        backgroundColor: generalColor.black[10],
        marginTop: 2.5,
        marginBottom: 2.5,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
    },
    textmain: {
        fontSize: 18,
        marginLeft: 5,
        flexWrap: "wrap"
    },
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2.5,
        marginBottom: 2.5,
        height: "auto",
        marginLeft: 20,
        marginRight: 20,
    },
    slider: {
    
        height:"30%"
      },
      imageslider: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      delete: {
        width:"80%",
        marginLeft: "10%",
        marginTop: "50%",
      }
});
