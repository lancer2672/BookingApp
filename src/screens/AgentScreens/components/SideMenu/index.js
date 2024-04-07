import textStyle from '@src/theme/text';
import {useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Avatar, Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'styled-components/native';

const user = {
  nickname: 'John Doe',
  email: 'john.doe@example.com',
};

const menu = [
  {
    text: 'Item 1',
    onClick: () => console.log('Item 1 clicked'),
    leftIcon: <AntDesign name="home" size={24} color="blue" />,
  },
  {
    text: 'Item 2',
    onClick: () => console.log('Item 2 clicked'),
    leftIcon: <AntDesign name="user" size={24} color="blue" />,
  },
];

const SideMenu = ({isVisible, onClose}) => {
  const theme = useTheme();
  useEffect(() => {}, []);
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
            backgroundColor: 'black',
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
                    color: 'white',
                  },
                ]}>
                {user.nickname}
              </Text>
              <Text
                style={[
                  styles.email,
                  {
                    color: 'white',
                  },
                ]}>
                {user.email}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose}>
            <AntDesign name="close" size={30} color={'white'}></AntDesign>
          </TouchableOpacity>
        </View>
        <Divider
          style={{
            width: '100%',
            alignSelf: 'center',
            marginVertical: 8,
            borderColor: 'red',
            height: 4,
            borderRadius: 12,
          }}
        />
        {menu.map((m, index) => {
          return <SideBarItem key={index} {...m}></SideBarItem>;
        })}
        <Text style={textStyle.h[1]}>Khác</Text>
        <Divider
          style={{
            width: '100%',
            alignSelf: 'center',
            marginVertical: 8,
            borderColor: 'red',
            height: 4,
            borderRadius: 12,
          }}
        />
      </View>
    </Modal>
  );
};

const SideBarItem = ({text, onClick, leftIcon}) => {
  const theme = useTheme();
  return (
    <Pressable onPress={onClick} rippleColor="rgba(0, 0, 0, .32)">
      <View style={[itemStyles.container, {backgroundColor: 'red'}]}>
        {leftIcon}
        <Text style={[itemStyles.text, {color: 'blue'}]}>{text}</Text>
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
