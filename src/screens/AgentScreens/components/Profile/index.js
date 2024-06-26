import ButtonComponent from '@src/components/Button';
import { navigate } from '@src/navigation/NavigationController';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AgentHeader from '../Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { generalColor } from '@src/theme/color';
import useUserStore from '@src/store/user';
import authApi from '@src/api/auth';
const Profile = () => {

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
  const navigateToProfile = () => {
    navigate('EditProfile', user);
  };
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <AgentHeader active="TÀI KHOẢN"></AgentHeader>
      <View style={{ width: '80%', alignItems: 'center', display: 'flex', flexDirection: 'row', height: 150, textAlign:'center', justifyContent:'space-between', marginLeft:'10%' }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '50%',
            height: 70,
            borderRadius: 75,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            
          }}>
          <Avatar.Image
            size={70}
            source={{ uri: 'https://picsum.photos/200' }}
            style={{marginRight:10}}
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              {user.firstName} {user.lastName}
            </Text>
            <Text style={{ fontSize: 15, textAlign: 'center', marginBottom: 20 }}>
              {user.email}
            </Text>
          </View>
        </View>
        <AntDesign name='right' size={30} onPress={navigateToProfile}></AntDesign>    
      </View>

      <View style={[styles.title, { flexDirection: 'row', justifyContent: 'space-between' }]}>
        <Text style={styles.text}>Thông tin cá nhân</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="user" size={20}></AntDesign>
        <Text style={styles.textmain}>{user.firstName} {user.lastName}</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="mail" size={20}></AntDesign>
        <Text style={styles.textmain}>{user.email}</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="phone" size={20}></AntDesign>
        <Text style={styles.textmain}>{user.phoneNumber}</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="check" size={20}></AntDesign>
        <Text style={styles.textmain}>{user.status == 'CREATED' ? 'Đã xác minh' : 'Chưa xác minh'}</Text>
      </View>
      {/* <View style={styles.title}>
        <Text style={styles.text}>Thông tin khách sạn</Text>
      </View>
      <View style={styles.main}>
        <FontAwesome5 name='hotel' size={20}></FontAwesome5>
        <Text style={styles.textmain}>2 khách sạn quản lý</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="right" size={20} ></AntDesign>
        <Text style={styles.textmain}>{agentMock.countBooking} lượt đặt phòng</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>Giao diện</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="right" size={20}></AntDesign>
        <Text style={styles.textmain}>Darkmode</Text>
      </View> */}
      <ButtonComponent
        onPress={handleLogout}
        style={{
          width: '60%',
          height: 50,
          marginLeft: '20%',
          marginTop: '80%',
          backgroundColor: generalColor.primary,
          borderRadius: 30,
        }}
        text="Đăng xuất"
      />

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    justifyContent: 'center',
    height: 40,
    backgroundColor: generalColor.primary,
    alignItems:'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white',
  },
  textmain: {
    fontSize: 18,
    marginLeft: 5,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2.5,
    marginBottom: 2.5,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
  },
});
