import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {row, rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FilterButton from './components/FilterButton';
import ListReview from './components/ListReview';
import SortModal from './components/SortModal';
import StartModal from './components/StartModal';

const Review = () => {
  const {hotel = {}} = useRoute().params;
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [startModalVisible, setStarModalVisible] = useState(false);
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
        <Text style={styles.rating}>{hotel.rating}</Text>
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

      <View
        style={{
          ...rowCenter,
          padding: 8,
          justifyContent: 'flex-end',
        }}>
        <FilterButton
          onPress={() => {
            setStarModalVisible(true);
          }}
          title={() => {
            return (
              <View style={rowCenter}>
                <Text style={styles.filter}>Sao</Text>
                <AntDesign
                  style={{marginRight: 4}}
                  name="star"
                  color={generalColor.other.star}
                  size={18}></AntDesign>
                <AntDesign
                  name="down"
                  size={18}
                  color={generalColor.other.gray}></AntDesign>
              </View>
            );
          }}
          subtitle={() => {
            return <Text>Tất cả</Text>;
          }}></FilterButton>
        <FilterButton
          onPress={() => {
            setSortModalVisible(true);
          }}
          style={{marginLeft: 12}}
          title={() => {
            return (
              <View style={rowCenter}>
                <Text style={styles.filter}>Sắp xếp</Text>
                <AntDesign
                  name="down"
                  size={18}
                  color={generalColor.other.gray}></AntDesign>
              </View>
            );
          }}
          subtitle={() => {
            return <Text>Tất cả</Text>;
          }}></FilterButton>
      </View>

      <View style={{flex: 1}}>
        <ListReview></ListReview>
      </View>
      <SortModal
        isVisible={sortModalVisible}
        onClose={() => {
          setSortModalVisible(false);
        }}></SortModal>
      <StartModal
        isVisible={startModalVisible}
        onClose={() => {
          setStarModalVisible(false);
        }}></StartModal>
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
  filter: {color: generalColor.primary, fontSize: 16, marginRight: 4},
  rating: {
    color: generalColor.primary,
    ...textStyle.h[3],
    marginRight: 8,
    textAlign: 'center',
    fontFamily: 'serif',
  },
});
