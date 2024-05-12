import React from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import AgentHeader from '../components/Header';
import Swiper from 'react-native-swiper';
import TextInputComponent from '@src/components/TextInputComponent';
import { center, rowCenter } from '@src/theme/style';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import { useState, useEffect } from 'react';
import { generalColor } from '@src/theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Dashboard = () => {
    const datas = {
        labels: [""], // optional
        data: [0.67],
    };
    return (
        <View style={styles.container}>
            <AgentHeader active="BookingCare" detail="* Tên người dùng *"></AgentHeader>
            <Text style={{ color: generalColor.primary, fontSize: 35, fontWeight: "bold", marginLeft: 20, marginTop: 20 }}>Welcome, Sia!</Text>
            <Text style={{ color: generalColor.secondary, fontSize: 30, marginLeft: 20 }}>How you doin ?</Text>

            <View style={{ marginTop: 20 }}>
                <Text style={{ color: generalColor.primary, fontSize: 30, marginLeft: 20, fontWeight: "bold" }}>Today</Text>
                <View style={styles.section}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", }}>32</Text>
                        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold", marginBottom: 5 }}>Tổng phòng</Text>
                        <AntDesign name='user' color="white" size={20}></AntDesign>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", }}>18</Text>
                        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold", marginBottom: 5 }}>Phòng đã đặt</Text>
                        <AntDesign name='user' color="white" size={20}></AntDesign>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", }}>14</Text>
                        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold", marginBottom: 5 }}>Phòng trống</Text>
                        <AntDesign name='user' color="white" size={20}></AntDesign>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{display: "flex", flexDirection: "row", width:"96%", justifyContent:"space-between"}}>
                <View style={{ display: "flex", flexDirection: "row", borderColor: generalColor.primary, borderWidth: 1, borderRadius: 20, width: "60%", marginLeft: 20, height: 120, alignItems: "center", padding: 5, marginTop: 20 }}>
                    <ProgressChart
                        data={datas}
                        width={100}
                        height={100}
                        strokeWidth={16}
                        radius={40}
                        chartConfig={{
                            backgroundColor: '#ffffff',
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            color: (opacity = 1) => `rgba(5, 20, 100, ${opacity})`,
                            strokeWidth: 2,
                        }}
                        hideLegend={true}
                    />

                    <View style={{ justifyContent: "center", marginLeft: 20 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Tỷ lệ khách cũ</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: "rgba(5, 20, 100, 0.6)", marginRight: 5 }}></View>
                            <Text>{datas.data * 100}%</Text>
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Tỷ lệ khách mới</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: "rgba(5, 20, 100, 0.25)", marginRight: 5 }}></View>
                            <Text>{100 - datas.data * 100}%</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:120,width:"30%", borderWidth:1, borderColor:generalColor.primary, marginTop:20, borderRadius:20, justifyContent:"center"}}>
                        <Text style={{fontSize:20, fontWeight:"bold", marginLeft:5}}>1.932</Text>
                        <Text style={{fontSize:16, flexWrap:"wrap",marginLeft:5}}>Đơn đặt phòng thành công !</Text>
                </View>
            </View>



            <View style={{ alignItems: "center", marginTop: 10 }}>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    80,
                                    50,
                                    70,
                                    60,
                                    20,
                                    90
                                ]
                            }
                        ]
                    }}
                    width={400} // from react-native
                    height={280}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    fromZero={true}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: generalColor.secondary,
                        backgroundGradientFrom: generalColor.secondary,
                        backgroundGradientTo: generalColor.primary,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "black"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        alignItems: "center"
                    }}
                />
                <Text style={{ color: generalColor.primary, fontSize: 20, fontWeight: "bold", alignItems: "center" }}>Doanh thu 6 thang</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    button: {
        width: 100,
        height: 125,
        backgroundColor: generalColor.primary,
        borderRadius: 15,
        justifyContent: "center",
        padding: 10
    },
    section: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: "20%",
        marginTop: 10
    }
});

export default Dashboard;
