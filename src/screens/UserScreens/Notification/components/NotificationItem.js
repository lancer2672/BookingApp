import AntDesign from 'react-native-vector-icons/AntDesign';

import {addItem, getNotiKey} from '@src/store/as/as';
import {generalColor} from '@src/theme/color';
import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export const getTimeDifference = pastDate => {
  const now = new Date();
  const diff = Math.abs(now - new Date(pastDate)); // Khoảng cách thời gian tính bằng milliseconds

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  if (years > 0) return `${years} năm trước`;
  if (months > 0) return `${months} tháng trước`;
  if (weeks > 0) return `${weeks} tuần trước`;
  if (days > 0) return `${days} ngày trước`;
  if (hours > 0) return `${hours} giờ trước`;
  if (minutes > 0) return `${minutes} phút trước`;
  return 'Vừa xong';
};

const NotificationItem = ({notification = {}, onUpdate}) => {
  //   const formattedNames = formatNamesWithAnd(names);
  const [bottomMenuVisible, setBottomMenuVisible] = useState(false);
  const navigateToGuest = async () => {
    await addItem(getNotiKey(notification.createdAt.toString()), {
      ...notification,
      isSeen: true,
    });
    await onUpdate();
  };

  return (
    <TouchableOpacity
      onPress={navigateToGuest}
      onLongPress={() => {
        setBottomMenuVisible(true);
      }}
      style={{
        backgroundColor: notification.isSeen ? 'white' : generalColor.primary,
        padding: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
      isSeen={notification.isSeen}>
      <Image
        style={{width: 50, height: 50, borderRadius: 25}}
        source={require('../../../../assets/imgs/noti.jpg')}></Image>

      <View style={{flex: 1}}>
        <ContentContainer>
          <NotificationContent
            style={{
              color: notification.isSeen ? generalColor.primary : 'white',
            }}>
            {notification.title}
          </NotificationContent>
          <CreatedAt
            style={{
              color: notification.isSeen ? generalColor.primary : 'white',
            }}>
            {getTimeDifference(notification.createdAt)}
          </CreatedAt>
        </ContentContainer>
        <NotificationContent
          style={{
            color: notification.isSeen ? generalColor.primary : 'white',

            marginLeft: 12,
          }}>
          {notification.description}
        </NotificationContent>
      </View>
      <TouchableOpacity
        onPress={() => {
          setBottomMenuVisible(true);
        }}
        style={{
          paddingHorizontal: 4,
        }}>
        <AntDesign
          name="close"
          size={24}
          color={notification.isSeen ? generalColor.primary : 'white'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const NotificationContent = styled(Text)`
  font-size: 15px;
  color: black;
`;

const CreatedAt = styled(Text)`
  font-size: 14px;
  margin-left: 5px;
  color: black;
  opacity: 0.8;
`;

const ContentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 12px;
  margin-right: 5px;
`;

export default NotificationItem;
