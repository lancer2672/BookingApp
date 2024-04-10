import AgentDashboard from '@src/screens/AgentScreens/Dashboard';
import ThemeProviderComponent from '@src/theme/context';
import {SafeAreaView} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import HomeScreen from '@src/screens/HomeScreen/HomeScreen';

function App() {
  return (
    <ThemeProviderComponent>
      <SafeAreaView style={{flex: 1}}>
        {/* <AgentDashboard></AgentDashboard> */}
          <HomeScreen/>
        <FlashMessage position="top" />
      </SafeAreaView>
    </ThemeProviderComponent>
  );
}

export default App;
