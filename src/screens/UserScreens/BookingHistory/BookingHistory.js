import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BookingHistoryItem from './components/BookingHistoryItem';

const BookingHistory = () => {
  const renderItem = ({item, index}) => <BookingHistoryItem />;
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        </Pressable>
        <Text style={styles.title}>Lịch sử</Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          renderItem={renderItem}
          data={[1, 2]}
          keyExtractor={(item, index) => index.toString()}
          showVertical={false}
          ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
        />
      </View>
    </View>
  );
};

export default BookingHistory;

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
