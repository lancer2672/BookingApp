import { useAppContext } from '@src/context/appContext';
import { chatClient } from '@src/hooks/useChatClient';
import useUserStore from '@src/store/user';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Channel, MessageInput, MessageList } from 'stream-chat-react-native';

const ChannelScreen = () => {
  const {channel} = useAppContext();
  const [userStatus, setUserStatus] = useState('offline');
  const [member,setMember] =useState({})
  const user = useUserStore(state => state.user);

  // const { channel:chatChannel } = useChannelStateContext();
  useEffect(()=>{
    if(channel){
      console.log(channel.state);
        const mem =  Object.values(channel.state.members).map((u) => ({
          id: u.user_id,
          avatar: u.user.avatar,
          name: u.user.name,
          online:u.user.online,
        })).find(t=>t.id !=user.id)
        console.log("mem",mem);
        setMember(mem);
    }
  },[channel])
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
          source={member.avatar?{uri: member.avatar}:require('../../assets/imgs/DefaultAvatar.png')}
        />
        <View>
          <Text style={[textStyle.h[4], {color: 'white'}]}>{member.name}</Text>
          <View style={rowCenter}>

          <View style={{width:8,height:8,borderRadius:8, marginRight:8,backgroundColor:userStatus == 'online' ? generalColor.status.notCheckedOut : "gray"}}></View>
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
      </View>
      <MessageList 
        
      />
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
