import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

import Home from '@src/screens/UserScreens/Home/Home';
import UserProfile from '@src/screens/UserScreens/Profile/Profile';
import UserSearchScreen from '@src/screens/UserScreens/Search/Search';
import {Pressable, StyleSheet, View} from 'react-native';
const SearchButton = ({children, onPress}) => {
  return (
    <Pressable
      style={[styles.createButton, {backgroundColor: 'white'}]}
      onPress={onPress}>
      <View style={{width: 48, height: 48}}>{children}</View>
    </Pressable>
  );
};

const Tab = createBottomTabNavigator();
export const Tabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => {
        return {
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
            borderTopWidth: 0,
            backgroundColor: '#040f1f',
          },

          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'UserProfile') {
              return (
                <FontAwesome
                  name="user"
                  size={24}
                  color={focused ? 'white' : 'gray'}
                />
              );
            } else if (route.name === 'Search') {
              return (
                <FontAwesome
                  name="search"
                  size={24}
                  color={focused ? 'white' : 'gray'}
                />
              );
            } else if (route.name === 'BookingHistory') {
              return (
                <Fontisto
                  name="history"
                  size={24}
                  color={focused ? 'white' : 'gray'}
                />
              );
            } else if (route.name === 'Chat') {
              return (
                <Entypo
                  name="chat"
                  size={24}
                  color={focused ? 'white' : 'gray'}
                />
              );
            }
            return (
              <Feather
                name={iconName}
                size={size}
                color={focused ? 'white' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        };
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={UserSearchScreen} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  pseudo: {
    width: 64,
    height: 32,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    left: '50%',
    top: '50%',
    zIndex: 0,
    position: 'absolute',
    transform: [{translateX: -32}, {translateY: -25}],
  },
  createButton: {
    top: -24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    position: 'absolute',
    borderRadius: 35,
    left: '50%',
    transform: [{translateX: -24}],
  },
});
