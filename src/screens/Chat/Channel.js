import {useAppContext} from '@src/context/appContext';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {StyleSheet} from 'react-native';
import {Channel, MessageInput, MessageList} from 'stream-chat-react-native';
const ChannelScreen = () => {
  const {channel} = useAppContext();
  console.log('CHANNEL', channel);
  if (!channel) return <></>;
  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
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
