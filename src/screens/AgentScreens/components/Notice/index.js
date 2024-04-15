import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
let notice = [
    {
        title: "Title 1",
        detail: "Detail 1"
    },
    {
        title: "Title 2",
        detail: "Detail 2"
    },
    {
        title: "Title 3",
        detail: "Detail 3"
    },
    {
        title: "Title 4",
        detail: "Detail 4"
    },
    {
        title: "Title 5",
        detail: "Detail 5"
    },
]


const Notice = () => {
    const Delete = (itemToDelete) => {
        console.log("ahia")
    }
    return (
        <View style={styles.container}>
            {notice.map((item)=>{
                return (
                    <View style={styles.main}>
                        <AntDesign name='warning' size={40} color="#F0E601"></AntDesign>
                        <View style={{width:"63%",marginLeft:20}}>
                            <Text style={{fontSize:18,fontWeight:"bold"}}>{item.title}</Text>
                            <Text>{item.detail}</Text>
                        </View>
                        <AntDesign name='delete' size={30} color="tomato" onPress={Delete(item)}></AntDesign>
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
        backgroundColor: "#F2F5FA"
    },
    main: {
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
        textAlign: "center",
        justifyContent:"center",
        backgroundColor: "white",
        marginTop:20,
        height:70,
        width:"90%",
        marginLeft:"5%",
        borderRadius:20,
        borderColor: "#18C0C1",
        borderWidth:1,
    }
});
export default Notice;