import ButtonComponent from '@src/components/Button';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SCREEN_WIDTH = Dimensions.get('window').width;
const RoomItem = ({hotel, room, onPress}) => {
  return (
    <View style={{marginTop: 12}}>
      <Image
        resizeMode="cover"
        source={{uri: hotel.avatar}}
        style={styles.image}></Image>
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
            {room.numOfMature} khách
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
