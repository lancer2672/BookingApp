import Feather from 'react-native-vector-icons/Feather';

import {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {generalColor} from '@src/theme/color';

const NotificationItem = ({notification = {}}) => {
  //   const formattedNames = formatNamesWithAnd(names);
  const [bottomMenuVisible, setBottomMenuVisible] = useState(false);
  const navigateToGuest = () => {};

  return (
    <TouchableOpacity
      onPress={navigateToGuest}
      onLongPress={() => {
        setBottomMenuVisible(true);
      }}
      style={{
        backgroundColor: notification.isSeen ? generalColor.primary : 'gray',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
      isSeen={notification.isSeen}>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: 'https://picsum.photos/200'}}></Image>

      <ContentContainer>
        <NotificationContent>notification.description</NotificationContent>
        <CreatedAt>notification.createdAt</CreatedAt>
      </ContentContainer>
      <TouchableOpacity
        onPress={() => {
          setBottomMenuVisible(true);
        }}
        style={{
          paddingHorizontal: 4,
        }}>
        <Feather name="more-horizontal" size={24} color={'black'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const NotificationContent = styled(Text)`
  font-size: 15px;
  color: black;
`;

const CreatedAt = styled(Text)`
  font-size: 15px;
  color: black;
  opacity: 0.5;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export default NotificationItem;
