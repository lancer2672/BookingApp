import AgentDashboard from '@src/screens/AgentScreens/Dashboard';
import ThemeProviderComponent from '@src/theme/context';
import {SafeAreaView} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import EditProfile from '@src/screens/AgentScreens/components/EditProfile';
import ListHotel from '@src/screens/AgentScreens/components/ListHotel';
import Profile from '@src/screens/AgentScreens/components/Profile';

function App() {
  return (
    <ThemeProviderComponent>
      <SafeAreaView style={{flex: 1}}>
        <AgentDashboard></AgentDashboard>
        <FlashMessage position="top" />
      </SafeAreaView>
    </ThemeProviderComponent>
  );
}

export default App;
