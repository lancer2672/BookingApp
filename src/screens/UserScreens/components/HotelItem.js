import ButtonComponent from '@src/components/Button';
import { generalColor } from '@src/theme/color';
import textStyle from '@src/theme/text';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useAppContext } from '@src/context/appContext';
import { chatClient, useChatClient } from '@src/hooks/useChatClient';
import { agentMock } from '@src/mock/mock';
import { navigate } from '@src/navigation/NavigationController';
import { addItem, getKey, removeItem } from '@src/store/as/as';
import useRoomStore from '@src/store/fav_room';
import { useEffect, useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HotelItem = ({hotel, room, onPress}) => {
  const {rooms, setRoom, removeRoom} = useRoomStore();
  const {createOrJoinChannel} = useChatClient()
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
  const handleChat= async()=>{
    try{
      console.log("chatClient.user",chatClient.user)
      const agent = agentMock
      const ch =  await createOrJoinChannel(Date.now().toString(),[
        chatClient.user,{
          id: "testagent3",
          name:`${agent.lastName} ${agent.firstName}`,
          avatar: agent.avatar,
        }
      ])
      setChannel(ch)
      
      navigate("ChannelScreen")
    }catch (er){
      console.log("Chat error",er)
    }
  }
  return (
    <View style={{marginTop: 12}}>
      <Image
        resizeMode="cover"
        source={{uri: hotel.avatar}}
        style={styles.image}></Image>
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
        <Text style={{color: generalColor.primary, ...textStyle.h[3]}}>
          {hotel.name}
        </Text>
        <Text style={{color: generalColor.primary, ...textStyle.content.small}}>
          {hotel.description}
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontWeight: '500',
            color: generalColor.black[100],
            ...textStyle.content.large,
            marginRight: 12,
          }}>
          {room.pricePerNight}/ 1 đêm
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <Ionicons
            name="bed-outline"
            size={24}
            color={generalColor.black[100]}></Ionicons>
          <Text
            style={{
              color: generalColor.black[100],
              ...textStyle.content.medium,
              marginRight: 12,
            }}>
            {room.bed} Giường
          </Text>

          <Ionicons
            name="person-outline"
            size={24}
            color={generalColor.black[100]}></Ionicons>
          <Text
            style={{
              color: generalColor.black[100],
              ...textStyle.content.medium,
            }}>
            {room.numOfPeople} khách
          </Text>
        </View>
        <ButtonComponent
          onPress={onPress}
          style={{width: 100, marginLeft: 'auto'}}
          txtStyle={textStyle.content.medium}
          text={'Đặt phòng'}></ButtonComponent>
      </View>
    </View>
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
    paddingTop: 12,
  },
});
