
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Profile from '../components/Profile';
import CreateHotel from '../components/CreateHotel';
import ListHotel from '../components/ListHotel';
import EditProfile from '../components/EditProfile';
import DetailHotel from '../components/DetailHotel';
import Notice from '../components/Notice';
const AgentDashboard = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='ListHotel'>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name="EditProfile" component={EditProfile} options={{title: "Chỉnh sửa thông tin"}}/> 
      <Stack.Screen name="ListHotel" component={ListHotel} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateHotel" component={CreateHotel} options={{ headerShown: false }}/>
      <Stack.Screen name="DetailHotel" component={DetailHotel} options={{title: "Chi tiết khách sạn"}}/>
      <Stack.Screen name="Notice" component={Notice} options={{title: "Thông báo"}}/>
    
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AgentDashboard;

const styles = StyleSheet.create({});
