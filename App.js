import AsyncStorage from '@react-native-async-storage/async-storage';
import Root from '@src/navigation/Root';
import OnboardingScreen from '@src/screens/UserScreens/Onboarding';
import ThemeProviderComponent from '@src/theme/context';
import React from 'react';
import {SafeAreaView} from 'react-native';
import FlashMessage from 'react-native-flash-message';
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

function App() {
  const [isFirstTime, setIsFirstTime] = React.useState(null);
  React.useEffect(() => {
    checkFirstTimeUser().then(setIsFirstTime);
  }, []);
  if (isFirstTime) {
    return <OnboardingScreen />;
  }
  return (
    <ThemeProviderComponent>
      <SafeAreaView style={{flex: 1}}>
        <Root></Root>
        <FlashMessage position="top" />
      </SafeAreaView>
    </ThemeProviderComponent>
  );
}

export default App;
