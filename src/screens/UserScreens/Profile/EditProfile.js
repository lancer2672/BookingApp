import AntDesign from 'react-native-vector-icons/AntDesign';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { Avatar } from 'react-native-paper';

import { useState } from 'react';

import useUserStore from '@src/store/user';
import { generalColor } from '@src/theme/color';
import CustomEditText from './components/EditText';

const dayjs = require('dayjs');

const EditProfileUser = ({navigation}) => {
  // const user = {
  //   name: 'username',
  //   email: 'email@gmail.com',
  //   phoneNumber: '012812384',
  // };
  const user = useUserStore(s => s.user);
  const [nickname, setNickname] = useState(user.lastName + " "+user.firstName);
  const [dateOfBirth, setDateOfBirth] = useState(new Date(user.dateOfBirth));
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleUpdateUserInfo = async () => {};
  const onDateOfBirthFieldClick = () => {
    setShowDatePicker(true);
  };

  return (
    <ScrollView
      style={{
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
        // opacity: showGenderSelection || isLoading ? 0.6 : 1,
      }}>
      <Header>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={24} color={generalColor.primary} />
        </BackButton>
        <Heading>Chỉnh sửa hồ sơ</Heading>
      </Header>

      <Body>
        <Avatar.Image size={80} source={{uri: 'https://picsum.photos/200'}} />

        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: generalColor.primary,
          }}>
          {user.name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'gray',
            fontWeight: 400,
          }}>{`${user.email}`}</Text>

        <View
          style={{
            marginTop: 20,
            marginBottom: 8,
            width: '100%',
            borderColor: 'gray',
            borderBottomWidth: 1,
          }}></View>

        <CustomEditText
          label={'Tên'}
          style={{width: '100%'}}
          value={user.firstName}
          onChangeText={newText => setNickname(newText)}></CustomEditText>
        <View style={{flexDirection: 'row'}}></View>
        <CustomEditText
          label={'Họ'}
          style={{width: '100%'}}
          value={user.lastName}
          onChangeText={newText => setNickname(newText)}></CustomEditText>
        <CustomEditText
          label={'Email'}
          style={{width: '100%'}}
          value={email}
          onChangeText={newText => setEmail(newText)}></CustomEditText>
        <CustomEditText
          label={'Số điện thoại'}
          style={{width: '100%'}}
          value={phoneNumber}
          onChangeText={newText => setPhoneNumber(newText)}></CustomEditText>
      </Body>

      <SaveBtn
        onPress={handleUpdateUserInfo}
        style={{backgroundColor: generalColor.primary}}>
        <SaveBtnText>Lưu</SaveBtnText>
      </SaveBtn>

      {showDatePicker && (
        <RNDateTimePicker
          maximumDate={new Date()}
          mode="date"
          onChange={(e, date) => {
            if (e.type == 'set') {
              setDateOfBirth(date);
            }
            setShowDatePicker(false);
          }}
          value={
            dateOfBirth == null ? new Date() : dateOfBirth
          }></RNDateTimePicker>
      )}
    </ScrollView>
  );
};

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Body = styled.View`
  padding-vertical: 20px;
  flex: 1;

  justify-content: center;
  align-items: center;
`;
const BackButton = styled.TouchableOpacity`
  padding-horizontal: 8px;
  padding-vertical: 4px;
`;
const SaveBtn = styled.TouchableOpacity`
  background-color: black;
  padding: 8px;
  border-radius: 8px;
`;
const SaveBtnText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;
const Heading = styled.Text`
  font-weight: bold;
  font-size: 28;
  color: black;
`;
export default EditProfileUser;
