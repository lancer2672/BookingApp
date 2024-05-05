import {navigate} from '@src/navigation/NavigationController';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import SideMenu from '../SideMenu';
import { generalColor } from '@src/theme/color';
const AgentHeader = ({active, detail}) => {
  const [visible, setVisible] = useState(false);
  const handleOpenSideMenu = () => {
    setVisible(true);
  };
  const navigateToNotice = () => {
    navigate('Notice');
  };
  return (
    <View style={styles.container}>
      <IconButton
        icon="menu"
        size={24}
        onPress={handleOpenSideMenu}
        iconColor="white"
      />
      <View style={styles.center}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          {active}
        </Text>
        {/* <Text
          style={{
            fontSize: 13,
            textAlign: 'center',
            flexWrap: 'wrap-reverse',
            width: '80%',
            color: 'white',
          }}>
          {detail}
        </Text> */}
      </View>
      <IconButton
        icon="bell"
        size={24}
        onPress={navigateToNotice}
        iconColor="white"
      />
      <SideMenu isVisible={visible} onClose={() => setVisible(false)} />
      <TextInput></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: generalColor.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    height: 70,
   
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    width: '70%',
    textAlign: 'center',
  },
});

export default AgentHeader;
