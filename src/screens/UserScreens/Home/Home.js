import {PinSVG} from '@src/assets/icons';
import ButtonComponent from '@src/components/Button';
import {generalColor} from '@src/theme/color';
import {row, rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {formatCurrency} from '@src/utils/textFormat';
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

import {navigate} from '@src/navigation/NavigationController';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton} from 'react-native-paper';

const Home = () => {
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={{margin: 4, width: 220}}
      onPress={() => {
        // onSelect(item);
      }}>
      <View></View>
      <Image
        resizeMode="cover"
        source={{uri: 'https://picsum.photos/200'}}
        style={{
          width: 220,
          height: 130,
        }}></Image>
      <Text style={[textStyle.h[4], {color: 'black', paddingTop: 8}]}>
        ROSEWOOD LITTLE DIX BAY
      </Text>
      <View style={[rowCenter, {marginBottom: 4, marginLeft: 4}]}>
        <AntDesign
          name="star"
          color={generalColor.other.star}
          size={18}></AntDesign>
        <Text> ( 3,3)</Text>
      </View>
      <View></View>

      <View style={[rowCenter]}>
        <PinSVG height={18} color={generalColor.primary}></PinSVG>
        <Text>Quận 5 TpHCM</Text>
      </View>
      <Text
        style={[
          textStyle.h[5],
          {color: 'black', fontWeight: 'bold', paddingVertical: 8},
        ]}>
        {formatCurrency(10000)}/ đêm
      </Text>

      <ButtonComponent
        style={{marginTop: 8}}
        txtStyle={{fontSize: 14}}
        text={'Đặt phòng'}
        onPress={() => {}}></ButtonComponent>
    </TouchableOpacity>
  );
  const renderItemRcm = ({item, index}) => (
    <TouchableOpacity
      style={{margin: 4, width: 220}}
      onPress={() => {
        // onSelect(item);
        onClose();
      }}>
      <View></View>
      <Image
        resizeMode="cover"
        source={{uri: 'https://picsum.photos/200'}}
        style={{
          width: 220,
          height: 130,
        }}></Image>
      <Text style={[textStyle.h[4], {color: 'black', paddingTop: 8}]}>
        ROSEWOOD LITTLE DIX BAY
      </Text>
      <View style={[rowCenter, {marginBottom: 4, marginLeft: 4}]}>
        <AntDesign
          name="star"
          color={generalColor.other.star}
          size={18}></AntDesign>
        <Text> ( 3,3)</Text>
      </View>
      <View></View>

      <View style={[rowCenter]}>
        <PinSVG height={18} color={generalColor.primary}></PinSVG>
        <Text>Quận 5 TpHCM</Text>
      </View>
      <Text
        style={[
          textStyle.h[5],
          {color: 'black', fontWeight: 'bold', paddingVertical: 8},
        ]}>
        {formatCurrency(10000)}/ đêm
      </Text>
    </TouchableOpacity>
  );
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
            <IconButton
              icon="bell"
              size={24}
              onPress={() => {
                navigate('Notification');
              }}
              iconColor="white"
            />
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

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@src/utils/constant';
import {useState} from 'react';
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
          margin: 4,
          width: SCREEN_WIDTH,
          marginHorizontal: 12,
        }}
        onPress={() => {
          // onSelect(item);
          navigate('HomeListRoom', {hotel: item});
        }}>
        <Image
          resizeMode="cover"
          source={{uri: 'https://picsum.photos/200'}}
          style={{
            width: SCREEN_WIDTH - 48,
            height: 130,
          }}></Image>
        <Text style={[textStyle.h[4], {color: 'white', paddingTop: 8}]}>
          ROSEWOOD LITTLE DIX BAY
        </Text>
        <View style={[rowCenter, {marginBottom: 4, marginLeft: 4}]}>
          <AntDesign
            name="star"
            color={generalColor.other.star}
            size={18}></AntDesign>
          <Text style={{color: 'white'}}> ( 3,3)</Text>
        </View>
        <View></View>

        <View style={[rowCenter]}>
          <PinSVG height={18} color={'white'}></PinSVG>
          <Text style={{color: 'white'}}>Quận 5 TpHCM</Text>
        </View>
        <Text
          style={[
            textStyle.h[5],
            {
              color: 'white',
              fontWeight: 'bold',
              paddingVertical: 8,
              paddingBottom: 0,
            },
          ]}>
          {formatCurrency(10000)}/ đêm
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Carousel
        loop
        width={SCREEN_WIDTH}
        height={(SCREEN_HEIGHT * 1) / 3}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={renderItem}
      />
    </View>
  );
};
