import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';

import useUserStore from '@src/store/user';
import { CHAT_API_KEY } from 'react-native-dotenv';

//TODO: clean
export const chatUserId = 'user1';
export const chatApiKey = CHAT_API_KEY;
console.log('chatKey', chatApiKey);
export const chatUserName = 'user1';


export const chatClient = StreamChat.getInstance('u5z32drpbw45', {});
export const useChatClient = () => {
  const user = useUserStore(state => state.user);

  const [clientIsReady, setClientIsReady] = useState(false);
  useEffect(() => {
    console.log("user", user);
    if(user){
      const chatUser = {
        id:user.id.toString(),
        name:`${user.lastName} ${user.firstName}`,
        avatar: user.avatar || 'https://picsum.photos/200',
        image: user.avatar || 'https://picsum.photos/200',
      }
      const setupClient = async () => {
        console.log("Chat client connecting")
        try {
          await chatClient.connectUser(chatUser, chatClient.devToken(chatUser.id));
          setClientIsReady(()=>true);
          console.log('chat client connected');
        } catch (error) {
            console.error(
              `An error occurred while connecting the chat user: ${error.message}`,
            );
        }
      };    
  
      // If the chat client has a value in the field `userID`, a user is already connected
      // and we can skip trying to connect the user again.
      if (!chatClient.userID) {
          setupClient();
      }
    }
  }, [user]);
  const createOrJoinChannel = async (channelId, members) => {
    // if (!clientIsReady) {
    //   console.error('Client is not ready yet');
    //   return null;
    // }

    try {
      console.log("Members",members.map(t=>t.id));
      // Check if the channel already exists
      let channel = chatClient.channel('messaging', {
        members:members.map(t=>t.id)
      });

      await channel.watch();

      // If the channel is new, set the members and name
      if (!channel.state.members) {
        await channel.update({
          members: members,
          name: members.length > 1 ? members.find(m => m.id !== user.id).name : 'Chat',
        });
      } else {
        const members = Object.values(channel.state.members);
        const otherMember = members.find(member => member.user.id !== user.id);

        // Update the channel name based on the other member's name if it exists
        if (otherMember && otherMember.user.name) {
          await channel.update({
            name: otherMember.user.name,
          });
        }
      }

      console.log(`Joined or created channel ${channelId} successfully`);
      return channel;
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `An error occurred while creating or joining the channel: ${error.message}`,
        );
      }
      return null;
    }
  };
  return {
    clientIsReady,
    createOrJoinChannel,
  };
};
