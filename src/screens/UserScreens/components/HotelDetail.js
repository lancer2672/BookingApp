import { useRoute } from '@react-navigation/native';
import { expandAnimation } from '@src/animation';
import ButtonComponent from '@src/components/Button';
import { useAppContext } from '@src/context/appContext';
import { chatClient, useChatClient } from '@src/hooks/useChatClient';
import { agentMock, reviewBookingMock } from '@src/mock/mock';
import { goBack, navigate } from '@src/navigation/NavigationController';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { formatCurrency, formatDate } from '@src/utils/textFormat';
import { useState } from 'react';
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
import { Divider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DescriptionModal from '../BookingHistory/components/DescriptionModal';
import ListReview from '../ReviewHotel/components/ListReview';

const HotelDetail = () => {
  const {roomCustomer, date, hotel, room} = useRoute().params;
  const [reviewVisible, setRiewVisible] = useState(false);
  const [desVisible, setDesVisible] = useState(false);
  const {createOrJoinChannel} = useChatClient()
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
        <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
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
        <View
          style={{
            flex: 1,
            minHeight: 140,
          }}>
          <View style={{flexDirection: 'row', padding: 12}}>
            <View style={{flex: 1.4}}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  color: generalColor.primary,
                  ...textStyle.h[2],
                  textAlign: 'left',
                }}>
                {hotel.name}
              </Text>
              <Text
                style={{
                  color: generalColor.primary,
                  ...textStyle.h[4],
                  marginTop: 8,
                  textAlign: 'left',
                }}>
                {formatCurrency(1111111)}/ đêm
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
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
                  room.bed Giường
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
                  room.numOfChildren khách
                </Text>
              </View>
            </View>
            <Image
              style={styles.img}
              source={{uri: 'https://picsum.photos/200'}}></Image>
          </View>
          <Text style={{fontSize: 14, paddingHorizontal: 12}}>
            {' '}
            room.description
          </Text>



          <View style={[rowCenter, {paddingHorizontal:12}]}>
                <Text style={styles.policy}>Mô tả khách sạn</Text>

                  <Pressable
                    onPress={()=>{setDesVisible(true)}}
                    style={{marginLeft: 'auto'}}>
                    <Text style={{textDecorationLine: 'underline'}}>
                      {' '}
                      Tìm hiểu thêm
                    </Text>
                  </Pressable>
        
            </View>

          <View
            style={{
              borderTopWidth: 1,
              paddingHorizontal: 12,
              borderColor: '#DDDDDD',
              paddingTop: 10,
              marginTop: 10,
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

          <View style={{marginTop: 12, paddingHorizontal: 12}}>
            <Text style={styles.policy}>Chính sách</Text>
            <PolicyItem></PolicyItem>
          </View>
          {/* SEPERATOR */}
          <View
            style={{
              marginVertical: 8,
              height: 5,
              borderRadius: 15,
              backgroundColor: generalColor.other.lightgray,
            }}></View>
          <View style={{paddingHorizontal: 12}}>
            <FeeItem title="phí A"></FeeItem>
            <FeeItem title="phí B"></FeeItem>
            <FeeItem title="phí C"></FeeItem>

            <Divider style={{marginTop: 8}} bold></Divider>
            <FeeItem title={'Tổng cộng'}></FeeItem>
          </View>
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row',borderTopColor:generalColor.other.lightgray,borderTopWidth:1, padding: 8}}>
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
          style={{}}
          text={'Xem mọi phòng'}></ButtonComponent>
      </View>
      <DescriptionModal visible={desVisible} onClose={()=>{
        setDesVisible(false);
      }} description={hotel.description}></DescriptionModal>
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
        Yêu cầu thẻ tín dụng khi đặt phòng
      </Text>
    </View>
  );
};
export default HotelDetail;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 18,
    justifyContent: 'space-between',
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
