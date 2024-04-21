import { useRoute } from '@react-navigation/native';
import ButtonComponent from '@src/components/Button';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { generalColor } from '@src/theme/color';
import { goBack } from '@src/navigation/NavigationController';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
const DetailRoom = () => {
    const room = {
        type: 'Phòng đơn',
        tienich: 'Dieu hoa, ghe sofa, tu quan ao',
        price: '$300',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s',
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        ],
        detail: '2 người lớn',
        policy: 'Cam hut thuoc duoi moi hinh thuc',
        sales: 'Mien phi bua an sang di kem',
    }
    // const route = useRoute();
    // const { room } = route.params;
    return (
        <View style={{ backgroundColor: "white" , flex:1}}>
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
                <Text style={styles.textmain}>{room.type}</Text>
            </View>
            <View style={styles.main}>
                <Entypo name='user' size={20}></Entypo>
                <Text style={styles.textmain}>{room.detail}</Text>
            </View>
            <View style={styles.main}>
                <FontAwesome name='money' size={20}></FontAwesome>
                <Text style={styles.textmain}>{room.price}</Text>
            </View>

            <View style={styles.title}><Text style={styles.text}>Chi tiết tiện tích</Text></View>
            <View style={styles.main}>
                <AntDesign name='right' size={20}></AntDesign>
                <Text style={styles.textmain}>{room.tienich}</Text>
            </View>
            <View style={styles.main}>
                <AntDesign name='right' size={20}></AntDesign>
                <Text style={styles.textmain}>{room.sales}</Text>
            </View>

            <View style={styles.title}><Text style={styles.text}>Quy định</Text></View>
            <View style={styles.main}>
                <AntDesign name='right' size={20}></AntDesign>
                <Text style={styles.textmain}>{room.policy}</Text>
            </View>
            <ButtonComponent style={styles.delete} text="XOÁ"></ButtonComponent>
        </View>
    );
};

export default DetailRoom;

const styles = StyleSheet.create({
    title: {
        display: "flex",
        justifyContent: "center",
        height: 30,
        backgroundColor: "#18C0C1",
        marginTop: 2.5,
        marginBottom: 2.5,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
        color: "white",
    },
    textmain: {
        fontSize: 16,
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
        marginTop: "45%",
        backgroundColor: "#18C0C1",
        borderRadius: 20,
    }
});
