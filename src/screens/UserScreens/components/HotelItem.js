import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {PinSVG} from '@src/assets/icons';
import {useAppContext} from '@src/context/appContext';
import {chatClient, useChatClient} from '@src/hooks/useChatClient';
import {agentMock} from '@src/mock/mock';
import {navigate} from '@src/navigation/NavigationController';
import {addItem, getKey, removeItem} from '@src/store/as/as';
import useRoomStore from '@src/store/fav_room';
import {rowCenter, shadowBox} from '@src/theme/style';
import {SCREEN_WIDTH} from '@src/utils/constant';
import {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HotelItem = ({hotel, room, onPress}) => {
  const {rooms, setRoom, removeRoom} = useRoomStore();
  const {createOrJoinChannel} = useChatClient();
  const {setChannel} = useAppContext();

  const [isFav, setisFav] = useState(false);
  const toggleFavourite = async () => {
    try {
      if (isFav) {
        console.log('isFav', isFav, hotel);
        await removeItem(getKey(hotel.id, room.id));
        setRoom(rooms.filter(t => t.room.id != room.id));
        setisFav(() => false);
      } else {
        await addItem(getKey(hotel.id, room.id), {room, hotel});
        setRoom([...rooms, {room, hotel}]);
        setisFav(() => true);
      }
    } catch {}
  };
  useEffect(() => {
    if (rooms.find(t => t.room.id == room.id)) {
      setisFav(true);
    } else {
      setisFav(false);
    }
  }, [rooms]);
  const handleChat = async () => {
    try {
      console.log('chatClient.user', chatClient.user);
      const agent = agentMock;
      const ch = await createOrJoinChannel(Date.now().toString(), [
        chatClient.user,
        {
          id: 'testagent3',
          name: `${agent.lastName} ${agent.firstName}`,
          avatar: agent.avatar,
        },
      ]);
      setChannel(ch);

      navigate('ChannelScreen');
    } catch (er) {
      console.log('Chat error', er);
    }
  };
  return (
    <Pressable
      onPress={onPress}
      style={[
        shadowBox,
        {
          marginTop: 12,
          elevation: 2,
          backgroundColor: generalColor.other.lightgray,
          paddingBottom: 8,
        },
      ]}>
      <View
        style={{
          marginBottom: 8,
        }}>
        <Carousel
          loop
          width={SCREEN_WIDTH}
          height={200}
          autoPlay={false}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 1,
          }}
          pagingEnabled={false}
          data={hotel.images}
          scrollAnimationDuration={500}
          // onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({item, index}) => {
            return (
              <Image
                resizeMode="cover"
                source={{uri: item}}
                style={styles.image}></Image>
            );
          }}
        />
      </View>

      <TouchableOpacity
        onPress={toggleFavourite}
        style={{
          position: 'absolute',
          width: 40,
          height: 40,
          borderRadius: 20,

          backgroundColor: generalColor.primary,
          top: 12,
          alignItems: 'center',
          justifyContent: 'center',
          right: 12,
        }}>
        <AntDesign
          name={isFav ? 'heart' : 'hearto'}
          size={20}
          color={'white'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleChat}
        style={{
          position: 'absolute',
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: generalColor.primary,
          top: 60,
          alignItems: 'center',
          justifyContent: 'center',
          right: 12,
        }}>
        <Ionicons
          name={'chatbubble-ellipses-outline'}
          size={20}
          color={'white'}
        />
      </TouchableOpacity>
      <View style={styles.itemContainer}>
        <View style={[rowCenter, {marginBottom: 4, marginLeft: 4}]}>
          <Text
            style={{
              marginRight: 8,
              color: generalColor.primary,
              ...textStyle.h[3],
            }}>
            {hotel.name}
          </Text>
        </View>
        <View style={rowCenter}>
          <PinSVG height={18} color={generalColor.primary}></PinSVG>

          <Text
            style={{color: generalColor.primary, ...textStyle.content.small}}>
            {hotel.address}
          </Text>
        </View>
        <View style={[rowCenter, {marginBottom: 4, marginLeft: 4}]}>
          <AntDesign
            name="star"
            color={generalColor.other.star}
            size={18}></AntDesign>
          <Text style={{color: generalColor.primary}}> ( 3,3) </Text>
          <Text
            style={{
              marginRight: 8,
              color: generalColor.primary,
              ...textStyle.content.medium,
            }}>
            120 lượt đánh giá
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
        }}></View>
    </Pressable>
  );
};

export default HotelItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  itemContainer: {
    paddingHorizontal: 12,
    paddingTop: 2,
  },
});
