import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image, Modal, TouchableOpacity } from 'react-native';
import { goBack } from '@src/navigation/NavigationController';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { billAgent } from '@src/mock/mock';
import ButtonComponent from '@src/components/Button';



const Bill = ({ bill, days }) => {
    const dateObject = new Date(bill);
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const day = dateObject.getDate()
    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", paddingBottom: 10 }}>Tháng {month} năm {year}</Text>
            <View style={{ height: 1, backgroundColor: 'black', width: '100%', marginBottom: 20 }}></View>
            <Text style={{ fontSize: 18, paddingBottom: 5 }}>Số phòng: {bill.countRoom}</Text>
            <Text style={{ fontSize: 18, paddingBottom: 5 }}>Số lượt thuê: {bill.countBooking}</Text>
            <Text style={{ fontSize: 18, paddingBottom: 5 }}>Doanh thu: {bill.revenue}</Text>
            <Text style={{ fontSize: 18, paddingBottom: 5 }}>Ngày thanh toán: {day}-{month}-{year}</Text>
            <Text style={{ flexWrap: 'wrap', fontWeight: 'bold', color: 'tomato', fontSize: 18, paddingBottom: 5 }}>Đã quá hạn: {days} ngày</Text>
            <Text style={{ color: 'red', flexWrap: 'wrap', fontSize: 17, paddingBottom: 5 }}>( Quá hạn 15 ngày sẽ bị khoá tài khoản )</Text>
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
        backgroundColor: "white",
        textAlign: 'center'
    },
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#F2F5FA",
        marginTop: 20,
        height: 'auto',
        width: "90%",
        marginLeft: "5%",
        borderRadius: 20,
        borderColor: generalColor.primary,
        borderWidth: 1,
        padding: 5,
        paddingTop: 20,
        paddingBottom: 20
    },
    modalContainer: {
        flex: 1,
        position: "relative",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 99
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        elevation: 5,
        paddingTop: 40
    },
    closebutton: {
        position: 'absolute',
        top: 10,
        right: 10
    },
});
export default Bill;