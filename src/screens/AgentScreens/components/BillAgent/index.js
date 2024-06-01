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
const BillAgent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [daysDiff, setDaysDiff] = useState()
    const [bill, setBill] = useState()
    const handlePay = (item) => {
        const startDateTimestamp = Date.parse(item.dayPay);
        const currentDateTimestamp = Date.now();
        const timeDiff = currentDateTimestamp - startDateTimestamp;
        const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
        setDaysDiff(daysDiff.toFixed(0))
        setBill(item)
        setModalVisible(true)
    }

    return (
        <View style={styles.container}>
            <View style={{ padding: 12, marginTop: 12, ...rowCenter }}>
                <Pressable onPress={goBack}>
                    <AntDesign
                        name="left"
                        size={24}
                        color={generalColor.other.gray}></AntDesign>
                </Pressable>
                <Text
                    style={{
                        textTransform: 'uppercase',
                        color: generalColor.primary,
                        ...textStyle.h[2],
                        flex: 1,
                        textAlign: 'center',
                        marginRight: 24,
                        fontFamily: 'serif',
                    }}>
                    Hoá đơn
                </Text>
            </View>
            {billAgent.map((item) => {
                const dateObject = new Date(item.dayPay);
                const month = dateObject.getMonth() + 1;
                const year = dateObject.getFullYear();
                const day = dateObject.getDate()
                const hours = dateObject.getHours();
                const minutes = dateObject.getMinutes();
                return (
                    <View style={styles.main}>
                        {/* <AntDesign name='warning' size={40} color="#F0E601"></AntDesign> */}
                        <View style={{ width: "63%", marginLeft: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom:10 }}>Tháng {month} năm {year}</Text>
                            <View style={{height:1, backgroundColor:'black', width:'80%', marginBottom:20}}></View>
                            <Text>Số phòng: {item.countRoom}</Text>
                            <Text>Số lượt thuê: {item.countBooking}</Text>
                            <Text>Doanh thu: {item.revenue}</Text>
                            <Text>Ngày thanh toán: </Text>
                            <Text>{hours}h : {minutes}p || {day}-{month}-{year}</Text>
                        </View>
                        <View style={{width:1, backgroundColor:'black', height:'90%', marginRight:10, marginLeft:-10}}></View>
                        <View style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", paddingBottom:5 }}>Tổng chi phí</Text>
                            <Text style={{ fontSize: 18 , paddingBottom:5}}>{item.price}</Text>
                            {!item.status ? <Text style={{ color: 'red' }} onPress={() => handlePay(item)}>Chưa thanh toán</Text> : <Text style={{ color: 'green' }}>Đã thanh toán</Text>}
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <TouchableOpacity
                                        style={styles.closebutton}
                                        onPress={() => setModalVisible(false)}
                                    >
                                        <AntDesign name='close' size={20}></AntDesign>
                                    </TouchableOpacity>
                                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Text style={{ fontSize: 22, fontWeight: "bold", paddingBottom:10 }}>Tháng {month} năm {year}</Text>
                                        <View style={{height:1, backgroundColor:'black', width:'100%', marginBottom:20}}></View>
                                        <Text  style={{ fontSize: 18,paddingBottom:5 }}>Số phòng: {bill.countRoom}</Text>
                                        <Text  style={{ fontSize: 18, paddingBottom:5}}>Số lượt thuê: {bill.countBooking}</Text>
                                        <Text  style={{ fontSize: 18, paddingBottom:5}}>Doanh thu: {bill.revenue}</Text>
                                        <Text style={{ fontSize: 18,paddingBottom:5 }}>Ngày thanh toán: </Text>
                                        <Text style={{ fontSize: 18, paddingBottom:5}}>{hours}h : {minutes}p || {day}-{month}-{year}</Text>
                                        <Text style={{ flexWrap: 'wrap',  fontWeight:'bold', color:'tomato', fontSize:18,paddingBottom:5 }}>Đã quá hạn: {daysDiff} ngày</Text>
                                        <Text style={{ color: 'red', flexWrap: 'wrap', fontSize:17,paddingBottom:5 }}>( Quá hạn 15 ngày sẽ bị khoá tài khoản )</Text>
                                    </View>
                                    <ButtonComponent text='Thanh toán ngay' style={{ marginTop: 20 }}></ButtonComponent>
                                </View>
                            </View>
                        </Modal>
                    </View>
                )
            })}

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
        paddingTop:20,
        paddingBottom:20
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
export default BillAgent;