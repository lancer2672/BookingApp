import ButtonComponent from '@src/components/Button';
import { navigate } from '@src/navigation/NavigationController';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AgentHeader from '../Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { generalColor } from '@src/theme/color';
import { agentMock } from '@src/mock/mock';
const Profile = () => {
  const navigateToProfile = () => {
    navigate('EditProfile', agentMock);
  };
  return (
    <View style={{ backgroundColor: 'white', flex:1 }}>
      <AgentHeader active="TÀI KHOẢN"></AgentHeader>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 140,
            height: 140,
            borderRadius: 75,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Avatar.Image
            size={130}
            source={{ uri: 'https://picsum.photos/200' }}
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 10,
        }}>
        {agentMock.name}
      </Text>
      <Text style={{ fontSize: 15, textAlign: 'center', marginBottom: 20 }}>
        {agentMock.gmail}
      </Text>
      <View style={styles.title}>
        <Text style={styles.text}>Thông tin cá nhân</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="user" size={20}></AntDesign>
        <Text style={styles.textmain}>{agentMock.name}</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="mail" size={20}></AntDesign>
        <Text style={styles.textmain}>{agentMock.gmail}</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="phone" size={20}></AntDesign>
        <Text style={styles.textmain}>{agentMock.phone}</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="phone" size={20}></AntDesign>
        <Text style={styles.textmain}>{agentMock.identityCard}</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="check" size={20}></AntDesign>
        <Text style={styles.textmain}>{agentMock.status}</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>Thông tin khách sạn</Text>
      </View>
      <View style={styles.main}>
        <FontAwesome5 name='hotel' size={20}></FontAwesome5>
        <Text style={styles.textmain}>{agentMock.countHotelManager}</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="right" size={20} ></AntDesign>
        <Text style={styles.textmain}>{agentMock.countBooking}</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>Giao diện</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="right" size={20}></AntDesign>
        <Text style={styles.textmain}>Darkmode</Text>
      </View>
      <ButtonComponent
        onPress={navigateToProfile}
        style={{
          width: '60%',
          height: 50,
          marginLeft: '20%',
          marginTop: '20%',
          backgroundColor: generalColor.primary,
          borderRadius: 30,
        }}
        text="Sửa Thông Tin Cá Nhân"
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    justifyContent: 'center',
    height: 30,
    backgroundColor: generalColor.primary,
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white',
  },
  textmain: {
    fontSize: 16,
    marginLeft: 5,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2.5,
    marginBottom: 2.5,
    height: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});
