import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GGMap from '@src/components/GGMap';
import ListRoom from '@src/screens/AgentScreens/components/ListRoom';
import CreateHotel from '@src/screens/AgentScreens/components/CreateHotel';
import DetailRoom from '@src/screens/AgentScreens/components/DetailRoom';
import EditProfile from '@src/screens/AgentScreens/components/EditProfile';
import ListHotel from '@src/screens/AgentScreens/components/ListHotel';
import Notice from '@src/screens/AgentScreens/components/Notice';
import CreateRoom from '@src/screens/AgentScreens/components/CreateRoom';
import Profile from '@src/screens/AgentScreens/components/Profile';
import SignIn from '@src/screens/Authentication/SignIn';
import SignUp from '@src/screens/Authentication/SignUp';
import Payment from '@src/screens/UserScreens/Payment';
import ReviewBooking from '@src/screens/UserScreens/ReviewBooking';
import Review from '@src/screens/UserScreens/ReviewHotel/Review';
import UserSearchScreen from '@src/screens/UserScreens/Search/Search';
import UserSearchDetailScreen from '@src/screens/UserScreens/Search/SearchDetail';
import UserSearchResultScreen from '@src/screens/UserScreens/Search/SearchResult';
import {navigationRef} from './NavigationController';

const screenOptions = {
  header: () => null,
  cardOverlayEnabled: true,
  headerShown: false,
};
const Stack = createNativeStackNavigator();
const AuthenticationStack = () => {
  const username = null;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {username == null ? (
        <Stack.Group>
          <Stack.Screen name={'SignUp'} component={SignUp} />
          <Stack.Screen name={'SignIn'} component={SignIn} />
        </Stack.Group>
      ) : null}
    </Stack.Navigator>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ListHotel'}
      screenOptions={{presentation: 'card', ...screenOptions}}>
      {/* <Stack.Screen name={'BottomTab'} component={MyTabs} /> */}
      <Stack.Screen
        name={'UserSearchDetailScreen'}
        component={UserSearchDetailScreen}
      />
      <Stack.Screen name={'UserSearchScreen'} component={UserSearchScreen} />
      <Stack.Screen name={'Payment'} component={Payment} />
      <Stack.Screen name={'GGMap'} component={GGMap} />
      <Stack.Screen name={'Review'} component={Review} />
      <Stack.Screen name={'ReviewBooking'} component={ReviewBooking} />
      <Stack.Screen
        name={'UserSearchResultScreen'}
        component={UserSearchResultScreen}
      />
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Root = () => {
  const isLogin = false;

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="MainStack">
        <Stack.Screen
          options={{
            animationTypeForReplace: !isLogin ? 'push' : 'pop',
          }}
          name={'AuthenticationStack'}
          component={AuthenticationStack}
        />
        <Stack.Screen name={'MainStack'} component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
