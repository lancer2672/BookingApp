import {useRoute} from '@react-navigation/native';
import {expandAnimation} from '@src/animation';
import {PinSVG} from '@src/assets/icons';
import ButtonComponent from '@src/components/Button';
import {useAppContext} from '@src/context/appContext';
import {chatClient, useChatClient} from '@src/hooks/useChatClient';
import {agentMock, reviewBookingMock} from '@src/mock/mock';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {row, rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {SCREEN_WIDTH} from '@src/utils/constant';
import {formatCurrency, formatDate} from '@src/utils/textFormat';
import {useState} from 'react';
import {
  Image,
  LayoutAnimation,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';
import {Marker} from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DescriptionModal from '../BookingHistory/components/DescriptionModal';
import ListReview from '../ReviewHotel/components/ListReview';

const HotelDetail = () => {
  const {roomCustomer, date, hotel, room} = useRoute().params;
  const [reviewVisible, setRiewVisible] = useState(false);
  const [desVisible, setDesVisible] = useState(false);
  const {createOrJoinChannel} = useChatClient();
  const handleNavigateReviewAll = () => {
    navigate('Review', {hotel});
  };
  const {setChannel} = useAppContext();

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
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
          <Pressable onPress={goBack}>
            <AntDesign
              name="left"
              size={24}
              color={generalColor.other.gray}></AntDesign>
          </Pressable>
          <Text
            style={{
              textTransform: 'uppercase',
              color: generalColor.primary,
              ...textStyle.h[2],
              flex: 1,
              textAlign: 'center',
              marginRight: 24,
              fontFamily: 'serif',
            }}>
            Thông tin
          </Text>
        </View> */}
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
            <Text
              numberOfLines={1}
              style={{...styles.infoText, textAlign: 'right'}}>
              {roomCustomer.room} phòng {roomCustomer.mature} người
            </Text>
            {roomCustomer.children != 0 && (
              <Text
                numberOfLines={1}
                style={{...styles.infoText, textAlign: 'right'}}>
                {roomCustomer.children} trẻ em
              </Text>
            )}
          </View>
        </View>
        <View>
          <Carousel
            loop
            width={SCREEN_WIDTH}
            height={200}
            autoPlay={false}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 1,
              parallaxScrollingOffset: 1,
            }}
            pagingEnabled={false}
            data={hotel.images}
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
                      height: 200,
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
        <View
          style={{
            flex: 1,
            minHeight: 140,
          }}>
          <View>
            <View style={{flexDirection: 'row', padding: 12}}>
              <View style={{flex: 1.4}}>
                <View style={rowCenter}>
                  <Text
                    style={{
                      flex: 1,
                      textTransform: 'uppercase',
                      color: generalColor.primary,
                      ...textStyle.h[2],
                      textAlign: 'left',
                    }}>
                    {hotel.name}
                  </Text>
                  <View style={{}}>
                    <View style={[rowCenter, {marginBottom: 4, marginLeft: 4}]}>
                      <AntDesign
                        name="star"
                        color={generalColor.other.star}
                        size={18}></AntDesign>
                      <Text style={{color: generalColor.primary}}>
                        {' '}
                        ( 3,3){' '}
                      </Text>
                    </View>
                    <Text
                      style={{
                        marginRight: 8,
                        color: generalColor.primary,
                        ...textStyle.content.medium,
                      }}>
                      120 lượt đánh giá
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[rowCenter, {padding: 8}]}>
              <View style={[rowCenter, {flex: 1}]}>
                <PinSVG height={18} color={generalColor.primary}></PinSVG>
                <Text
                  numberOfLines={4}
                  style={{
                    paddingRight: 24,
                    color: generalColor.primary,
                    ...textStyle.content.small,
                  }}>
                  {hotel.address}
                </Text>
              </View>
              <View style={{flex: 1, height: 100}}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={{flex: 1, width: '100%'}}
                  region={{
                    ...hotel.location,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <Marker
                    coordinate={
                      hotel.location || {
                        longitude: 0,
                        latitude: 0,
                      }
                    }
                  />
                </MapView>
              </View>
            </View>
          </View>
          <View style={styles.sep}></View>
          <View>
            <View style={[rowCenter, {paddingHorizontal: 12}]}>
              <Text style={styles.policy}>Các tiện nghi</Text>

              <Pressable
                onPress={() => {
                  setDesVisible(true);
                }}
                style={{marginLeft: 'auto'}}></Pressable>
            </View>
            <View style={[rowCenter, {paddingHorizontal: 12, marginTop: 4}]}>
              <AntDesign
                name="wifi"
                size={18}
                color={generalColor.primary}></AntDesign>
              <Text style={styles.txt1}>Wifi miễn phí tất cả phòng</Text>
            </View>
            <View style={[rowCenter, {paddingHorizontal: 12, marginTop: 4}]}>
              <MaterialCommunityIcons
                name="parking"
                size={18}
                color={generalColor.primary}></MaterialCommunityIcons>
              <Text style={styles.txt1}>Có bãi đỗ xe riêng</Text>
            </View>
            <View style={[rowCenter, {paddingHorizontal: 12, marginTop: 4}]}>
              <AntDesign
                name="clockcircle"
                size={18}
                color={generalColor.primary}></AntDesign>
              <Text style={styles.txt1}>Bàn tiếp tân 24h</Text>
            </View>
          </View>
          <View style={styles.sep}></View>
          <View>
            <View style={[rowCenter, {paddingHorizontal: 12}]}>
              <Text style={styles.policy}>Mô tả khách sạn</Text>

              <Pressable
                onPress={() => {
                  setDesVisible(true);
                }}
                style={{marginLeft: 'auto'}}>
                <Text style={{textDecorationLine: 'underline'}}>
                  {' '}
                  Tìm hiểu thêm
                </Text>
              </Pressable>
            </View>
            <Text
              numberOfLines={3}
              style={{lineHeight: 20, color: 'black', paddingHorizontal: 12}}>
              {hotel.description}
            </Text>
          </View>
          <View style={styles.sep}></View>
          <View
            style={{
              paddingHorizontal: 12,
              paddingTop: 0,
              borderColor: '#DDDDDD',
            }}>
            <View>
              <View style={rowCenter}>
                <Text style={styles.policy}>Đánh giá</Text>

                {reviewVisible ? (
                  <Pressable
                    onPress={handleNavigateReviewAll}
                    style={{marginLeft: 'auto'}}>
                    <Text style={{textDecorationLine: 'underline'}}>
                      {' '}
                      Xem tất cả
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      setRiewVisible(!reviewVisible);
                      LayoutAnimation.configureNext(expandAnimation);
                    }}
                    style={{marginLeft: 'auto'}}>
                    <AntDesign
                      name="down"
                      size={18}
                      color={generalColor.other.gray}></AntDesign>
                  </Pressable>
                )}
              </View>
            </View>

            {reviewVisible && (
              <View style={{}}>
                <ListReview
                  reviews={[reviewBookingMock[0]]}
                  hotel={hotel}></ListReview>
              </View>
            )}
          </View>
          <View style={styles.sep}></View>
          <View style={{marginTop: 12, paddingHorizontal: 12}}>
            <Text style={styles.policy}>Chính sách</Text>
            <PolicyItem></PolicyItem>
          </View>
          {/* SEPERATOR */}
        </View>
        <View style={styles.sep}></View>
        <View>
          <View style={[rowCenter, {paddingHorizontal: 12}]}>
            <Text style={styles.policy}>Một số thông tin hữu ích</Text>
          </View>
          <View style={[row, {paddingHorizontal: 12, marginVertical: 12}]}>
            <FontAwesome5
              name="user-check"
              size={24}
              color={generalColor.primary}></FontAwesome5>
            <View style={{marginLeft: 8}}>
              <Text
                style={[
                  textStyle.h[4],
                  {fontSize: 18, color: generalColor.primary},
                ]}>
                Nhận phòng/ trả phòng
              </Text>
              <Text style={[{fontSize: 16, color: 'black'}]}>
                Nhận phòng từ: 14:00
              </Text>
              <Text style={[{fontSize: 16, color: 'black'}]}>
                Nhận phòng đến: 3:00
              </Text>
              <Text style={[{fontSize: 16, color: 'black'}]}>
                Trả phòng từ: 12:00
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          borderTopColor: generalColor.other.lightgray,
          borderTopWidth: 1,
          padding: 8,
        }}>
        <View style={{flex: 2, height: 50}}>
          <TouchableOpacity
            onPress={handleChat}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: generalColor.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons
              name={'chatbubble-ellipses-outline'}
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
        <ButtonComponent
          onPress={() => {
            navigate('Payment', {roomCustomer, date, hotel});
          }}
          style={{
            borderRadius: 24,
          }}
          text={'Xem mọi phòng'}></ButtonComponent>
      </View>
      <DescriptionModal
        visible={desVisible}
        onClose={() => {
          setDesVisible(false);
        }}
        description={hotel.description}></DescriptionModal>
    </View>
  );
};

