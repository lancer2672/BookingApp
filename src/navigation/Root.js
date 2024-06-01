import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import authApi from '@src/api/auth';
import Dashboard from '@src/screens/AgentScreens/Dashboard';
import CreateHotel from '@src/screens/AgentScreens/components/CreateHotel';
import CreateRoom from '@src/screens/AgentScreens/components/CreateRoom';
import DetailRoom from '@src/screens/AgentScreens/components/DetailRoom';
import EditProfile from '@src/screens/AgentScreens/components/EditProfile';
import ListHotel from '@src/screens/AgentScreens/components/ListHotel';
import ListRoom from '@src/screens/AgentScreens/components/ListRoom';
import Notice from '@src/screens/AgentScreens/components/Notice';
import Profile from '@src/screens/AgentScreens/components/Profile';
import AgentSignUp from '@src/screens/Authentication/AgentSignUp';
import ForgotPassword from '@src/screens/Authentication/ForgotPassword';
import SignIn from '@src/screens/Authentication/SignIn';
import SignUp from '@src/screens/Authentication/SignUp';
import BookingHistory from '@src/screens/UserScreens/BookingHistory/BookingHistory';
import BookingResult from '@src/screens/UserScreens/BookingResult/BookingResult';
import ViewOnMap from '@src/screens/UserScreens/BookingResult/ViewOnMap';
import FavouriteRooms from '@src/screens/UserScreens/FavouriteRooms/FavouriteRooms';
import GGMap from '@src/screens/UserScreens/GGMap';
import HomeListRoom from '@src/screens/UserScreens/Home/ListRoom';
import HotelRoomList from '@src/screens/UserScreens/HotelRoomList/HotelRoomList';
import Notification from '@src/screens/UserScreens/Notification/Notification';
import Payment from '@src/screens/UserScreens/Payment';
import EditProfileUser from '@src/screens/UserScreens/Profile/EditProfile';
import UserProfile from '@src/screens/UserScreens/Profile/Profile';
import ResetPassword from '@src/screens/UserScreens/Profile/ResetPassword';
import ReviewBooking from '@src/screens/UserScreens/ReviewBooking';
import Review from '@src/screens/UserScreens/ReviewHotel/Review';
import UserSearchScreen from '@src/screens/UserScreens/Search/Search';
import UserSearchDetailScreen from '@src/screens/UserScreens/Search/SearchDetail';
import UserSearchResultScreen from '@src/screens/UserScreens/Search/SearchResult';
import { getAllValuesMatchingPattern } from '@src/store/as/as';
import useRoomStore from '@src/store/fav_room';
import useUserStore from '@src/store/user';
import { ROLE } from '@src/utils/constant';
import { useEffect } from 'react';
import DetailBookingHitory from '../screens/UserScreens/BookingHistory/DetailBookingHistory';
import { navigationRef } from './NavigationController';
import { Tabs } from './NavigationTab';
import { StaffNavTabs } from './StaffNavTab';
import Staff from '@src/screens/AgentScreens/components/Staff';
import DetailHotel from '@src/screens/AgentScreens/components/DetailHotel';
import CreateStaff from '@src/screens/AgentScreens/components/Staff/createStaff';
import BillAgent from '@src/screens/AgentScreens/components/BillAgent';
const screenOptions = {
  header: () => null,
  cardOverlayEnabled: true,
  headerShown: false,
};
const Stack = createNativeStackNavigator();
const AuthenticationStack = () => {
  const username = null;
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={screenOptions}>
      {username == null ? (
        <Stack.Group>
          <Stack.Screen name={'SignUp'} component={SignUp} />
          <Stack.Screen name={'AgentSignUp'} component={AgentSignUp} />
          <Stack.Screen name={'SignIn'} component={SignIn} />
        </Stack.Group>
      ) : null}
    </Stack.Navigator>
  );
};
const MainStack = () => {
  const { rooms, setRoom, removeRoom } = useRoomStore();
  useEffect(() => {
    getAllValuesMatchingPattern('room').then(data => {
      setRoom(data);
    });
  }, []);
  return (
    <Stack.Navigator
      initialRouteName={'Tabs'}
      screenOptions={{ presentation: 'card', ...screenOptions }}>
      {/* <Stack.Screen name={'BottomTab'} component={MyTabs} /> */}
      <Stack.Screen
        name={'UserSearchDetailScreen'}
        component={UserSearchDetailScreen}
      />
      <Stack.Screen name={'Tabs'} component={Tabs} />
      <Stack.Screen name={'FavouriteRooms'} component={FavouriteRooms} />
      <Stack.Screen name={'Notification'} component={Notification} />
      <Stack.Screen name={'HomeListRoom'} component={HomeListRoom} />
      <Stack.Screen name={'EditProfileUser'} component={EditProfileUser} />
      <Stack.Screen name={'UserSearchScreen'} component={UserSearchScreen} />
      <Stack.Screen name={'BookingResult'} component={BookingResult} />
      <Stack.Screen name={'ViewOnMap'} component={ViewOnMap} />
      <Stack.Screen name={'Payment'} component={Payment} />
      <Stack.Screen name={'BookingHistory'} component={BookingHistory} />
      <Stack.Screen
        name={'DetailBookingHitory'}
        component={DetailBookingHitory}
      />
      <Stack.Screen name={'GGMap'} component={GGMap} />
      <Stack.Screen name={'UserProfile'} component={UserProfile} />
      <Stack.Screen name={'Review'} component={Review} />
      <Stack.Screen name={'ReviewBooking'} component={ReviewBooking} />
      <Stack.Screen
        name={'UserSearchResultScreen'}
        component={UserSearchResultScreen}
      />
      <Stack.Group screenOptions={screenOptions}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="HotelRoomList" component={HotelRoomList} />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: 'Chỉnh sửa thông tin' }}
        />
        <Stack.Screen
          name="ListHotel"
          component={ListHotel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateHotel"
          component={CreateHotel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateRoom"
          component={CreateRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailRoom"
          component={DetailRoom}
          options={{ title: 'Chi tiết khách sạn' }}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{ title: 'Thông báo' }}
        />

        <Stack.Screen
          name="ListRoom"
          component={ListRoom}
          options={{ title: 'Danh sách phòng' }}
        />

      </Stack.Group>
    </Stack.Navigator>
  );
};
const AgentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{ presentation: 'card', ...screenOptions }}>
      {/* <Stack.Screen name={'BottomTab'} component={MyTabs} /> */}
      <Stack.Group screenOptions={screenOptions}>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: 'Chỉnh sửa thông tin' }}
        />
        <Stack.Screen
          name="ListHotel"
          component={ListHotel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateHotel"
          component={CreateHotel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateRoom"
          component={CreateRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailRoom"
          component={DetailRoom}
          options={{ title: 'Chi tiết khách sạn' }}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{ title: 'Thông báo' }}
        />
        <Stack.Screen
          name="ListRoom"
          component={ListRoom}
          options={{ title: 'Danh sách phòng' }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Staff"
          component={Staff}
        />
        <Stack.Screen
          name="DetailHotel"
          component={DetailHotel}
        />
        <Stack.Screen
          name="CreateStaff"
          component={CreateStaff}
        />
         <Stack.Screen
          name="BillAgent"
          component={BillAgent}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const StaffStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'StaffNavTabs'}
      screenOptions={{ presentation: 'card', ...screenOptions }}>
      {/* <Stack.Screen name={'BottomTab'} component={MyTabs} /> */}
      <Stack.Group screenOptions={screenOptions}>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="StaffNavTabs"
          component={StaffNavTabs}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
const Root = () => {
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);
  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem('accessToken', res.accessToken);
      const resProfile = await authApi.getProfileUser();
      console.log('resProfile', resProfile);
      setUser(resProfile);
    })();
  }, []);
  const getStackByRole = role => {
    switch (role) {
      case ROLE.AGENT:
        return <Stack.Screen name={'AgentStack'} component={AgentStack} />;
      case ROLE.USER:
        return <Stack.Screen name={'MainStack'} component={MainStack} />;
      case ROLE.STAFF:
        return <Stack.Screen name={'StaffStack'} component={StaffStack} />;
    }
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        {user ? (
          getStackByRole(user.role)
        ) : (
          <Stack.Screen
            options={{
              animationTypeForReplace: !user ? 'push' : 'pop',
            }}
            name={'AuthenticationStack'}
            component={AuthenticationStack}
          />
        )}
        <Stack.Screen name={'ResetPassword'} component={ResetPassword} />
        <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
