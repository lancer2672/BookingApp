import ButtonComponent from '@src/components/Button';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {formatCurrency} from '@src/utils/textFormat';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SCREEN_WIDTH = Dimensions.get('window').width;
const HotelItem = ({item, onPress}) => {
  return (
    <View style={{marginTop: 12}}>
      <Image
        resizeMode="cover"
        source={{uri: 'https://picsum.photos/200'}}
        style={styles.image}></Image>
      <View style={styles.itemContainer}>
        <Text style={{color: generalColor.primary, ...textStyle.h[3]}}>
          {item.name}
        </Text>
        <Text style={{color: generalColor.primary, ...textStyle.content.small}}>
          A variety of connecting rooms with furnished semiprivate courtyards
          and terraces (520-685 sq. ft.)
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontWeight: '500',
            color: generalColor.black[100],
            ...textStyle.content.large,
            marginRight: 12,
          }}>
          {formatCurrency(100000)}/ 1 đêm
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
            1 Giường
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
            3 khách
          </Text>
        </View>
        <ButtonComponent
          onPress={() => {
            navigate('ReviewBooking');
          }}
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
