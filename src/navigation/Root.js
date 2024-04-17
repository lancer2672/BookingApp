import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GGMap from '@src/components/GGMap';
import SignUpScreen from '@src/screens/Authentication/SignUp/SignUp';
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
        <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      ) : null}
    </Stack.Navigator>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'UserSearchScreen'}
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
      <Stack.Group screenOptions={screenOptions}></Stack.Group>
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
