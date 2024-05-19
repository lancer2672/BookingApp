import { useRoute } from '@react-navigation/native';
import ButtonComponent from '@src/components/Button';
import { Image, StyleSheet, Text, View, Pressable, Modal, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { generalColor } from '@src/theme/color';
import { goBack } from '@src/navigation/NavigationController';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { useState } from 'react';
import { bookingHistoryMock } from '@src/mock/mock';
const DetailRoom = () => {
    const route = useRoute();
    const room = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ padding: 12, marginTop: 12, ...rowCenter, marginBottom: 12 }}>
                <Pressable onPress={goBack}>
                    <AntDesign
                        name="left"
                        size={24}
                        color={generalColor.other.gray}></AntDesign>
                </Pressable>
                <Text
                    style={{
                        textTransform: 'uppercase',
                        color: "black",
                        ...textStyle.h[2],
                        flex: 1,
                        textAlign: 'center',
                        marginRight: 24,
                        fontFamily: 'serif',
                    }}>
                    Chi tiết phòng
                </Text>
            </View>
            <View style={styles.slider}>
                <Swiper
                    autoplay={true}
                    autoplayTimeout={3}
                    style={styles.wrapper}
                >
                    {room.images.map((image, index) => (
                        <View key={index} style={styles.slide}>
                            <Image
                                source={{ uri: image }}
                                style={styles.imageslider}
                            />
                        </View>
                    ))}
                </Swiper>
            </View>
            <View style={styles.title}><Text style={styles.text}>Thông tin chung</Text></View>

            <View style={styles.main}>
                <FontAwesome5 name='hotel' size={20}></FontAwesome5>
                <Text style={styles.textmain}>{room.name}</Text>
            </View>
            <View style={styles.main}>
                <Entypo name='user' size={20}></Entypo>
                <Text style={styles.textmain}>{room.numOfPeople} người lớn và {room.numOfChildren} trẻ em</Text>
            </View>
            <View style={styles.main}>
                <FontAwesome name='money' size={20}></FontAwesome>
                <Text style={styles.textmain}>{room.pricePerNight} $</Text>
            </View>
            <View style={styles.main}>
                <Ionicons name='bed' size={20}></Ionicons>
                <Text style={styles.textmain}>{room.bed} giường</Text>
            </View>

            <View style={styles.title}><Text style={styles.text}>Chi tiết tiện tích</Text></View>
            {room.amenities.map(item => (
                <View style={styles.main}>
                    <AntDesign name='right' size={20}></AntDesign>
                    <Text style={styles.textmain}>{item}</Text>
                </View>
            ))}
            <View style={styles.title}><Text style={styles.text}>Quy định</Text></View>
            <View style={styles.main}>
                <AntDesign name='exclamationcircleo' size={20}></AntDesign>
                <Text style={styles.textmain}>{room.policy}</Text>
            </View>
            <View style={styles.title}><Text style={styles.text}>Trạng thái</Text></View>
            <View style={styles.main}>
                <AntDesign name='infocirlceo' size={20}></AntDesign>
                <Text style={styles.textmain}>{room.status}</Text>
                {room.status == 'Đã đặt' &&
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{}}>
                        <Text style={{ color: 'blue', fontSize: 18, marginLeft: 10 }}>Bill</Text>
                    </TouchableOpacity>
                }
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
                        <View style={[styles.title, { borderRadius: 5, alignItems: 'center' }]}><Text style={styles.text}>Thông tin khách hàng</Text></View>
                        <View style={styles.main}>
                            <AntDesign name='user' size={20}></AntDesign>
                            <Text style={styles.textmain}>{room.bill.inforCustomer.firstName} {room.bill.inforCustomer.lastName}</Text>
                        </View>
                        <View style={styles.main}>
                            <Fontisto name='email' size={20}></Fontisto>
                            <Text style={styles.textmain}>{room.bill.inforCustomer.email}</Text>
                        </View>
                        <View style={styles.main}>
                            <AntDesign name='phone' size={20}></AntDesign>
                            <Text style={styles.textmain}>{room.bill.inforCustomer.phoneNumber}</Text>
                        </View>
                        <View style={[styles.title, { borderRadius: 5, alignItems: 'center' }]}><Text style={styles.text}>CCCD khách hàng</Text></View>
                        <View style={styles.main}>
                            <AntDesign name='infocirlceo' size={20}></AntDesign>
                            <Text style={styles.textmain}>{room.bill.inforCustomer.identityCard}</Text>
                        </View>
                        <View style={styles.main}>
                            <Text style={[styles.textmain, { fontWeight: 'bold', fontStyle: 'italic' }]}>Mặt trước CCCD</Text>

                        </View>
                        <View style={styles.main}>
                            <Image
                                source={{ uri: room.bill.inforCustomer.frontIdentityCard }}
                                style={{ height: 130, width: '70%', resizeMode: 'cover' }}
                            />
                        </View>
                        <View style={styles.main}>
                            <Text style={[styles.textmain, { fontWeight: 'bold', fontStyle: 'italic' }]}>Mặt sau CCCD</Text>

                        </View>
                        <View style={styles.main}>
                            <Image
                                source={{ uri: room.bill.inforCustomer.frontIdentityCard }}
                                style={{ height: 130, width: '70%', resizeMode: 'cover' }}
                            />
                        </View>
                        <View style={[styles.title, { borderRadius: 5, alignItems: 'center' }]}><Text style={styles.text}>Thông tin đặt phòng</Text></View>
                        <View style={styles.main}>
                            <Fontisto name='date' size={20}></Fontisto>
                            <Text style={styles.textmain}>{room.bill.startDay} - {room.bill.endDay}</Text>
                        </View>
                        <View style={styles.main}>
                            <AntDesign name='clockcircleo' size={20}></AntDesign>
                            <Text style={styles.textmain}>{room.bill.duration} ngày</Text>
                        </View>
                        <View style={styles.main}>
                            <MaterialIcons name='payment' size={20}></MaterialIcons>
                            <Text style={styles.textmain}>{room.bill.status}</Text>
                        </View>
                        <View style={[styles.title, { borderRadius: 5, alignItems: 'center' }]}><Text style={styles.text}>Ghi chú</Text></View>
                        <View style={styles.main}>

                            <Text style={styles.textmain}>{room.bill.note}</Text>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.title}><Text style={styles.text}>Lịch sử đặt phòng</Text></View>
            {bookingHistoryMock.map(item => (
                <View style={{display:'flex', flexDirection:'column', width:'90%', marginLeft:'5%', alignItems:'center', justifyContent:'center', borderRadius:20, borderColor:'black', borderWidth:1}}>
                    <View style={styles.main}>
                        <Text style={[styles.textmain, { fontWeight: 'bold' }]}>Ngày tạo: </Text>
                        <Text style={styles.textmain}>{item.createdAt}</Text>
                    </View>
                    <View style={styles.main}>
                        <Text style={[styles.textmain, { fontWeight: 'bold' }]}>Ngày checkin: </Text>
                        <Text style={styles.textmain}>{item.checkInDate}</Text>
                    </View>
                    <View style={styles.main}>
                        <Text style={[styles.textmain, { fontWeight: 'bold' }]}>Ngày checkout: </Text>
                        <Text style={styles.textmain}>{item.checkOutDate}</Text>
                    </View>
                    <View style={styles.main}>
                        <Text style={[styles.textmain, { fontWeight: 'bold' }]}>Số lượng khách: </Text>
                        <Text style={styles.textmain}>{item.roomCustomer.mature} người lớn và {bookingHistoryMock.roomCustomer.children} trẻ em</Text>
                    </View>
                    <View style={styles.main}>
                        <Text style={[styles.textmain, { fontWeight: 'bold' }]}>Tổng chi phí: </Text>
                        <Text style={styles.textmain}>{item.totalPrice}</Text>
                    </View>
                    <View style={styles.main}>
                        <Text style={[styles.textmain, { fontWeight: 'bold' }]}>Thanh toán bằng: </Text>
                        <Text style={styles.textmain}>{item.paymentMethod}</Text>
                    </View>
                    <View style={styles.main}>
                        <Text style={[styles.textmain, { fontWeight: 'bold' }]}>Trạng thái: </Text>
                        <Text style={styles.textmain}>{item.status}</Text>
                    </View>
                </View>
            ))}
            <ButtonComponent style={styles.delete} text="XOÁ"></ButtonComponent>
        </ScrollView>
    );
};

export default DetailRoom;

const styles = StyleSheet.create({
    title: {
        display: "flex",
        justifyContent: "center",
        height: 30,
        backgroundColor: generalColor.primary,
        marginTop: 2.5,
        marginBottom: 2.5,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
        color: "white",
        marginRight: 20
    },
    textmain: {
        fontSize: 18,
        marginLeft: 5,

    },
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2.5,
        marginBottom: 2.5,
        height: "auto",
        marginLeft: 20,
        marginRight: 20,
        width: '100%'
    },
    slider: {
        height: "30%"
    },
    imageslider: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    delete: {
        width: "60%",
        marginLeft: "20%",
        marginTop: "35%",
        backgroundColor: generalColor.primary,
        borderRadius: 20,
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
