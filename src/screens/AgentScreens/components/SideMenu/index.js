import authApi from '@src/api/auth';
import { navigate } from '@src/navigation/NavigationController';
import useUserStore from '@src/store/user';
import { generalColor } from '@src/theme/color';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Avatar, Divider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';
const menu = [
  {
    text: 'Trang chủ',
    onClick: 'Dashboard',
    leftIcon: <AntDesign name="home" size={24} color="white" />,
  },
  {
    text: 'Danh sách khách sạn',
    onClick: 'ListHotel',
    leftIcon: <FontAwesome6 name="hotel" size={24} color="white" />,
  },
  {
    text: 'Tạo khách sạn',
    onClick: 'CreateHotel',
    leftIcon: <Ionicons name="add-circle" size={24} color="white" />,
  },
  {
    text: 'Thông tin cá nhân',
    onClick: 'Profile',
    leftIcon: <AntDesign name="user" size={24} color="white" />,
  },
  {
    text: 'Đoạn chat',
    onClick: 'ListChannel',
    leftIcon: (
      <Ionicons
        name={'chatbubble-ellipses-outline'}
        size={24}
        color={'white'}
      />
    ),
  },
];

const SideMenu = ({isVisible, onClose}) => {
  const theme = useTheme();
  const removeUser = useUserStore(state => state.setUser);
  const user = useUserStore(state => state.user);
  const handleLogout = async () => {
    try {
      authApi.logoutUser();
      removeUser();
    } catch (er) {
      console.log('err', er);
    }
  };
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInRight"
      useNativeDriver={true}
      animationOut="slideOutRight"
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <View
        style={[
          styles.menuContainer,
          {
            backgroundColor: '#F2F5FA',
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.header}>
            <Avatar.Image
              size={60}
              source={{uri: 'https://picsum.photos/200'}}
            />
            <View style={{marginLeft: 8}}>
              <Text
                style={[
                  styles.name,
                  {
                    color: 'black',
                  },
                ]}>
                {user.nickname}
              </Text>
              <Text
                style={[
                  styles.email,
                  {
                    color: 'black',
                  },
                ]}>
                {user.email}
              </Text>
            </View>
          </View>
        </View>
        <Divider
          style={{
            width: '100%',
            alignSelf: 'center',
            marginVertical: 8,
            borderColor: 'red',
            height: 1,
            borderRadius: 12,
            backgroundColor: 'black',
          }}
        />
        {menu.map((m, index) => {
          return (
            <SideBarItem key={index} {...m} onclose={onClose}></SideBarItem>
          );
        })}
        <Divider
          style={{
            width: '100%',
            alignSelf: 'center',
            marginVertical: 8,
            borderColor: 'red',
            height: 1,
            borderRadius: 12,
            backgroundColor: 'black',
          }}
        />
        <Pressable onPress={handleLogout} rippleColor="rgba(0, 0, 0, .32)">
          <View
            style={[
              itemStyles.container,
              {backgroundColor: generalColor.primary},
            ]}>
            <AntDesign name="logout" size={24} color="white" />
            <Text style={[itemStyles.text, {color: 'white'}]}>Đăng xuất</Text>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};

const SideBarItem = ({text, onClick, leftIcon, onclose}) => {
  const theme = useTheme();
  const handlePress = () => {
    onclose(), navigate(onClick);
  };
  return (
    <Pressable onPress={handlePress} rippleColor="rgba(0, 0, 0, .32)">
      <View
        style={[itemStyles.container, {backgroundColor: generalColor.primary}]}>
        {leftIcon}
        <Text style={[itemStyles.text, {color: 'white'}]}>{text}</Text>
      </View>
    </Pressable>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: 10,
  },
  text: {
    marginLeft: 4,
    fontSize: 18,
    fontWeight: '500',
  },
});

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    alignItems: 'flex-end',
  },
  name: {fontWeight: '500', fontSize: 16},
  email: {fontSize: 14},
  menuContainer: {
    backgroundColor: 'white',
    width: '80%',
    padding: 8,
    height: '100%',
  },
  header: {
    marginTop: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },
  setting: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 24,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    marginTop: 8,
    fontWeight: 'bold',
    color: 'gray',
  },
});
export default SideMenu;
