import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import TextInputComponent from '@src/components/TextInputComponent';
import AgentHeader from '../Header';
import { AnimatedCircularProgress } from 'react-native-circular-progress';



const CreateHotel = () => {
    return (
        <View >
            <AgentHeader ></AgentHeader>
            <Text style={styles.title}>Thêm mới Hotel</Text>
            <View style={styles.container}>
                <TextInputComponent
                    name="name"
                    style={styles.input}
                    placeholder="Tên Hotel"
                />
                <TextInputComponent
                    name="type"
                    style={styles.input}
                    placeholder="Loại Hotel"
                />
                <TextInputComponent
                    name="location"
                    style={styles.input}
                    placeholder="Địa chỉ "
                />
                <TextInputComponent
                    name="price"
                    style={styles.input}
                    placeholder="Giá phòng"
                />
                <TextInputComponent
                    name="detail"
                    style={styles.inputBig}
                    placeholder="Thông tin tiện ích...."
                />
                <TextInputComponent
                    name="policy"
                    style={styles.inputBig}
                    placeholder="Các chính sách liên quan....."
                />
                <Pressable onPress={() => {}}>
                    <AnimatedCircularProgress
                        size={180}
                        width={5}
                        fill={50}
                        tintColor="black"
                        backgroundColor="black">
                        {fill => (
                            <View style={{ alignItems: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: 30,
                                        color: 'black',
                                    }}>
                                    Thêm ảnh
                                </Text>
                            </View>
                        )}
                    </AnimatedCircularProgress>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        marginBottom: 0,
        width: "80%",
        textAlign: "center",
        marginTop: 0,
    },
    inputBig: {
        marginBottom: 0,
        width: "80%",
        marginTop: 0,
        height: 100,
        textAlign: "top",

    }
});

export default CreateHotel;
