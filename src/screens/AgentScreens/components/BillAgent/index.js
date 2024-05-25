import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image, Modal } from 'react-native';
import { goBack } from '@src/navigation/NavigationController';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { billAgent } from '@src/mock/mock';
const BillAgent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [bill, setBill] = useState()

    const handlePay = (item) => {
        setModalVisible(true)
        setBill(item)
    }
    const calculateDaysDifference = (startDate, endDate) => {
        const oneDay = 24 * 60 * 60 * 1000; 
        const start = new Date(startDate);
        const end = new Date(endDate);
        return Math.round(Math.abs((end - start) / oneDay));
      };
    const [selectedDate] = useState(billAgent.dayPay); 
    const currentDate = new Date();

    const daysDifference = calculateDaysDifference(selectedDate, currentDate);
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
            {billAgent.map((item, index) => {
                return (
                    <View style={styles.main}>
                        <AntDesign name='warning' size={40} color="#F0E601"></AntDesign>
                        <View style={{ width: "63%", marginLeft: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                            <Text>{item.countRoom}</Text>
                            <Text>{item.countBooking}</Text>
                            <Text>{item.revenue}</Text>
                            <Text>{item.dayPay}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tổng chi phí</Text>
                            <Text style={{ fontSize: 18 }}>{item.price}</Text>
                            {!item.status ? <Text style={{ color: 'green' }}>Đã thanh toán</Text> : <Text style={{ color: 'red' }} onPress={handlePay(item)}>Chưa thanh toán</Text>}
                        </View>
                    </View>
                )
            })}
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
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                            <Text>{item.countRoom}</Text>
                            <Text>{item.countBooking}</Text>
                            <Text>{item.revenue}</Text>
                            <Text>{item.dayPay}</Text>
                            <Text>Đã quá hạn {daysDifference}</Text>
                            <Text style={{color:'red', flexWrap:'wrap'}}>( Quá hạn 15 ngày sẽ bị khoá tài khoản )</Text>
                        </View>
                        
                    </View>
                </View>
            </Modal>
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
        backgroundColor: "white"
    },
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#F2F5FA",
        marginTop: 20,
        height: 70,
        width: "90%",
        marginLeft: "5%",
        borderRadius: 20,
        borderColor: generalColor.primary,
        borderWidth: 1,
    }
});
export default BillAgent;