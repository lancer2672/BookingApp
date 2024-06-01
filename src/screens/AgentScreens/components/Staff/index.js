import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import AgentHeader from '../Header';
import StaffCard from './staffCard';
import { staffMockData } from '@src/mock/mock';
import { Pressable } from 'react-native';
import { rowCenter } from '@src/theme/style';
import { generalColor } from '@src/theme/color';
import textStyle from '@src/theme/text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { goBack, navigate } from '@src/navigation/NavigationController';
import { useRoute } from '@react-navigation/native';
const Staff = () => {
    const renderItem = ({ item }) => (
        <StaffCard staff={item} />
    );
    const route = useRoute();
    const hotel = route.params;
    const staff = staffMockData.filter(item => item.hotelId == hotel.id)
    return (
        <View style={styles.container}>
            <View
                style={{ padding: 12, marginTop: 12, ...rowCenter, marginBottom: 12 }}>
                <Pressable onPress={goBack}>
                    <AntDesign
                        name="left"
                        size={24}
                        color={generalColor.primary}></AntDesign>
                </Pressable>
                <Text
                    style={{
                        textTransform: 'uppercase',
                        color: 'black',
                        ...textStyle.h[2],
                        flex: 1,
                        textAlign: 'center',
                        marginRight: -12,
                        fontFamily: 'serif',
                    }}>
                    Quản lý nhân viên
                </Text>
                <Pressable
                    onPress={() => {
                       navigate('CreateStaff', hotel);
                    }}>
                    <AntDesign
                        name="pluscircleo"
                        color={generalColor.primary}
                        size={35}></AntDesign>
                </Pressable>
            </View>
            <View style={styles.hotelCards}>
                <FlatList
                    style={styles.flatList}
                    data={staff}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.hotelList}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    hotelCards: {
        width: "100%",
    },
    separator: {
        width: 10,
    },
    flatList: {
        width: "100%",
        marginBottom: 100,
    },
});

export default Staff;
