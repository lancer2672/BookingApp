import ImagePickerModal from '@src/components/ImagePickerModal/ImagePickerModal';
import TextInputComponent from '@src/components/TextInputComponent';
import { generalColor } from '@src/theme/color';
import textStyle from '@src/theme/text';
import { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const EditRoom = ({ roomDefaut }) => {
    const [room, setRoom] = useState(roomDefaut)
    const handlesSetValue = (index, value) => {
        setRoom({ ...room, [index]: value })
    }
    const [people, setPeople] = useState(room.numOfPeople)
    const [child, setChild] = useState(room.numOfChildren)
    const [bed, setBed] = useState(room.bed)

    const [images, setImages] = useState([]);
    const [visible, setVisible] = useState(false);
    //noithat
    const [tienich, setTienich] = useState(room.amenities)
    const handleDeleteTienIch = (index) => {
        setTienich((prevItems) => {
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
        setTienich((prevItems) => {
            const updatedItems = [...prevItems]; // Create a copy
            updatedItems[index] = value // Remove the item
            return updatedItems;
        });
        setModalVisible(false);
    };
    const handleCreateRoom = () => {
        const newroom = { ...room, amenities: tienich, numOfChildren: child, numOfPeople: people, bed: bed }
        setRoom(newroom)
    }
    const buttonNextStyle = {
        backgroundColor: 'white',
        height: 35,
        width: 50,
        borderRadius: 10,
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: 7,
    };
    const buttonPreviousStyle = {
        backgroundColor: generalColor.primary,
        height: 30,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: 4,
    };
    return (
        <View style={{ backgroundColor: "white", height: '60%', width:'90%' }}>
            <View style={{ height:'180%', width:'100%' }}>
                <ProgressSteps completedStepIconColor={generalColor.primary} completedProgressBarColor={generalColor.primary} activeStepIconBorderColor={generalColor.primary} activeLabelColor={generalColor.primary}>
                    <ProgressStep 
                    label="First Step" 
                    nextBtnTextStyle={buttonNextStyle}
                    nextBtnText={<AntDesign name='caretright' size={25} color={generalColor.primary}></AntDesign>}>
                        <View style={{}}>
                            <Text style={{ fontSize: 18, width: "90%", marginLeft: "5%", fontWeight: "bold", textAlign: 'center' }}>THÔNG TIN CHUNG</Text>
                            <View style={styles.container}>
                                <TextInputComponent
                                    value={room.name}
                                    widthTextInput={"80%"}
                                    heightTextInput={40}
                                    onChangeText={text => {
                                        handlesSetValue('name', text);
                                    }}

                                    marginBottom={0}
                                    styleTextInput={[
                                        {
                                            color: 'black',
                                            maxWidth: '100%',
                                        },
                                        textStyle.h[5],
                                    ]}
                                    style={styles.textinput}
                                    placeholderColor="black"
                                />
                                <TextInputComponent
                                    value={room.price.toString()}
                                    widthTextInput={"80%"}
                                    heightTextInput={40}
                                    onChangeText={text => {
                                        handlesSetValue('', text);
                                    }}

                                    marginBottom={0}
                                    styleTextInput={[
                                        {
                                            color: 'black',
                                            maxWidth: '100%',
                                        },
                                        textStyle.h[5],
                                    ]}
                                    style={styles.textinput}
                                    placeholderColor="black"
                                />
                                <TextInputComponent
                                    value={room.policy}
                                    widthTextInput={"80%"}
                                    heightTextInput={40}
                                    onChangeText={text => {
                                        handlesSetValue('policy', text);
                                    }}

                                    marginBottom={0}
                                    styleTextInput={[
                                        {
                                            color: 'black',
                                            maxWidth: '100%',
                                        },
                                        textStyle.h[5],
                                    ]}
                                    style={styles.textinput}
                                    placeholderColor="black"
                                />
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep 
                    label="Second Step" 
                    nextBtnTextStyle={buttonNextStyle} 
                    previousBtnTextStyle={buttonNextStyle} 
                    nextBtnText={<AntDesign name='caretright' size={25} color={generalColor.primary}></AntDesign>}
                    previousBtnText={<AntDesign name='caretleft' size={25} color={generalColor.primary}></AntDesign>}>
                        <View>
                            <Text style={{ fontSize: 18, width: "90%", marginLeft: "5%", fontWeight: "bold", textAlign: 'center' }}>SỐ LƯỢNG KHÁCH VÀ GIƯỜNG</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginLeft: '10%', marginTop: 15 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <AntDesign name='minuscircleo' size={28} style={{ marginRight: 10 }} onPress={() => {
                                        if (people <= 0)
                                            setPeople(0)
                                        else
                                            setPeople(people - 1)
                                    }}></AntDesign>
                                    <MaterialIcons name='people' size={28}></MaterialIcons>
                                    <Text style={{ fontSize: 20 }}> {people}</Text>
                                    <AntDesign name='pluscircleo' size={28} style={{ marginLeft: 10 }} onPress={() => {
                                        setPeople(people + 1)
                                    }}></AntDesign>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <AntDesign name='minuscircleo' size={28} style={{ marginRight: 10 }} onPress={() => {
                                        if (child <= 0)
                                            setChild(0)
                                        else
                                            setChild(child - 1)
                                    }}></AntDesign>
                                    <FontAwesome name='child' size={28}></FontAwesome>
                                    <Text style={{ fontSize: 20 }}>{child}</Text>
                                    <AntDesign name='pluscircleo' size={28} style={{ marginLeft: 10 }} onPress={() => {
                                        setChild(child + 1)
                                    }}></AntDesign>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                <AntDesign name='minuscircleo' size={28} style={{ marginRight: 10 }} onPress={() => {
                                    if (bed <= 0)
                                        setBed(0)
                                    else
                                        setBed(bed - 1)
                                }}></AntDesign>
                                <Ionicons name='bed' size={28}></Ionicons>
                                <Text style={{ fontSize: 20 }}>{bed}</Text>
                                <AntDesign name='pluscircleo' size={28} style={{ marginLeft: 10 }} onPress={() => {
                                    setBed(bed + 1)
                                }}></AntDesign>
                            </View>
                            <Text style={{ fontSize: 18, width: "90%", marginLeft: "5%", fontWeight: "bold", textAlign: 'center', marginTop: 20 }}>THÊM TIỆN TÍCH</Text>
                            <View style={{ width: "90%", marginLeft: "5%" }}>
                                <View style={{ marginTop: 12, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text
                                        style={{
                                            color: "black",
                                            fontSize: 18,
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}>
                                        <AntDesign
                                            name="caretright"

                                            size={18}
                                        ></AntDesign> TIỆN ÍCH
                                    </Text>
                                    <Pressable onPress={() => { setTienich([...tienich, "Tiện ích ..."]) }}>
                                        <Ionicons
                                            name="add"

                                            size={32}
                                        ></Ionicons>
                                    </Pressable>
                                </View>
                                <View style={{ display: "flex", flexDirection: "column" }}>
                                    {tienich.map((item, index) => (
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
                                            <AntDesign name='delete' size={30} color="tomato" onPress={() => handleDeleteTienIch(index)} style={styles.delete}></AntDesign>

                                        </View>
                                    ))
                                    }
                                </View>
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep 
                    label="Third Step" 
                    onSubmit={handleCreateRoom} 
                    previousBtnTextStyle={buttonNextStyle}
                    nextBtnTextStyle={buttonPreviousStyle}
                    previousBtnText={<AntDesign name='caretleft' size={25} color={generalColor.primary}></AntDesign>}
                    finishBtnText='OK'>
                        <View style={styles.imageChose}>
                            <Text style={{ fontSize: 18, width: "100%", marginTop: 10, marginBottom: 10, fontWeight: "bold", textAlign:'center' }}>THÊM HÌNH ẢNH MÌNH HOẠ</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <TouchableOpacity
                                    onPress={async () => {

                                        setVisible(() => true);
                                    }}
                                    style={styles.avatar}>
                                    <Ionicons name='add' size={34} color={generalColor.primary}></Ionicons>
                                </TouchableOpacity>
                                {images.map((item) => <Image source={{ uri: item }} style={styles.imagepick}></Image>)}
                            </View>
                            <ImagePickerModal
                                onResult={image => {
                                    setImages([...images, image])
                                    console.log('image', images)
                                }}
                                visible={visible}
                                onClose={() => setVisible(false)}></ImagePickerModal>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        </View>
    );
};

export default EditRoom;

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
        backgroundColor: generalColor.primary
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
        backgroundColor: generalColor.primary,
        width: 140,
        marginRight: 10,
        marginLeft: 10,
        height: 40,
        borderRadius: 10
    },
    textinput: {
        backgroundColor: '#F2F5FA',
        borderColor: generalColor.primary,
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
    avatar: {
        borderRadius: 12,
        width: 120,
        alignSelf: 'left',
        justifyContent: 'center',
        marginTop: 12,
        alignItems: 'center',
        height: 120,
        backgroundColor: generalColor.other.lightgray,
    },
});