const FeeItem = ({title}) => {
  return (
    <View
      style={{
        ...rowCenter,
        marginTop: 20,
        justifyContent: 'space-between',
      }}>
      <Text style={styles.txt}>{title}</Text>
      <Text style={styles.txt}> {formatCurrency(100000)}</Text>
    </View>
  );
};
const PolicyItem = ({}) => {
  return (
    <View>
      <Text
        style={{
          ...textStyle.h[4],
          color: generalColor.primary,
          textAlign: 'left',
          marginTop: 8,
          marginBottom: 4,
        }}>
        Chính sách bảo đảm
      </Text>
      <Text
        style={{
          ...textStyle.content.small,
          color: generalColor.black[100],
          textAlign: 'left',
        }}>
        Yêu cầu thẻ định danh khi đặt phòng
      </Text>
    </View>
  );
};
export default HotelDetail;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 18,
    justifyContent: 'space-between',
  },
  sep: {
    marginVertical: 8,
    height: 8,
    borderRadius: 15,
    backgroundColor: generalColor.other.lightgray,
  },
  txt1: {
    marginLeft: 8,
    color: 'black',
  },
  policy: {
    ...textStyle.h[3],
    color: generalColor.primary,
    textAlign: 'left',
  },
  txt: {
    ...textStyle.content.medium,
    color: generalColor.other.stronggray,
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
  img: {
    // height: 80,
    flex: 1,
  },
});
