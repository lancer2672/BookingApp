import {NavigationContainer} from '@react-navigation/native';
import SignUpScreen from '@src/screens/Authentication/SignUp/SignUp';
import {navigationRef} from './NavigationController';

const screenOptions = {
  header: () => null,
  cardOverlayEnabled: true,
  headerShown: false,
};

const AuthenticationStack = () => {
  const username = null;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {username == null ? (
        <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      ) : null}
      {/* <Stack.Screen
        name={'SignIn'}
        // component={}
      /> */}
    </Stack.Navigator>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTab'}
      screenOptions={{presentation: 'card', ...screenOptions}}>
      <Stack.Screen name={'BottomTab'} component={MyTabs} />
      <Stack.Group screenOptions={screenOptions}>
        {/* <Stack.Screen
          name={'Other'}
          //   component={}
        /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Root = () => {
  const isLogin = false;

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="AuthenticationStack">
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
