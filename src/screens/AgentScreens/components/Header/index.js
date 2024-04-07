import Header from '@src/components/Header/Header';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Avatar, IconButton} from 'react-native-paper';
import SideMenu from '../SideMenu';

const AgentHeader = () => {
  const [visible, setVisible] = useState(false);
  const handleOpenSideMenu = () => {
    setVisible(true);
  };
  const left = (
    <IconButton icon="menu" size={24} onPress={handleOpenSideMenu} />
  );
  const center = (
    <View style={styles.center}>
      <Avatar.Image size={48} source={{uri: 'https://picsum.photos/200'}} />
      <Text style={styles.name}>Tên người dùng</Text>
    </View>
  );
  const right = (
    <IconButton
      icon="bell"
      size={24}
      onPress={() => console.log('Bell pressed')}
    />
  );

  return (
    <>
      <Header left={left} center={center} right={right} />
      <SideMenu isVisible={visible} onClose={() => setVisible(false)} />
      <TextInput></TextInput>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  name: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default AgentHeader;
