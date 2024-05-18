import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import SignIn from '@src/screens/Authentication/SignIn';
import SignUp from '@src/screens/Authentication/SignUp';
import BookingHistory from '@src/screens/UserScreens/BookingHistory/BookingHistory';
import GGMap from '@src/screens/UserScreens/GGMap';
import HotelRoomList from '@src/screens/UserScreens/HotelRoomList/HotelRoomList';
import Notification from '@src/screens/UserScreens/Notification/Notification';
import Payment from '@src/screens/UserScreens/Payment';
import EditProfileUser from '@src/screens/UserScreens/Profile/EditProfile';
import UserProfile from '@src/screens/UserScreens/Profile/Profile';
import ReviewBooking from '@src/screens/UserScreens/ReviewBooking';
import Review from '@src/screens/UserScreens/ReviewHotel/Review';
import UserSearchScreen from '@src/screens/UserScreens/Search/Search';
import UserSearchDetailScreen from '@src/screens/UserScreens/Search/SearchDetail';
import UserSearchResultScreen from '@src/screens/UserScreens/Search/SearchResult';
import useUserStore from '@src/store/user';
import DetailBookingHitory from '../screens/UserScreens/BookingHistory/DetailBookingHistory';
import {navigationRef} from './NavigationController';
import {Tabs} from './NavigationTab';

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
  return (
    <Stack.Navigator
      initialRouteName={'Tabs'}
      screenOptions={{presentation: 'card', ...screenOptions}}>
      {/* <Stack.Screen name={'BottomTab'} component={MyTabs} /> */}
      <Stack.Screen
        name={'UserSearchDetailScreen'}
        component={UserSearchDetailScreen}
      />
      <Stack.Screen name={'Tabs'} component={Tabs} />
      <Stack.Screen name={'Notification'} component={Notification} />
      <Stack.Screen name={'EditProfileUser'} component={EditProfileUser} />
      <Stack.Screen name={'UserSearchScreen'} component={UserSearchScreen} />
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
          options={{title: 'Chỉnh sửa thông tin'}}
        />
        <Stack.Screen
          name="ListHotel"
          component={ListHotel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateHotel"
          component={CreateHotel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateRoom"
          component={CreateRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailRoom"
          component={DetailRoom}
          options={{title: 'Chi tiết khách sạn'}}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{title: 'Thông báo'}}
        />

        <Stack.Screen
          name="ListRoom"
          component={ListRoom}
          options={{title: 'Danh sách phòng'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
const AgentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{presentation: 'card', ...screenOptions}}>
      {/* <Stack.Screen name={'BottomTab'} component={MyTabs} /> */}
      <Stack.Group screenOptions={screenOptions}>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{title: 'Chỉnh sửa thông tin'}}
        />
        <Stack.Screen
          name="ListHotel"
          component={ListHotel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateHotel"
          component={CreateHotel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateRoom"
          component={CreateRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailRoom"
          component={DetailRoom}
          options={{title: 'Chi tiết khách sạn'}}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{title: 'Thông báo'}}
        />
        <Stack.Screen
          name="ListRoom"
          component={ListRoom}
          options={{title: 'Danh sách phòng'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Root = () => {
  const isLogin = false;
  const user = useUserStore(state => state.user);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        {user ? (
          user.email == 'admin@gmail.com' ? (
            <Stack.Screen name={'AgentStack'} component={AgentStack} />
          ) : (
            <Stack.Screen name={'MainStack'} component={MainStack} />
          )
        ) : (
          <Stack.Screen
            options={{
              animationTypeForReplace: !isLogin ? 'push' : 'pop',
            }}
            name={'AuthenticationStack'}
            component={AuthenticationStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
