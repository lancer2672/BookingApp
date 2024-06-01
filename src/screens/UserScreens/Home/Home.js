import { PinSVG } from '@src/assets/icons';
import { generalColor } from '@src/theme/color';
import { row, rowCenter, textShadow } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { formatCurrency } from '@src/utils/textFormat';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { navigate } from '@src/navigation/NavigationController';
import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButton } from 'react-native-paper';

const Home = () => {
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={{margin: 4, width: 220}}
      onPress={() => {
        // onSelect(item);
      }}>
      <View></View>
      <ImageBackground
        resizeMode="cover"
        source={{uri: 'https://picsum.photos/200'}}
        style={{
          width: 220,
          height: SCREEN_HEIGHT * 0.4,
          borderRadius: 4,
          overflow: 'hidden',
          padding: 4,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}>
        <View style={[rowCenter, {marginBottom: 8}]}>
          <Text
            style={[
              textStyle.h[4],
              textShadow,
              {color: 'white', flex: 1, paddingTop: 8},
            ]}>
            ROSEWOOD LITTLE DIX BAY
          </Text>
          <View style={[rowCenter, {flex: 0.4, marginLeft: 4}]}>
            <AntDesign
              name="star"
              color={generalColor.other.star}
              size={18}></AntDesign>
            <Text style={{color: 'white'}}> ( 3,3)</Text>
          </View>
          <View></View>
        </View>

        <View style={[rowCenter]}>
          <PinSVG height={18} color={'white'}></PinSVG>
          <Text style={{color: 'white'}}>Quận 5 TpHCM</Text>
        </View>

        <View style={rowCenter}>
          <Text
            style={[
              textStyle.h[4],
              textShadow,
              {color: 'white', fontWeight: '500', paddingVertical: 8},
            ]}>
            {formatCurrency(10000)}
          </Text>
          <Text style={[{color: 'white', fontSize: 20, paddingVertical: 8}]}>
            / đêm
          </Text>
        </View>
      </ImageBackground>

      {/* <ButtonComponent
        style={{marginTop: 8}}
        txtStyle={{fontSize: 14}}
        text={'Đặt phòng'}
        onPress={() => {}}></ButtonComponent> */}
    </TouchableOpacity>
  );
  const [newNoti, setNewNoti] = useState(false);
  useEffect(() => {
    getAllValuesMatchingPattern('noti').then(data => {
      const isFind = data.find(t => t.isSeen == false);
      if (isFind) {
        setNewNoti(true);
      } else {
        setNewNoti(false);
      }
    });
  }, []);
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/imgs/bg.png')}
        style={styles.bg}>
        <View style={[StyleSheet.absoluteFillObject, styles.overlay]}>
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            style={[StyleSheet.absoluteFillObject, {flex: 1}]}
            colors={[
              'rgba(9, 30, 61, 0.3)',
              'rgba(9, 30, 61, 0.4)',
              'rgba(9, 30, 61, 0.5)',
              'rgba(9, 30, 61, 0.6)',
              'rgba(9, 30, 61, 0.8)',
            ]}></LinearGradient>
        </View>
        <View
          style={[
            row,
            {
              padding: 12,
            },
          ]}>
          <View
            style={{
              flex: 1,
              marginLeft: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={[textStyle.h[2], {color: 'white', fontFamily: 'serif'}]}>
                BookingCare
              </Text>
              <Text style={{color: 'white'}}>
                Chuyến Đi Hoàn Hảo, Đặt Phòng Dễ Dàng!
              </Text>
            </View>
            <View>
              <IconButton
                icon="bell"
                size={24}
                onPress={() => {
                  navigate('Notification');
                }}
                iconColor="white"
              />
              {newNoti && (
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 8,
                    backgroundColor: 'tomato',
                    position: 'absolute',
                    top: 12,
                    right: 12,
                  }}></View>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 2,
          padding: 12,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: generalColor.primary,
        }}>
        <View style={[rowCenter, {marginVertical: 8}]}>
          <View
            style={{
              width: 3,
              borderRadius: 25,

              height: 24,
              marginRight: 12,
              backgroundColor: 'white',
            }}></View>
          <Text style={[textStyle.h[3], {color: 'white', flex: 1}]}>
            Đề xuất cho bạn
          </Text>
        </View>
        <RecommendList></RecommendList>
      </View>
      <View style={{flex: 2, padding: 12, backgroundColor: 'white'}}>
        <View style={[rowCenter, {marginVertical: 8}]}>
          <View
            style={{
              width: 3,
              borderRadius: 25,

              height: 24,
              marginRight: 12,
              backgroundColor: generalColor.primary,
            }}></View>
          <Text
            style={[
              textStyle.h[3],
              {
                color: generalColor.primary,
                flex: 1,
              },
            ]}>
            Chỗ nghỉ gần đây
          </Text>

          <Pressable onPress={() => {}} style={{marginLeft: 'auto'}}>
            <Text style={{textDecorationLine: 'underline'}}> Xem tất cả</Text>
          </Pressable>
        </View>

        <FlatList
          renderItem={renderItem}
          data={[1, 2]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{margin: 8}} />}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'tomato',
    flex: 1,
    height: 170,
  },
  playBtn: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlay: {
    // backgroundColor: "blue",
  },
  backBtn: {
    padding: 12,
    margin: 12,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(232, 232, 232, 0.7)',
  },
});

