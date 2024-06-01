import {useAppContext} from '@src/context/appContext';
import {chatClient} from '@src/hooks/useChatClient';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Channel, MessageInput, MessageList} from 'stream-chat-react-native';

const ChannelScreen = () => {
  const {channel} = useAppContext();
  const [userStatus, setUserStatus] = useState('offline');

  useEffect(() => {
    const getUserStatus = async () => {
      if (channel) {
        const members = Object.values(channel.state.members);
        const otherMember = members.find(
          member => member.user.id !== chatClient.userID,
        );
        if (otherMember) {
          setUserStatus(otherMember.user.online ? 'online' : 'offline');
        }
      }
    };

    getUserStatus();
  }, [channel]);

  if (!channel) return <></>;
  return (
    <Channel
      giphyEnabled={false}
      InputGiphySearch={() => <></>}
      channel={channel}>
      <View
        style={{
          backgroundColor: generalColor.primary,
          paddingHorizontal: 8,
          paddingBottom: 14,
          paddingTop: 14,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <AntDesign name="left" color={'white'} size={20}></AntDesign>
        <Avatar.Image
          style={{marginHorizontal: 12}}
          size={46}
          source={{uri: 'https://picsum.photos/200'}}
        />
        <View>
          <Text style={[textStyle.h[4], {color: 'white'}]}>Hotel Name</Text>
          <Text
            style={{
              color:
                userStatus == 'online'
                  ? generalColor.status.checkedOut
                  : '#BBB',
            }}>
            {userStatus == 'online' ? 'Đang hoạt động' : 'Ngoại tuyến'}
          </Text>
        </View>
      </View>
      <MessageList />
      <MessageInput giphyActive={false} hasFilePicker={false}></MessageInput>
    </Channel>
  );
};

export default ChannelScreen;

const styles = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    color: generalColor.primary,
    ...textStyle.h[2],
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
    fontFamily: 'serif',
  },
});
