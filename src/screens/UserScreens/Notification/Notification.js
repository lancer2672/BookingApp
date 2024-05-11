import AntDesign from 'react-native-vector-icons/AntDesign';

import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import NotificationItem from './components/NotificationItem';

const Notification = ({navigation}) => {
  const notifications = [{}];
  console.log('notification show', notifications);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 12,
          borderBottomWidth: 2,
          borderBottomColor: generalColor.primary,
        }}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}>
          <AntDesign name="arrowleft" size={24} color={generalColor.primary} />
        </TouchableOpacity>
        <Heading>Thông báo</Heading>
      </View>
      <FlatList
        style={{flex: 1}}
        data={notifications}
        keyExtractor={(item, index) => item._id}
        renderItem={({item}) => <NotificationItem notification={item} />}
      />
    </View>
  );
};
const Heading = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  color: black;
`;

export default Notification;
