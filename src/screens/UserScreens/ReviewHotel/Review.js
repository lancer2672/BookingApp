import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {row, rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ListReview from './components/ListReview';

const Review = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        </Pressable>
        <Text style={styles.title}>Đánh giá</Text>
      </View>

      <View style={{...row, padding: 12}}>
        <Text style={styles.rating}>4.5</Text>
        <View>
          <View style={rowCenter}>
            <AntDesign
              name="star"
              color={generalColor.other.star}
              size={32}></AntDesign>
            <AntDesign
              name="star"
              color={generalColor.other.star}
              size={32}></AntDesign>
          </View>
          <Text>120 lượt đánh giá</Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <ListReview></ListReview>
      </View>
    </View>
  );
};

export default Review;

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
  rating: {
    color: generalColor.primary,
    ...textStyle.h[3],
    marginRight: 8,
    textAlign: 'center',
    fontFamily: 'serif',
  },
});
