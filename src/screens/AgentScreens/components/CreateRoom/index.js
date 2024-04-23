import TextInputComponent from '@src/components/TextInputComponent';
import textStyle from '@src/theme/text';
import { MASK_FORMAT } from '@src/utils/textFormat';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList, Pressable, TouchableOpacity, Modal } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { showMessage } from 'react-native-flash-message';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AgentHeader from '../Header';
import ButtonComponent from '@src/components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CreateRoom = () => {
    const [value, setValue] = useState('');
    // useEffect(() => {
    //     handleShowMessage();
    // }, []);
    // const handleShowMessage = () => {
    //     showMessage({
    //         message: 'Cập nhật thất bại',
    //         type: 'danger',
    //     });
    // };
    const imageSourceList = []
    const [imageSource, setImageSource] = useState(null);
    const selectImageFromCamera = () => {
        const options = {
            noData: true,
        };

        launchCamera(options, response => {
            if (response.uri) {
                setImageSource(response.uri);
                imageSourceList.push(response.uri)
            }
        });
    };
    const [imageSource1, setImageSource1] = useState(null);
    const selectImage = () => {
        const options = {
            noData: true,
        };

        launchImageLibrary(options, response => {
            if (response.uri) {
                setImageSource1(response.uri);
                imageSourceList.push(response.uri)
            }
        });
    };

    const renderItem = ({ item }) => (
        <Image source={imageSourceList[item]} ></Image>
    );

    const [dichuyen, setDichuyen] = useState([])
    const handleDeleteDiChuyen = (index) => {
        setDichuyen((prevItems) => {
            const updatedItems = [...prevItems]; // Create a copy
            updatedItems.splice(index, 1); // Remove the item
            return updatedItems;
        });
    }
    //select
    const [modalVisible, setModalVisible] = useState(false);
    const [inx, setInx] = useState(0)
    const options = ['Điều hoà', 'Giường thường', 'Giường King', 'Ban công', 'Bồn tắm', 'Cửa sổ lớn'];

    const handleSelect = (value, index) => {
        setDichuyen((prevItems) => {
            const updatedItems = [...prevItems]; // Create a copy
            updatedItems[index] = value // Remove the item
            return updatedItems;
        });
        setModalVisible(false);
    };

    return (
        <View style={{ backgroundColor: "#F2F5FA" }}>
            <AgentHeader active="TẠO PHÒNG" detail="- Thêm phòng cho hotel của bạn - "></AgentHeader>
            <Text style={{ fontSize: 15, width: "90%", marginLeft: "5%", marginTop: 10, marginBottom: -5, fontWeight: "bold" }}>* THÔNG TIN CHUNG</Text>
            <View style={styles.container}>
                <TextInputComponent
                    placeholder="Loại phòng ..."
                    value={value}
                    widthTextInput={"80%"}
                    heightTextInput={40}
                    onChangeText={text => {
                        setValue(text);
                    }}

                    marginBottom={0}
                    styleTextInput={[
                        {
                            maxWidth: '100%',
                        },
                        textStyle.h[5],
                    ]}
                    style={styles.textinput}
                    placeholderColor="black"
                />
                <TextInputComponent
                    placeholder="Giá phòng ..."
                    value={value}
                    widthTextInput={"80%"}
                    heightTextInput={40}
                    onChangeText={text => {
                        setValue(text);
                    }}

                    marginBottom={0}
                    styleTextInput={[
                        {
                            maxWidth: '100%',
                        },
                        textStyle.h[5],
                    ]}
                    style={styles.textinput}
                    placeholderColor="black"
                />
                <TextInputComponent
                    placeholder="Mô tả ..."
                    value={value}
                    widthTextInput={"80%"}
                    heightTextInput={40}
                    onChangeText={text => {
                        setValue(text);
                    }}

                    marginBottom={0}
                    styleTextInput={[
                        {
                            maxWidth: '100%',
                        },
                        textStyle.h[5],
                    ]}
                    style={styles.textinput}
                    placeholderColor="black"
                />
            </View>
            <Text style={{ fontSize: 15, width: "90%", marginLeft: "5%", marginTop: 10, marginBottom: -5, fontWeight: "bold" }}>* CHI TIẾT NỘI THẤT</Text>
            <View style={{ width: "90%", marginLeft: "5%" }}>
                <View style={{ marginTop: 12, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text
                        style={{
                            color: "black",
                            fontSize: 18,
                            textAlign: 'center',

                        }}>
                        <AntDesign
                            name="caretright"
                            color="#18C0C1"
                            size={15}
                        ></AntDesign> Thêm nội thất
                    </Text>
                    <Pressable onPress={() => { setDichuyen([...dichuyen, "Nội thất ... ?"]) }}>
                        <Ionicons
                            name="add"
                            color="#18C0C1"
                            size={32}
                        ></Ionicons>
                    </Pressable>
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                    {dichuyen.map((item, index) => (
                        <View style={styles.location}>
                            <TouchableOpacity onPress={() => { setModalVisible(true), setInx(index) }} style={styles.selectButton}>
                                <Text style={styles.selectButtonText}>{item}</Text>
                            </TouchableOpacity>
                            <Modal
                                key={index}
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => setModalVisible(false)}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>

                                        {options.map((option, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={styles.optionButton}
                                                onPress={() => handleSelect(option, inx)}
                                            >
                                                <Text>{option}</Text>
                                            </TouchableOpacity>
                                        ))}

                                    </View>
                                </View>
                            </Modal>
                            <AntDesign name='delete' size={30} color="tomato" onPress={() => handleDeleteDiChuyen(index)} style={styles.delete}></AntDesign>

                        </View>
                    ))
                    }
                </View>
            </View>
            <View style={styles.imageChose}>
                <Text style={{ fontSize: 15, width: "100%", marginTop: 10, marginBottom: 10, fontWeight: "bold" }}>* THÊM HÌNH ẢNH MÌNH HOẠ </Text>
                <View style={styles.buttonImage}>
                    <ButtonComponent title="Chụp ảnh" onPress={selectImageFromCamera} style={styles.buttonItem} text="Chụp Ảnh" />
                    <ButtonComponent title="Chọn ảnh" onPress={selectImage} style={styles.buttonItem} text="Chọn Ảnh" />
                </View>
                {/* <FlatList
                    style={styles.flatList}
                    data={imageSource}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.imagelist}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                /> */}
            </View>
            <ButtonComponent onPress={() => { }} style={{ width: "70%", marginLeft: "15%", backgroundColor: "#18C0C1", marginTop: "20%", height: 50, borderRadius: 20 }} text="Thêm khách sạn" />
        </View>
    );
};

export default CreateRoom;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginLeft: "5%",
    },
    location: {
        position: "relative",
    },
    buttonLocation: {
        position: "absolute",
        width: "20%",
        bottom: 8,
        right: 10,
        height: 50,
        zIndex: 99,
        borderRadius: 10,
        backgroundColor: "#18C0C1"
    },
    imageChose: {
        width: "90%",
        marginLeft: "5%"
    },
    separator: {
        width: 10,
    },
    flatList: {
        width: "90%",
        marginLeft: "5%",
        height: "20%"
    },
    buttonImage: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 5,
    },
    buttonItem: {
        backgroundColor: "#18C0C1",
        width: 140,
        marginRight: 10,
        marginLeft: 10,
        height: 40,
        borderRadius: 10
    },
    textinput: {
        backgroundColor: '#F2F5FA',
        borderColor: '#18C0C1',
        borderWidth: 1,
        borderRadius: 0
    },
    delete: {
        position: 'absolute',
        width: '20%',
        bottom: 8,
        right: -30,
        zIndex: 99,
    },
    location: {
        marginTop: 10,
        position: 'relative',
    },
    selectButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    selectButtonText: {
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 99
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    optionButton: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
