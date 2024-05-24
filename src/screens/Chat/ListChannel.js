import {useAppContext} from '@src/context/appContext';
import {chatUserId} from '@src/hooks/useChatClient';
import {goBack, navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ChannelList} from 'stream-chat-react-native';

const filters = {
  members: {
    $in: [chatUserId],
  },
};

const sort = {
  last_message_at: -1,
};

const ListChannel = () => {
  const {setChannel} = useAppContext();

  const EmptyStateIndicator = () => (
    <View style={styles.emptyStateContainer}>
      <Text style={styles.emptyStateText}>
        Không có kênh nào được tìm thấy.
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 12, marginTop: 12, ...styles.rowCenter}}>
        <AntDesign
          name="left"
          size={24}
          color={generalColor.other.gray}
          onPress={goBack}
        />
        <Text style={styles.title}>Đoạn Chat</Text>
      </View>
      <View style={{flex: 1}}>
        <ChannelList
          filters={filters}
          sort={sort}
          onSelect={channel => {
            setChannel(channel);
            navigate('ChannelScreen');
          }}
          EmptyStateIndicator={EmptyStateIndicator}
        />
      </View>
    </View>
  );
};

export default ListChannel;

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
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: generalColor.other.gray,
  },
});
