import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { goBack } from '@src/navigation/NavigationController';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';

const Notice = () => {
    const [notice, setNotice] = useState([
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
    ])
    const handleDelete = (index) => {
        setNotice((prevItems) => {
            const updatedItems = [...prevItems]; // Create a copy
            updatedItems.splice(index, 1); // Remove the item
            return updatedItems;
        });
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
                    Thông báo
                </Text>
            </View>
            {notice.map((item, index) => {
                return (
                    <View style={styles.main}>
                        <AntDesign name='warning' size={40} color="#F0E601"></AntDesign>
                        <View style={{ width: "63%", marginLeft: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                            <Text>{item.detail}</Text>
                        </View>
                        <AntDesign name='delete' size={30} color="tomato" onPress={()=>handleDelete(index)}></AntDesign>
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
export default Notice;