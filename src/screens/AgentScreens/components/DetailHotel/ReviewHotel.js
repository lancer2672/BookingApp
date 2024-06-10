import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { goBack } from '@src/navigation/NavigationController';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';

const ReviewHotel = ({ review }) => {
    const [isVisible,setIsVisible] = useState(true)
    const handlePress = () => {
        if(isVisible == false)
            setIsVisible(true)  
        else
            setIsVisible(false)
    }
    return (
        <View style={styles.container}>
            {review.map((item) => {
                return (
                    <>
                        <View style={styles.main}>
                            <Image source={{ uri: 'https://picsum.photos/200' }} style={{ height: 50, width: 50, borderRadius: 25 }}></Image>
                            <View style={{ marginLeft: 20, width: '80%' }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.user.firstName} {item.user.lastName}</Text>
                                <Text>{item.createdDate}</Text>
                                <Text style={{ fontSize: 18 }}>{item.comment}</Text>
                                {/* <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, flexWrap: 'wrap' }}>
                                    {item.images.map(item => (
                                        <Image source={{ uri: item }} style={{ height: 100, width: 100, marginRight: 5, marginBottom: 5 }}></Image>
                                    ))}
                                </View> */}
                                {/* <TouchableOpacity onPress={handlePress}>
                                    <Text style={{ color: 'black', fontSize: 15  , marginTop:10, marginBottom:-5}}>
                                        Hiển thị thêm 
                                    </Text>
                                </TouchableOpacity> */}
                            </View>

                        </View>
                        {/* {!isVisible && item.children.map((item) => {
                            return (
                               <View style={styles.children}>
                                   <Image source={{ uri: 'https://picsum.photos/200' }} style={{ height: 50, width: 50, borderRadius: 25 }}></Image>
                                   <View style={{ marginLeft: 20, width: '80%' }}>
                                       <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.userId} - Phòng {item.roomId}</Text>
                                       <Text>{item.createdAt}</Text>
                                       <Text style={{ fontSize: 18 }}>{item.description}</Text>
                                       <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, flexWrap: 'wrap' }}>
                                           {item.images.map(item => (
                                               <Image source={{ uri: item }} style={{ height: 100, width: 100, marginRight: 5, marginBottom: 5 }}></Image>
                                           ))}
                                       </View>
                                   </View>

                               </View>

                           )
                       })} */}
                    </>

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
        backgroundColor: "#F2F5FA",
        marginTop: 20,
        height: 'auto',
        width: "100%",
        borderRadius: 12,
        borderColor: generalColor.primary,
        borderWidth: 1,
        padding: 20
    },
    children: {
        display: "flex",
        flexDirection: "row",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 10,
        height: 'auto',
        width: "90%",
        marginLeft: "10%",
        padding: 20,
    }
});
export default ReviewHotel;