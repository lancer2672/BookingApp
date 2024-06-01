import { useAppContext } from '@src/context/appContext';
import { goBack, navigate } from '@src/navigation/NavigationController';
import useUserStore from '@src/store/user';
import { generalColor } from '@src/theme/color';
import textStyle from '@src/theme/text';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Avatar, ChannelList } from 'stream-chat-react-native';

const sort = {
  last_message_at: -1,
};

const ListChannel = () => {
  const { setChannel } = useAppContext();
  const user = useUserStore(state => state.user);
  const filters = {
    members: {
      $in: [user.id],
    },
  };

  const EmptyStateIndicator = () => (
    <View style={styles.emptyStateContainer}>
      <Text style={styles.emptyStateText}>Bạn chưa có tin nhắn nào.</Text>
    </View>
  );

  const LastMessage = ({ lastMessage }) => {
    if (!lastMessage) {
      return null;
    }

    return (
      <View style={styles.lastMessageContainer}>
        <Text style={styles.lastMessageText}>{lastMessage.previews.reduce((ac, t) => ac + t.text, '')}</Text>
        <Text style={styles.lastMessageTime}>{lastMessage.created_at}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 12,
          paddingTop: 24,
          backgroundColor: generalColor.primary,
          ...styles.rowCenter,
        }}>
        <AntDesign name="left" size={24} color={'white'} onPress={goBack} />
        <Text style={styles.title}>Đoạn Chat</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ChannelList
          style={{ backgroundColor: 'white' }}
          filters={filters}
          sort={sort}
          watchers={true}
          onSelect={channel => {
            setChannel(channel);
            navigate('ChannelScreen');
          }}
          EmptyStateIndicator={EmptyStateIndicator}
          Preview={({ channel, latestMessagePreview }) => (
            <TouchableOpacity onPress={() => {
              setChannel(channel);
              navigate('ChannelScreen');
            }} style={styles.channelItem}>
              {channel.state.members &&
                Object.values(channel.state.members).filter(t => t.user.id !== user.id).map(member => (
                  <View style={styles.memberItem} key={member.user.id}>
                    <Avatar
                      image={member.user.avatar}
                      name={member.user.name}
                      size={48}
                    />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.memberName}>{member.user.name}</Text>
                      <LastMessage lastMessage={latestMessagePreview} />
                    </View>
                    {channel.state.unreadCount > 0 && (
                      <View style={styles.unreadCountContainer}>
                        <Text style={styles.unreadCount}>{channel.state.unreadCount}</Text>
                      </View>
                    )}
                  </View>
                ))}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    color: 'white',
    ...textStyle.h[2],
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
    fontFamily: 'serif',
  },
  channelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  memberName: {
    marginLeft: 8,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '500',
    color: generalColor.primary,
  },
  lastMessageContainer: {
    flex: 1,
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lastMessageText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  lastMessageTime: {
    fontSize: 14,
    color: '#888',
  },
  unreadCountContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  unreadCount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ListChannel;
