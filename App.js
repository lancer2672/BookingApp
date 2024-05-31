import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppProvider} from '@src/context/appContext';
import useNotification from '@src/hooks/useNotification';
import Root from '@src/navigation/Root';
import {hasAndroidPermission} from '@src/permission';
import OnboardingScreen from '@src/screens/UserScreens/Onboarding';
import ThemeProviderComponent from '@src/theme/context';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {CHAT_API_KEY} from 'react-native-dotenv';
import FlashMessage from 'react-native-flash-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StreamChat} from 'stream-chat';
import {Chat, OverlayProvider} from 'stream-chat-react-native';

const chatTheme = {
  channelPreview: {
    container: {
      backgroundColor: 'transparent',
    },
  },
};

const checkFirstTimeUser = async () => {
  try {
    const isFirstTime = await AsyncStorage.getItem('@first_time');
    if (isFirstTime === null) {
      await AsyncStorage.setItem('@first_time', 'done');
      return true;
    }
    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
};
const chatClient = StreamChat.getInstance(CHAT_API_KEY);
function App() {
  const [isFirstTime, setIsFirstTime] = React.useState(null);
  const {enableNotifications} = useNotification();

  React.useEffect(() => {
    checkFirstTimeUser().then(setIsFirstTime);
    (async () => {
      if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
        return;
      }
    })();
    const unsubscribeNotification = enableNotifications();
    return () => {
      unsubscribeNotification();
    };
  }, []);
  if (isFirstTime) {
    return (
      <OnboardingScreen
        onDone={async () => {
          setIsFirstTime(false);
          await AsyncStorage.removeItem('@first_time');
        }}
      />
    );
  }
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppProvider>
        <OverlayProvider value={{theme: chatTheme}}>
          <Chat client={chatClient}>
            <ThemeProviderComponent>
              <SafeAreaView style={{flex: 1}}>
                <Root></Root>
                <FlashMessage position="top" />
              </SafeAreaView>
            </ThemeProviderComponent>
          </Chat>
        </OverlayProvider>
      </AppProvider>
    </GestureHandlerRootView>
  );
}

export default App;
