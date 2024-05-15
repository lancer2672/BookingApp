import {useRoute} from '@react-navigation/native';
import {hotelsMock} from '@src/mock/mock';
import {goBack, navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {formatDate} from '@src/utils/textFormat';
import {useCallback, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FilterButton from '../ReviewHotel/components/FilterButton';
import RoomItem from '../components/RoomItem';
import FilterModal, {PRICE_CODE, REVIEW_CODE} from './components/FilterModal';

const getTextFilter = CODE => {
  switch (CODE) {
    case PRICE_CODE.DOWN:
      return 'Giảm dần';
    case PRICE_CODE.UP:
      return 'Tăng dần';
    default:
      return '';
  }
};
const getTextReview = CODE => {
  switch (CODE) {
    case PRICE_CODE.DOWN:
      return 'Giá giảm dần';
    case PRICE_CODE.UP:
      return 'Giá tăng dần';
    case REVIEW_CODE.UP:
      return 'Đánh giá tích cực';
    default:
      return '';
  }
};
const UserSearchResultScreen = () => {
  const {date, roomCustomer} = useRoute().params;
  const [low, setLow] = useState(0);
  const [priceVisible, setPriceVisible] = useState(false);
  const [filter, setFilter] = useState(PRICE_CODE.DOWN);
  const [hight, setHigh] = useState(0);

  const renderThumb = useCallback(
    () => (
      <View
        style={{
          width: 14,
          height: 14,
          borderRadius: 10,
          backgroundColor: generalColor.other.bluepurple,
        }}></View>
    ),
    [],
  );
  const renderRail = useCallback(
    () => (
      <View
        style={{
          backgroundColor: generalColor.primary,
          width: '100%',
          borderRadius: 40,
          height: 3,
        }}></View>
    ),
    [],
  );
  const renderRailSelected = useCallback(() => <Text>3</Text>, []);
  const renderLabel = useCallback(value => <Text>4</Text>, []);
  const renderNotch = useCallback(
    () => (
      <View
        style={{
          width: 5,
          height: 5,
          borderRadius: 10,
          backgroundColor: generalColor.white[50],
        }}></View>
    ),
    [],
  );
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    console.log(low, high);
    setHigh(high);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 12,
            marginTop: 12,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Pressable onPress={goBack}>
            <AntDesign
              name="left"
              size={24}
              color={generalColor.primary}></AntDesign>
          </Pressable>
          <Text
            style={{
              flex: 1,
              marginRight: 24,
              textTransform: 'uppercase',
              color: generalColor.primary,
              ...textStyle.h[2],
              textAlign: 'center',
            }}>
            Phòng
          </Text>
        </View>
        <View style={[rowCenter, styles.header]}>
          <View style={{flex: 1}}>
            <Text>Nhận phòng</Text>
            <Text style={styles.infoText}>
              {formatDate(date.checkinDate, 'dd/MM')}{' '}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text>Trả phòng</Text>
            <Text style={styles.infoText}>
              {formatDate(date.checkoutDate, 'dd/MM')}{' '}
            </Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={{textAlign: 'right'}}>Phòng & Khách</Text>
            <Text style={{...styles.infoText, textAlign: 'right'}}>
              {roomCustomer.room} phòng {roomCustomer.mature} người{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            ...rowCenter,
            marginTop: 8,
            justifyContent: 'flex-end',
            marginHorizontal: 8,
          }}>
          {/* <View style={{flex: 1}}>
            <RangeSlider
              style={styles.slider}
              min={0}
              max={10000}
              step={1}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleValueChange}
            />
          </View> */}
          <FilterButton
            onPress={() => {
              setPriceVisible(true);
            }}
            style={{marginLeft: 12}}
            title={() => {
              return (
                <View style={rowCenter}>
                  <Text style={styles.filter}>Sắp xếp </Text>
                  <AntDesign
                    name="down"
                    size={18}
                    color={generalColor.other.gray}></AntDesign>
                </View>
              );
            }}
            subtitle={() => {
              return <Text>{getTextReview(filter)}</Text>;
            }}></FilterButton>
        </View>
        <View
          style={{
            flex: 1,
            minHeight: 140,
          }}>
          {/* {hotels.map(hotel => (
          ))} */}
          <RoomItem
            hotel={hotelsMock[0]}
            room={hotelsMock[0].rooms[0]}
            onPress={() => {
              navigate('ReviewBooking', {
                roomCustomer,
                date,
                hotel: hotelsMock[0],
                room: hotelsMock[0].rooms[0],
              });
            }}
          />
        </View>
        <FilterModal
          onSelect={t => {
            setFilter(t);
          }}
          selectedItem={filter}
          isVisible={priceVisible}
          onClose={() => {
            setPriceVisible(false);
          }}></FilterModal>
      </ScrollView>
    </View>
  );
};

export default UserSearchResultScreen;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 18,
    justifyContent: 'space-between',
  },
  label: {
    textTransform: 'uppercase',
    ...textStyle.h[4],
    fontWeight: '400',
  },
  infoText: {
    color: generalColor.primary,
    textDecorationLine: 'underline',
    ...textStyle.h[4],
  },
  filter: {color: generalColor.primary, fontSize: 16, marginRight: 4},
});
