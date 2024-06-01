import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';

import { hotelsMock } from '@src/mock/mock';
import { CHAT_API_KEY } from 'react-native-dotenv';

export const chatApiKey = CHAT_API_KEY;
console.log('chatKey', chatApiKey);

const chatClientMap = new Map();

export const useChatClientAgent = () => {
  const hotels = hotelsMock

  const [clientsReady, setClientsReady] = useState(new Map());

  useEffect(() => {
    const setupClients = async () => {
      for (const hotel of hotels) {
        const chatClient = StreamChat.getInstance(chatApiKey);

        const chatHotel = {
          id: hotel.id,
          name: hotel.name,
          avatar: hotel.avatar || 'https://picsum.photos/200',
        };

        try {
          await chatClient.connectUser(chatHotel, chatClient.devToken(chatHotel.id));
          chatClientMap.set(hotel.id, chatClient);
          setClientsReady(prevState => new Map(prevState).set(hotel.id, true));
          console.log(`Connected hotel ${hotel.id}`);
        } catch (error) {
          if (error instanceof Error) {
            console.error(`An error occurred while connecting hotel ${hotel.id}: ${error.message}`);
          }
        }
      }
    };

    setupClients();

    return () => {
      for (const client of chatClientMap.values()) {
        client.disconnectUser();
      }
    };
  }, [hotels]);

  const createOrJoinChannel = async (channelId, members) => {
    if (!hotels || !Array.isArray(hotels) || hotels.length === 0) {
      console.error('Hotel list is empty or not valid');
      return null;
    }

    const channels = [];
    for (const hotel of hotels) {
      const chatClient = chatClientMap.get(hotel.id);
      if (!chatClient) {
        console.error(`Chat client for hotel ${hotel.id} is not available or not ready`);
        continue;
      }

      try {
        let channel = chatClient.channel('messaging', channelId, {
          members: members.map(t => t.id),
        });

        await channel.watch();

        if (!channel.state.members) {
          await channel.update({
            members: members,
            name: members.length > 1 ? members.find(m => m.id !== hotel.id).name : 'Chat',
          });
        } else {
          const existingMembers = Object.values(channel.state.members);
          const otherMember = existingMembers.find(member => member.user.id !== hotel.id);

          if (otherMember && otherMember.user.name) {
            await channel.update({
              name: otherMember.user.name,
            });
          }
        }

        console.log(`Joined or created channel ${channelId} for hotel ${hotel.id} successfully`);
        channels.push(channel);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`An error occurred while creating or joining the channel for hotel ${hotel.id}: ${error.message}`);
        }
        // Continue to the next hotel even if there is an error
      }
    }

    return channels;
  };

  return {
    clientsReady,
    createOrJoinChannel,
  };
};
