import TextInputComponent from '@src/components/TextInputComponent';
import textStyle from '@src/theme/text';
import { MASK_FORMAT } from '@src/utils/textFormat';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Pressable, TouchableOpacity, Modal, Image } from 'react-native';
import ImagePickerModal from '@src/components/ImagePickerModal/ImagePickerModal';
import AgentHeader from '../Header';
import ButtonComponent from '@src/components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { IconButton } from 'react-native-paper';
import { generalColor } from '@src/theme/color';
import { ro } from 'date-fns/locale';
import { center, rowCenter } from '@src/theme/style';
import { goBack, navigate } from '@src/navigation/NavigationController';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import staffApi from '@src/api/staff';
import { useRoute } from '@react-navigation/native';

const CreateStaff = () => {
    const route = useRoute();
    const data = route.params;
    let count = 0;
    if(data.staff == null)
        count = 0
    else 
        count = data.staff.length + 1
    const [staff, setStaff] = useState({
        first_name: '',
        last_name: '',
        email: '',
        avatar: '',
        phone_number: '',
        id: count,   
    })
    const handlesSetValue = (index, value) => {
        setStaff({ ...staff, [index]: value })
    }

    const [images1, setImages1] = useState('https://picsum.photos/200');
    const [visible, setVisible] = useState(false);
    
    
    const handleCreateStaff = () => {
     
        const newstaff = { ...staff , avatar:images1}
        setStaff(newstaff)
        const payload = new FormData();

        payload.append('first_name',staff.first_name);
        payload.append('last_name', staff.last_name);
        payload.append('phone_number', staff.phone_number);
        payload.append('email', staff.email);
        payload.append('avatar', staff.avatar);
        payload.append('agentId', data.hotelId);
        console.log('payload', JSON.stringify(payload));
        staffApi.createStaff(payload).then(data=>{  
            navigate('Staff')
            console.log("Created",data);
        }).catch(er=>{
          console.log('err',er.response);
        })
        // handleFormSubmit(staff)
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isOldPasswordVisible, setOldIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState(true)
    const checkPassword = () => {
        if(password === staff.password)
            setPasswordCheck(true)
        setPasswordCheck(false)
    }
    const buttonTextStyle = {
        backgroundColor: generalColor.primary,
        height: 35,
        width: 90,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: 7,
    };
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ padding: 12, marginTop: 12, ...rowCenter, marginBottom: 12, backgroundColor: generalColor.primary }}>
                <Pressable onPress={goBack}>
                    <AntDesign
                        name="left"
                        size={24}
                        color='white'></AntDesign>
                </Pressable>
                <Text
                    style={{
                        textTransform: 'uppercase',
                        color: "white",
                        ...textStyle.h[2],
                        flex: 1,
                        textAlign: 'center',
                        marginRight: -30,
                        fontFamily: 'serif',
                    }}>
                    Thêm nhân viên
                </Text>
                <Pressable>
                    <IconButton
                        icon="bell"
                        size={24}
                        iconColor='white'
                    />
                </Pressable>
            </View>
            <View style={{ flex: 1 }}>
                <ProgressSteps completedStepIconColor={generalColor.primary} completedProgressBarColor={generalColor.primary} activeStepIconBorderColor={generalColor.primary} activeLabelColor={generalColor.primary}>
                    <ProgressStep label="First Step" nextBtnTextStyle={buttonTextStyle} onNext={checkPassword}>
                        <View style={{}}>
                            <Text style={{ fontSize: 18, width: "90%", marginLeft: "5%", fontWeight: "bold", textAlign: 'center' }}>* THÔNG TIN ĐĂNG NHẬP *</Text>
                            <View style={styles.container}>
                               
                                 <TextInputComponent
                                placeholder="Họ ..."
                                value={staff.first_name}
                                widthTextInput={"80%"}
                                heightTextInput={40}
                                onChangeText={text => {
                                    handlesSetValue('first_name', text);
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
                                placeholder="Tên ..."
                                value={staff.last_name}
                                widthTextInput={"80%"}
                                heightTextInput={40}
                                onChangeText={text => {
                                    handlesSetValue('last_name', text);
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
                                {/* <View style={styles.containerTextInput}>
                                    {!isOldPasswordVisible ? (
                                        <Entypo
                                            name="eye-with-line"
                                            size={20}
                                            style={styles.icon}
                                            onPress={() => setOldIsPasswordVisible(true)}></Entypo>
                                    ) : (
                                        <Entypo
                                            name="eye"
                                            size={20}
                                            style={styles.icon}
                                            onPress={() => setOldIsPasswordVisible(false)}></Entypo>
                                    )}
                                    <TextInputComponent
                                        placeholder="Mật khẩu ...."
                                        secureTextEntry={!isOldPasswordVisible}
                                        widthTextInput={'80%'}
                                        heightTextInput={40}
                                        onChangeText={text => {
                                            handlesSetValue('password', text);
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
                                <View style={styles.containerTextInput}>
                                    {!isPasswordVisible ? (
                                        <Entypo
                                            name="eye-with-line"
                                            size={20}
                                            style={styles.icon}
                                            onPress={() => setIsPasswordVisible(true)}></Entypo>
                                    ) : (
                                        <Entypo
                                            name="eye"
                                            size={20}
                                            style={styles.icon}
                                            onPress={() => setIsPasswordVisible(false)}></Entypo>
                                    )}
                                    <TextInputComponent
                                        placeholder="Nhập lại mật khẩu ..."
                                        secureTextEntry={!isPasswordVisible}
                                        widthTextInput={'80%'}
                                        heightTextInput={40}
                                        onChangeText={text => {
                                            setPassword(text);
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
                                </View> */}
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Second Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                        <Text style={{ fontSize: 18, width: "90%", marginLeft: "5%", fontWeight: "bold", textAlign: 'center' }}>* Thông tin cá nhân *</Text>
                        <View style={styles.container}>
                           
                            <TextInputComponent
                                placeholder="Số điện thoại ..."
                                value={staff.phone_number}
                                widthTextInput={"80%"}
                                heightTextInput={40}
                                onChangeText={text => {
                                    handlesSetValue('phone_number', text);
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
                                    placeholder="Email ..."
                                    value={staff.email}
                                    widthTextInput={"80%"}
                                    heightTextInput={40}
                                    onChangeText={text => {
                                        handlesSetValue('email', text);
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
                            {/* <TextInputComponent
                                placeholder="Số CCCD ..."
                                value={staff.identityCard}
                                widthTextInput="80%"
                                heightTextInput={30}
                                onChangeText={text => {
                                    handlesSetValue('identityCard', text);
                                }}

                                marginBottom={0}
                                styleTextInput={[
                                    {
                                        color: 'black',
                                        maxWidth: '80%',
                                    },
                                    textStyle.h[5],
                                ]}
                                style={styles.textinput}
                                placeholderColor="black"
                            /> */}
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Third Step" onSubmit={handleCreateStaff} nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>

                        <View style={styles.imageChose}>
                            {/* <Text style={{ fontSize: 18, width: "100%", marginTop: 10, fontWeight: "bold", textAlign: 'center' }}>* Nhập số CCCD *</Text>
                            <TextInputComponent
                                placeholder="Số CCCD ..."
                                value={staff.policy}
                                widthTextInput="80%"
                                heightTextInput={30}
                                onChangeText={text => {
                                    handlesSetValue('policy', text);
                                }}

                                marginBottom={0}
                                styleTextInput={[
                                    {
                                        color: 'black',
                                        maxWidth: '80%',
                                    },
                                    textStyle.h[5],
                                ]}
                                style={styles.textinput}
                                placeholderColor="black"
                            /> */}
                            <Text style={{ fontSize: 18, width: "100%", marginTop: 10, marginBottom: 10, fontWeight: "bold", textAlign: 'center' }}>* Thêm Avatar *</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <TouchableOpacity
                                    onPress={async () => {

                                        setVisible(() => true);
                                    }}
                                    style={styles.avatar}>
                                    <Ionicons name='add' size={34} color={generalColor.primary}></Ionicons>
                                </TouchableOpacity>
                                <Image source={{ uri: images1 }} style={styles.imagepick}></Image>
                            </View>
                            <ImagePickerModal
                                onResult={image => {
                                    setImages1(image)
                                }}
                                visible={visible}
                                onClose={() => setVisible(false)}></ImagePickerModal>
                        </View>
                        {/* <View style={styles.imageChose}>
                            <Text style={{ fontSize: 18, width: "100%", marginTop: 10, marginBottom: 10, fontWeight: "bold", textAlign: 'center' }}>* Mặt sau CCCD *</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <TouchableOpacity
                                    onPress={async () => {

                                        setVisible(() => true);
                                    }}
                                    style={styles.avatar}>
                                    <Ionicons name='add' size={34} color={generalColor.primary}></Ionicons>
                                </TouchableOpacity>
                                <Image source={{ uri: images2 }} style={styles.imagepick}></Image>
                            </View>
                            <ImagePickerModal
                                onResult={image => {
                                    setImages2(image)
                                }}
                                visible={visible}
                                onClose={() => setVisible(false)}></ImagePickerModal>
                        </View> */}
                    </ProgressStep>
                </ProgressSteps>
            </View>
        </View>
    );
};

export default CreateStaff;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginLeft: "5%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
        marginLeft: "5%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

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
        borderRadius: 15,
        width: '90%',
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
        width: '50%',
        justifyContent: 'center',
        marginTop: 12,
        alignItems: 'center',
        height: 140,
        backgroundColor: generalColor.other.lightgray,
    },
    containerTextInput: {
        width: '100%',
        height: 70,
        marginBottom: 10,
        marginLeft:40
    },
    icon: {
        position: 'absolute',
        zIndex: 99,
        right: 50,
        top: 40,
    },
});
