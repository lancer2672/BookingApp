import ButtonComponent from '@src/components/Button';
import { generalColor } from '@src/theme/color';
import textStyle from '@src/theme/text';

import { useAppContext } from '@src/context/appContext';
import { chatClient, useChatClient } from '@src/hooks/useChatClient';
import { agentMock } from '@src/mock/mock';
import { navigate } from '@src/navigation/NavigationController';
import { formatCurrency } from '@src/utils/textFormat';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import { expandAnimation } from '@src/animation';
import { rowCenter } from '@src/theme/style';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextWithIcon } from '../HotelRoomList/HotelRoomList';
const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_COUNT = 2;
const RoomItem = ({room, isSelected, onPress}) => {
  const {createOrJoinChannel} = useChatClient();
  const {setChannel} = useAppContext();
  const [numsItem, setNumsItem] = useState(ITEM_COUNT);
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
  console.log('amenities', room.name, room.amenities);
  return (
    <Pressable onPress={onPress} style={{marginTop: 12}}>
      <View>
        <Carousel
          loop
          width={SCREEN_WIDTH}
          height={180}
          autoPlay={false}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 1,
          }}
          pagingEnabled={false}
          data={room.images}
          scrollAnimationDuration={500}
          // onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({item, index}) => {
            return (
              <View>
                <Image
                  resizeMode="cover"
                  source={{uri: item}}
                  style={{
                    width: '100%',
                    height: 180,
                  }}></Image>
              </View>
            );
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 12,
            flexDirection: 'row',

            justifyContent: 'space-between', // Added for centering
            alignItems: 'center',
            left: 12,
            right: 12,
            top: 0,
            bottom: 0,
          }}>
          <AntDesign
            name="left"
            color={generalColor.black[50]}
            size={28}></AntDesign>
          <AntDesign
            name="right"
            color={generalColor.black[50]}
            size={28}></AntDesign>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleChat}
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
        <Ionicons
          name={'chatbubble-ellipses-outline'}
          size={20}
          color={'white'}
        />
      </TouchableOpacity>

      <View style={styles.itemContainer}>
        <View style={rowCenter}>
          <Text
            style={{
              color: generalColor.primary,
              marginRight: 12,
              ...textStyle.h[3],
            }}>
            {room.name}
          </Text>
          {isSelected && (
            <>
              <AntDesign
                name="check"
                size={24}
                color={generalColor.active}></AntDesign>
              <Text
                style={{
                  color: generalColor.active,

                  ...textStyle.h[3],
                }}>
                đã chọn
              </Text>
            </>
          )}
        </View>

        <Text
          style={{
            marginTop: 12,
            fontWeight: '500',
            color: generalColor.black[100],
            ...textStyle.content.large,
            marginRight: 12,
          }}>
          {formatCurrency(room.pricePerNight)}/ 1 đêm
        </Text>
      </View>
      <View style={{paddingHorizontal: 12}}>
        {room.amenities?.slice(0, numsItem).map(t => {
          return (
            <TextWithIcon
              icon={
                <AntDesign
                  name="check"
                  color={generalColor.black[50]}
                  size={20}></AntDesign>
              }
              text={t.name}></TextWithIcon>
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
        }}>
        {/* {room.bed && (
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
        )} */}

          {
            room.amenities.length > ITEM_COUNT
            
 &&        <ButtonComponent
          outline
          onPress={() => {
            setNumsItem(prev => {
              if (prev == ITEM_COUNT) {
                return room.amenities.length;
              } else {
                // return ITEM_COUNT;
              }
            });
            LayoutAnimation.configureNext(expandAnimation);
          }}
          leftIcon={
            <Entypo
              name="chevron-down"
              color={generalColor.black[50]}
              size={28}></Entypo>
          }
          style={{
            width: 120,
            marginLeft: 'auto',
            alignSelf: 'flex-end',
            marginTop: 8,
            padding: 0,
          }}
          txtStyle={textStyle.content.medium}
          text={'Xem thêm'}></ButtonComponent>
          }
      </View>
    </Pressable>
  );
};

export default RoomItem;

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
