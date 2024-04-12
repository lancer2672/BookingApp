import TextInputComponent from '@src/components/TextInputComponent';
import textStyle from '@src/theme/text';
import { MASK_FORMAT } from '@src/utils/textFormat';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { showMessage } from 'react-native-flash-message';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AgentHeader from '../Header';
import ButtonComponent from '@src/components/Button';


const CreateHotel = () => {
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
    return (
        <View>
            <AgentHeader active="TẠO KHÁCH SẠN" detail="Chúng tôi sẽ đem về cho bạn những     - khách hàng tiềm năng -"></AgentHeader>
            <Text style={{ fontSize: 15,width:"90%", marginLeft:"5%", marginTop:10, marginBottom:-5, fontWeight: "bold"}}>* THÊM THÔNG TIN VỀ KHÁCH SẠN</Text>
            <View style={styles.container}>
                <TextInputComponent
                    placeholder="Tên Hotel ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"80%"}
                    heightTextInput={20}
                    onChangeText={text => {
                        setValue(text);
                    }}
                    keyboardType={'numeric'}
                    marginBottom={0}
                    autoFocus
                    styleTextInput={[
                        {
                            maxWidth: '100%',
                        },
                        textStyle.h[5],
                    ]}
                    style={styles.textinput}
                />
                <View style={styles.location}>
                    <TextInputComponent
                        placeholder="Vị trí ..."
                        isMask={true}
                        mask={MASK_FORMAT.NUMBER}
                        value={value}
                        widthTextInput={"80%"}
                        heightTextInput={20}
                        onChangeText={text => {
                            setValue(text);
                        }}
                        keyboardType={'numeric'}
                        marginBottom={0}
                        autoFocus
                        styleTextInput={[
                            {
                                maxWidth: '100%',
                            },
                            textStyle.h[5],
                        ]}
                        style={styles.textinput}
                    />
                    <ButtonComponent style={styles.buttonLocation} text="MAP"></ButtonComponent>
                </View>
                <TextInputComponent
                    placeholder="Giá phòng ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"80%"}
                    heightTextInput={20}
                    onChangeText={text => {
                        setValue(text);
                    }}
                    keyboardType={'numeric'}
                    marginBottom={0}
                    autoFocus
                    styleTextInput={[
                        {
                            maxWidth: '100%',
                        },
                        textStyle.h[5],
                    ]}
                    style={styles.textinput}
                />
                   <TextInputComponent
                    placeholder="Khuyến mãi đi kèm ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"80%"}
                    heightTextInput={20}
                    onChangeText={text => {
                        setValue(text);
                    }}
                    keyboardType={'numeric'}
                    marginBottom={0}
                    autoFocus
                    styleTextInput={[
                        {
                            maxWidth: '100%',
                        },
                        textStyle.h[5],
                    ]}
                    style={styles.textinput}
                />
                <TextInputComponent
                    placeholder="Chi tiết tiện tích ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"80%"}
                    heightTextInput={50}
                    onChangeText={text => {
                        setValue(text);
                    }}
                    keyboardType={'numeric'}
                    marginBottom={0}
                    autoFocus
                    styleTextInput={[
                        {
                            maxWidth: '100%',
                        },
                        textStyle.h[5],
                    ]}
                    style={styles.textinput}
                />
                <TextInputComponent
                    placeholder="Chính sách liên quan ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"80%"}
                    heightTextInput={50}
                    onChangeText={text => {
                        setValue(text);
                    }}
                    keyboardType={'numeric'}
                    marginBottom={0}
                    autoFocus
                    styleTextInput={[
                        {
                            maxWidth: '100%',
                        },
                        textStyle.h[5],
                    ]}
                    style={styles.textinput}
                />
            </View>
            <View style={styles.imageChose}>
            <Text style={{ fontSize: 15, width:"100%", marginTop:10, marginBottom:0, fontWeight: "bold"}}>* THÊM HÌNH ẢNH MÌNH HOẠ </Text>
                <View style={styles.buttonImage}>
                    <ButtonComponent title="Chụp ảnh" onPress={selectImageFromCamera} style={styles.buttonItem} text="Chụp Ảnh"/>
                    <ButtonComponent title="Chọn ảnh" onPress={selectImage} style={styles.buttonItem} text="Chọn Ảnh" />
                </View>
                <FlatList
                    style={styles.flatList}
                    data={imageSource}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.imagelist}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
            <ButtonComponent onPress={() => {}} style={{width:"90%", marginLeft: "5%"}} text="Thêm khách sạn" />
        </View>
    );
};

export default CreateHotel;

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
        bottom: 4,
        right: 10,
        height: 30,
        zIndex: 99,
        borderRadius: 10,
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
        height:"20%"
    },
    buttonImage: {
        display: "flex",
        flexDirection: "row",
        width:"100%",
        justifyContent: "center",
        marginTop:5,
    },
    buttonItem: {
        backgroundColor: "#091E3D",
        width:140,
        marginRight:10,
        marginLeft:10,
        height:35,
    },
    textinput: {
        borderBottomColor: "black",
        borderBottomWidth:2,
        marginBottom: -2,
    }
});
