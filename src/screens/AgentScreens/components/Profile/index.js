import { useEffect, useState } from 'react';
import { Avatar, IconButton } from 'react-native-paper';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import AgentHeader from '../Header';
import { generalColor } from '@src/theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonComponent from '@src/components/Button';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    // useEffect(() => {
    //     handleShowMessage();
    // }, []);
    // const handleShowMessage = () => {
    //     showMessage({
    //         message: 'Cập nhật thất bại',
    //         type: 'danger',
    //     });
    // };
    const navigation = useNavigation();
    const navigateToProfile = () => {
        navigation.navigate("EditProfile")
    }
    return (
        <View >
            <AgentHeader active="TÀI KHOẢN"></AgentHeader>
            <View style={{width: "100%", alignItems:"center"}}>
                <View style={{ backgroundColor: "white", width: 140, height: 140, borderRadius: 75, justifyContent: "center", alignItems: "center", marginTop: -40 }}>
                    <Avatar.Image size={130} source={{ uri: 'https://picsum.photos/200' }} />
                </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 10 }}>Tên Người Dùng</Text>
            <Text style={{ fontSize: 15, textAlign: "center", marginBottom: 20  }}>20520383@gm.uit.edu.vn</Text>
            <View style={styles.title}><Text style={styles.text}>Thông tin cá nhân</Text></View>
            <View style={styles.main}>
                <AntDesign name='user' size={20}></AntDesign>
                <Text style={styles.textmain}>Tên người dùng</Text>
            </View>
            <View style={styles.main}>
                <AntDesign name='mail' size={20}></AntDesign>
                <Text style={styles.textmain}>Gmail người dùng</Text>
            </View>
            <View style={styles.main}>
                <AntDesign name='phone' size={20}></AntDesign>
                <Text style={styles.textmain}>Số điện thoại người dùng</Text>
            </View>
            <View style={styles.title}><Text style={styles.text}>Thông tin khách sạn</Text></View>
            <View style={styles.main}>
                <AntDesign name='phone' size={20}></AntDesign>
                <Text style={styles.textmain}>Số lượt thích</Text>
            </View>
            <View style={styles.main}>
                <AntDesign name='phone' size={20}></AntDesign>
                <Text style={styles.textmain}>Đánh giá của khách hàng</Text>
            </View>
            <View style={styles.title}><Text style={styles.text}>Giao diện</Text></View>
            <View style={styles.main}>
                <AntDesign name='phone' size={20}></AntDesign>
                <Text style={styles.textmain}>Darkmode</Text>
            </View>
            <ButtonComponent onPress={navigateToProfile} style={{width:"70%", marginLeft: "15%", marginTop: "40%"}} text="Sửa Thông Tin Cá Nhân" />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    title: {
        display: "flex",
        justifyContent: "center",
        height:30,
        backgroundColor: generalColor.black[10],
        marginTop: 2.5, 
        marginBottom:2.5,
    },
    text: {
        fontSize: 18,
        fontWeight:"bold", 
        marginLeft: 20,
    },
    textmain: {
        fontSize:16,
        marginLeft:5,
      
    },
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2.5, 
        marginBottom:2.5,
        height:30,
        marginLeft: 20,
        marginRight:20,
    }
});
