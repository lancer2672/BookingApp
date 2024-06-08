import AskingModel from '@src/components/AskingModal/AskingModal';
import { generalColor } from '@src/theme/color';
import { rowCenter, shadowBox } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { formatDate } from '@src/utils/textFormat';
import { useState } from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const isReviewed = (userId, bookingHistory) => {
  return userId == null;
};

const BankAccountItem = ({item,onChange,newDefaultId,onNewDefaultIdChange, isDefault}) => {
  const [visible, setVisible] = useState(false);
  const [askVisible, setAskVisible] = useState(false);

  const [visibleReview, setVisibleReview] = useState(false);
  const reviewClick = () => {
    if (isReviewed(1)) {
      setVisible(true);
    } else {
      setVisibleReview(true);
    }
  };
  return (
    <Pressable
      onPress={() => {
        onNewDefaultIdChange(item.id);
      }}
      style={{
        backgroundColor: newDefaultId? generalColor.primary: generalColor.other.lightgray,

      }}>
      <View
        style={[
          styles.container,
          shadowBox,
          {
            backgroundColor: generalColor.other.lightgray,
          },
        ]}>
        <View style={[rowCenter, {alignItems: 'center', marginBottom: 4}]}>
          <View style={rowCenter}>
            <Text
              style={{
                ...textStyle.content.medium,
                color: generalColor.primary,
              }}>
              Ngày thêm:{' '}
            </Text>
            <Text
              style={{
                ...textStyle.content.medium,
                color: generalColor.primary,
                fontWeight: '500',
              }}>
              {formatDate(item.createdAt, 'dd-MM-yyyy')}
            </Text>
          </View>

          <Pressable
          onPress={()=>{setAskVisible(true)}}
            style={{
              ...textStyle.content.small,
              textDecorationLine: 'underline',
              marginBottom: 8,
              marginLeft: 'auto',
              color: generalColor.primary,
            }}>
               
          <AntDesign
                        name="close"
                        size={24}
                        color={generalColor.primary}></AntDesign>
          </Pressable>
       
        </View>
        {isDefault &&
        <View style={rowCenter}>
          <Text
            style={{
              ...textStyle.content.medium,
              color: generalColor.primary,
              fontWeight: '400',
              marginBottom: 12,
            }}>
            Trạng thái:{' '}
          </Text>
          <Text
            style={{
              ...textStyle.content.medium,
                color:generalColor.active,
              fontWeight: '500',
              marginBottom: 12,
            }}>
            đang sử dụng
          </Text>
        </View>
        }
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        
          <View style={{ flex: 1}}>
            <View style={rowCenter}>
              <Text
                style={[styles.text1,{fontWeight:"400"}]}>
               Ngân hàng: {" "}
              </Text>
              <Text
                style={styles.text1}>
               {item.bank}
              </Text>
            </View>

            <View style={rowCenter}>
              <Text
                style={[styles.text1,{fontWeight:"400"}]}>
                Số tài khoản:{" "}
              </Text>
              <Text
                style={styles.text1}>
               {item.stk}
              </Text>
            </View>
          

            <View style={rowCenter}>
              <Text
                style={[styles.text1,{fontWeight:"400"}]}>
                Tên: {" "}
              </Text>
              <Text
                style={styles.text1}>
               {item.accountName}
              </Text>
            </View>
          

     

          </View>
          <View style={{marginLeft: 12,alignItems: 'center'}}>
            <Image
              source={{uri: item.qr}}
              style={[shadowBox, styles.img]}></Image>
            <Text
              style={{
                ...textStyle.content.medium,

                marginVertical: 8,

                color: generalColor.primary,
              }}>
                    Mã QR
            </Text>
          </View>
        </View>
      </View>
      <AskingModel
          heading="Bạn có muốn xoá tài khoản này?"
          onYesClick={()=>{}}
          onNoClick={() => {
            setAskVisible(false);
          }}
          noText={'Không'}
          yesText={'Có'}
          visible={askVisible}
          onClose={() => {
            setAskVisible(false);
          }}></AskingModel>
        
    </Pressable>
  );
};

export default BankAccountItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  img: {
    width: 80,
    elevation: 2,
    height: 80,
    borderColor:"gray",
    backgroundColor:"gray",
    borderRadius: 12,
  },
  text1:{
    ...textStyle.content.medium,
    fontWeight: '500',
    marginBottom: 8,

    color: generalColor.primary,
  },
  text2:{

  }
});
