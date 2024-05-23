import React, {useContext} from 'react';
import {FlatList, Linking, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from '@src/api/auth';
import {goBack, navigate} from '@src/navigation/NavigationController';
import useUserStore from '@src/store/user';
import {generalColor} from '@src/theme/color';
import {ThemeContext} from '@src/theme/context';
import {Avatar, Divider} from 'react-native-paper';
import SettingItem from './components/SettingItem';
const UserProfile = () => {
  const user = {
    avatar: 'https://picsum.photos/200',
    nickname: 'User Nickname',
  };
  const removeUser = useUserStore(state => state.setUser);

  const theme = useTheme();
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  const handleLogout = async () => {
    try {
      authApi.logoutUser();
      removeUser();
    } catch (er) {
      console.log('err', er);
    }
  };
  const openDeviceSetting = () => {
    Linking.openSettings();
  };

  const viewRef = React.useRef(null);
  const settingOptions = [
    {
      name: 'Thông báo',
      icon: <Entypo name={'bell'} size={20} color={'#3da9fc'} />,
      backgroundIconColor: '#a3d3f7',
      onClick: openDeviceSetting,
    },
    {
      name: 'Đặt lại mật khẩu',
      icon: <Entypo name={'lock'} size={20} color={'#356e2a'} />,
      backgroundIconColor: '#60bf4d',
      onClick: () => {
        navigate('ResetPassword');
      },
    },
    {
      name: 'Chế độ tối',
      icon: <Entypo name={'moon'} size={20} color={'#8024c7'} />,
      backgroundIconColor: '#ae9bbd',
      isToggleMode: true,
      defaultSwitchValue: isDarkTheme,
      onClick: async () => {
        setIsDarkTheme(prev => !prev);
        viewRef.current.animate({0: {opacity: 0.65}, 1: {opacity: 1}});
        await AsyncStorage.setItem('AppTheme', !isDarkTheme ? 'dark' : 'light');
      },
    },
  ];
  const settingOptions2 = [
    {
      name: 'Lịch sử đặt phòng & thanh toán',
      icon: <FontAwesome5 name={'history'} size={20} color={'white'} />,
      backgroundIconColor: generalColor.primary,
      onClick: () => {
        navigate('BookingHistory');
      },
    },
    {
      name: 'Danh sách yêu thích',
      icon: <AntDesign name={'heart'} size={20} color={'white'} />,
      backgroundIconColor: generalColor.primary,
      onClick: () => {
        navigate('FavouriteRooms');
      },
    },
  ];
  return (
    <Container>
      <Animatable.View
        useNativeDriver={true}
        style={{flex: 1}}
        ref={viewRef}
        easing={'ease-in-out'}>
        <Header>
          <BackButton onPress={goBack}>
            <AntDesign name="arrowleft" size={24} color={'black'} />
          </BackButton>
          <Heading>Hồ sơ</Heading>
        </Header>

        <Body>
          <SettingCategory>Tài khoản</SettingCategory>
          <TouchableOpacity
            onPress={() => {
              navigate('EditProfileUser');
            }}
            style={{
              marginTop: 12,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar.Image source={{uri: user.avatar}}></Avatar.Image>
            <View style={{marginLeft: 12, flex: 1}}>
              <Text style={{color: generalColor.primary, fontSize: 18}}>
                {user.nickname}
              </Text>
              <Text style={{color: generalColor.primary}}>
                Thông tin cá nhân
              </Text>
            </View>
            <IconContainer>
              <Entypo name="chevron-right" size={24} color="white" />
            </IconContainer>
          </TouchableOpacity>

          <SettingCategory>Hồ sơ</SettingCategory>
          <FlatList
            data={settingOptions}
            renderItem={({item}) => <SettingItem {...item} />}
            keyExtractor={item => item.name}
          />
          <Divider
            style={{marginTop: 8, backgroundColor: generalColor.primary}}
            bold></Divider>
          <FlatList
            data={settingOptions2}
            renderItem={({item}) => <SettingItem {...item} />}
            keyExtractor={item => item.name}
          />
        </Body>
        <LogoutButton onPress={handleLogout}>
          <LogoutText>Đăng xuất</LogoutText>
        </LogoutButton>
      </Animatable.View>
    </Container>
  );
};

const Container = styled.ScrollView`
  padding: 20px;
  background-color: ${props => props.theme.bg.primary};
  flex: 1;
`;
const Body = styled.View`
  flex: 1;
`;
const SettingCategory = styled.Text`
  margin-top: 20px;

  font-size: 22px;
  color: ${generalColor.primary};
`;
const LogoutButton = styled.TouchableOpacity`
  border-radius: 4px;
  margin-top: 28px;
  padding-vertical: 4px;
  background-color: ${generalColor.primary};
`;
const IconContainer = styled.View`
  border-radius: 8px;
  background-color: #091e3d;
  padding: 8px;
  margin-left: 12px;
`;
const LogoutText = styled.Text`
  text-align: center;
  padding-vertical: 4px;
  font-weight: 500;
  color: white;
  font-size: 22px;
`;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BackButton = styled.TouchableOpacity`
  padding-horizontal: 8px;
  padding-vertical: 4px;
`;

const Heading = styled.Text`
  font-weight: bold;
  font-size: 32px;
  color: ${generalColor.primary};
`;

export default UserProfile;