import { getAllValuesMatchingPattern } from '@src/store/as/as';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/utils/constant';
import { useEffect, useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';

const RecommendList = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  // Call the useGetRecentMoviesQuery hook to fetch the recent movies
  const data = [1, 2];
  const renderItem = ({item, index}) => {
    console.log('Item', item);
    return (
      <TouchableOpacity
        style={{
          borderWidth: 10,
          borderColor: 'white',
          width: SCREEN_WIDTH * 0.7,
          borderRadius: 12,
          alignItems: 'center',
          backgroundColor: 'white',
          // backgroundColor:'',
          marginHorizontal: SCREEN_WIDTH * 0.15 - 10,
        }}
        onPress={() => {
          // onSelect(item);
          navigate('HomeListRoom', {hotel: item});
        }}>
        <Image
          resizeMode="cover"
          source={{uri: 'https://picsum.photos/200'}}
          style={{
            width: '100%',
            height: '66%',
            // flex:2,

            borderRadius: 12,
          }}></Image>
        <View style={{marginTop: 4}}>
          <View style={[rowCenter, {width: '100%'}]}>
            <Text
              style={[
                textStyle.h[4],
                {flex: 1, color: generalColor.primary, paddingTop: 8},
              ]}>
              ROSEWOOD LITTLE DIX BAY
            </Text>
            <View style={[rowCenter, {marginBottom: 4, marginLeft: 4}]}>
              <AntDesign
                name="star"
                color={generalColor.other.star}
                size={18}></AntDesign>
              <Text style={{color: generalColor.primary}}> ( 3,3)</Text>
            </View>
          </View>
          <View></View>
          <View style={[rowCenter]}>
          <PinSVG height={18} color={generalColor.primary}></PinSVG>
          <Text style={{color: generalColor.primary}}>Quận 5 TpHCM</Text>
        </View>
          <View style={rowCenter}>
            <Text
              style={[
                textStyle.h[4],
                {
                  color: generalColor.primary,
                  fontWeight: '500',
                  paddingVertical: 8,
                },
              ]}>
              {formatCurrency(10000)}
            </Text>
            <Text
              style={[
                {color: generalColor.primary, fontSize: 20, paddingVertical: 8},
              ]}>
              / đêm
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        marginVertical: 8,
      }}>
      <Carousel
        loop
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT * 0.5}
        autoPlay={true}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          // parallaxScrollingOffset: 1,
        }}
        pagingEnabled={false}
        data={data}
        scrollAnimationDuration={2000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={renderItem}
      />
    </View>
  );
};
