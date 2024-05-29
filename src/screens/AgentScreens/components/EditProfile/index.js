import {useRoute} from '@react-navigation/native';
import ButtonComponent from '@src/components/Button';
import ImagePickerModal from '@src/components/ImagePickerModal/ImagePickerModal';
import TextInputComponent from '@src/components/TextInputComponent';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const EditProfile = () => {
  const route = useRoute();
  const agent = route.params;
  const [newagent, setNewAgent] = useState({
    id: 1,
    name: 'Agent Name',
    gmail: 'agent@gmail.com',
    phone: '099999999',
    identityCard: '123456789',
    status: 'Đã xác minh',
    countBooking: 5,
    password: '',
  });
  const [oldPassword, setOldPassord] = useState('');
  const [images, setImages] = useState('https://picsum.photos/200');
  const [visible, setVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isOldPasswordVisible, setOldIsPasswordVisible] = useState(false);
  return (
    <View style={styles.main}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 140,
            height: 140,
            borderRadius: 75,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -40,
          }}
          onPress={async () => {
            setVisible(() => true);
          }}>
          <Avatar.Image size={130} source={{uri: images}} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.containerTextInput}>
          <AntDesign name="user" size={20} style={styles.icon}></AntDesign>
          <TextInputComponent
            placeholder={agent.name}
            widthTextInput={'80%'}
            heightTextInput={20}
            onChangeText={text => {
              setNewAgent({...newagent, name: text});
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
          <AntDesign name="mail" size={20} style={styles.icon}></AntDesign>
          <TextInputComponent
            placeholder={agent.gmail}
            widthTextInput={'80%'}
            heightTextInput={20}
            onChangeText={text => {
              setNewAgent({...newagent, gmail: text});
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
          <AntDesign name="phone" size={20} style={styles.icon}></AntDesign>
          <TextInputComponent
            placeholder={agent.phone}
            widthTextInput={'80%'}
            heightTextInput={20}
            onChangeText={text => {
              setNewAgent({...newagent, phone: text});
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
            placeholder="Mật khẩu cũ ...."
            secureTextEntry={!isOldPasswordVisible}
            widthTextInput={'80%'}
            heightTextInput={20}
            onChangeText={text => {
              setOldPassord(text);
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
            placeholder="Mật khẩu mới ..."
            secureTextEntry={!isPasswordVisible}
            widthTextInput={'80%'}
            heightTextInput={20}
            onChangeText={text => {
              setNewAgent({...newagent, password: text});
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
      <ButtonComponent
        onPress={() => {
          navigate('Profile');
        }}
        style={{
          width: '50%',
          marginLeft: '25%',
          marginTop: '40%',
          backgroundColor: generalColor.primary,
          borderRadius: 30,
        }}
        text="Hoàn Tất"
      />
      <ImagePickerModal
        onResult={image => {
          setImages(image);
          console.log('image', images);
        }}
        visible={visible}
        onClose={() => setVisible(false)}></ImagePickerModal>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
    borderColor: generalColor.primary,
    borderWidth: 1,
  },
  container: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '5%',
  },
  buttonImage: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonItem: {
    backgroundColor: generalColor.primary,
    width: 140,
    marginRight: 10,
    marginLeft: 10,
    height: 40,
    borderRadius: 10,
  },
  containerTextInput: {
    width: '100%',
    height: 50,
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    zIndex: 99,
    right: 10,
    top: 30,
  },
  main: {
    paddingTop: '30%',
    backgroundColor: 'white',
    flex: 1,
  },
});
