import {useEffect, useState} from 'react';
import {StreamChat} from 'stream-chat';

import {CHAT_API_KEY} from 'react-native-dotenv';

//TODO: clean
export const chatUserId = 'curly-frog-7';
export const chatApiKey = CHAT_API_KEY;
console.log('chataiKey', chatApiKey);
export const chatUserName = 'curly-frog-7';
const user = {
  id: chatUserId,
  name: chatUserName,
};

export const chatClient = StreamChat.getInstance('u5z32drpbw45', {});
export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false);
  useEffect(() => {
    const setupClient = async () => {
      try {
        await chatClient.connectUser(user, chatClient.devToken(user.id));
        setClientIsReady(true);
        console.log('connected');
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            `An error occurred while connecting the user: ${error.message}`,
          );
        }
      }
    };

    // If the chat client has a value in the field `userID`, a user is already connected
    // and we can skip trying to connect the user again.
    if (!chatClient.userID) {
      setupClient();
    }
  }, []);
  const createOrJoinChannel = async (channelId, members) => {
    if (!clientIsReady) {
      console.error('Client is not ready yet');
      return null;
    }

    try {
      const members = Object.values(channel.state.members);
      const otherMember = members.find(member => member.user.id !== userId);

      const channel = chatClient.channel('messaging', channelId, {
        name: otherMember.user.name ? otherMember.user.name : 'Chat',
        members: members,
      });

      await channel.watch();
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
