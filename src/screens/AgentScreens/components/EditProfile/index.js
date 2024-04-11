import { useEffect, useState } from 'react';
import { Avatar, IconButton } from 'react-native-paper';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AgentHeader from '../Header';
import { generalColor } from '@src/theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import { MASK_FORMAT } from '@src/utils/textFormat';
import textStyle from '@src/theme/text';


const EditProfile = () => {
    const [value, setValue] = useState('');
    useEffect(() => {
        handleShowMessage();
    }, []);
    const handleShowMessage = () => {
        showMessage({
            message: 'Cập nhật thất bại',
            type: 'danger',
        });
    };
    const [imageSource, setImageSource] = useState(null);
    const selectImageFromCamera = () => {
        const options = {
            noData: true,
        };

        launchCamera(options, response => {
            if (response.uri) {
                setImageSource(response.uri);
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
            }
        });
    };
    return (
        <View >
            <AgentHeader active="CHỈNH SỬA" ></AgentHeader>
            <View style={{width: "100%", alignItems:"center"}}>
                <View style={{ backgroundColor: "white", width: 140, height: 140, borderRadius: 75, justifyContent: "center", alignItems: "center", marginTop: -40 }}>
                    <Avatar.Image size={130} source={{ uri: 'https://picsum.photos/200' }} />
                </View>
            </View>
            <View style={styles.buttonImage}>
                    <ButtonComponent title="Chụp ảnh" onPress={selectImageFromCamera} style={styles.buttonItem} text="Chụp Ảnh"/>
                    <ButtonComponent title="Chọn ảnh" onPress={selectImage} style={styles.buttonItem} text="Chọn Ảnh" />
            </View>
            <View style={styles.container}>
                <View style={styles.containerTextInput}>
                    <AntDesign name='user' size={20} style={styles.icon}></AntDesign>
                    <TextInputComponent
                    placeholder="Tên người dùng ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"100%"}
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
                </View>
            
                <View style={styles.containerTextInput}>
                    <AntDesign name='mail' size={20} style={styles.icon}></AntDesign>
                    <TextInputComponent
                    placeholder="Gmail ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"100%"}
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
                </View>
                <View style={styles.containerTextInput}>
                    <AntDesign name='phone' size={20} style={styles.icon}></AntDesign>
                    <TextInputComponent
                    placeholder="Số điện thoại ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"100%"}
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
                </View>
                <View style={styles.containerTextInput}>
                    <Entypo name='eye-with-line' size={20} style={styles.icon}></Entypo>
                    <TextInputComponent
                    placeholder="Mật khẩu cũ ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"100%"}
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
                </View>
                <View style={styles.containerTextInput}>
                    <Entypo name='eye-with-line' size={20} style={styles.icon}></Entypo>
                    <TextInputComponent
                    placeholder="Mật khẩu mới ..."
                    isMask={true}
                    mask={MASK_FORMAT.NUMBER}
                    value={value}
                    widthTextInput={"100%"}
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
                </View>
            </View>
            <ButtonComponent onPress={() => {}} style={{width:"70%", marginLeft: "15%", marginTop: "45%"}} text="Hoàn Tất" />
        </View>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    textinput: {
        borderBottomColor: "black",
        borderBottomWidth:2,
        marginTop:-5,
    },
    container: {
        width: "90%",
        marginLeft: "5%",
        marginTop:"5%"
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
    containerTextInput: {
        width:"100%",
        height:50,
        marginBottom: 10,
    },
    icon: {
        position: "absolute",
        zIndex: 99,
        right:10,
        top: 15,
    }
});
