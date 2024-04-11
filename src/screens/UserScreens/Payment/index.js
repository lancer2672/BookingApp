import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Payment = () => {
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
            Thanh toán
          </Text>
        </View>
        <View
          style={{
            padding: 12,
            flex: 1,
          }}>
          <Divider style={{marginVertical: 12}} bold></Divider>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TextInputComponent
                label="Tên"
                placeholder="Nhập tên"
                placeholderColor="black"
                labelStyle={{color: generalColor.primary}}
                style={{...styles.input}}
                styleTextInput={{color: 'black'}}
              />
            </View>
            <View style={{flex: 1, marginLeft: 20}}>
              <TextInputComponent
                label="Họ"
                style={{...styles.input}}
                placeholder="Nhập Họ"
                labelStyle={{color: generalColor.primary}}
                placeholderColor="black"
                styleTextInput={{color: 'black'}}
              />
            </View>
          </View>
          <TextInputComponent
            label="Email"
            style={styles.input}
            labelStyle={{color: generalColor.primary}}
            placeholder="Nhập địa chỉ email"
            placeholderColor="black"
            styleTextInput={{color: 'black'}}
          />
          <TextInputComponent
            label="Số điện thoại"
            style={styles.input}
            labelStyle={{color: generalColor.primary}}
            text
            keyboardType="numeric"
            placeholder="Nhập số điện thoại"
            placeholderColor="black"
            styleTextInput={{color: 'black'}}
          />
          <Text
            style={{
              marginTop: 12,
              ...textStyle.h[3],
              color: generalColor.primary,
              textAlign: 'left',
            }}>
            Thanh toán
          </Text>
          <View
            style={{
              ...rowCenter,
              paddingVertical: 8,
              borderBottomWidth: 1,
              borderBottomColor: generalColor.other.gray,
            }}>
            <Image source={require('../../../assets/icons/atm.png')}></Image>
            <View
              style={{
                flex: 1,
                marginLeft: 12,
              }}>
              <Text
                style={{
                  marginTop: 2,
                  ...textStyle.content.large,
                  color: generalColor.black[100],
                }}>
                Credit card
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  ...textStyle.content.medium,
                  color: generalColor.other.gray,
                }}>
                Thanh toán sử dụng credit card
              </Text>
            </View>
            <AntDesign
              name="right"
              size={24}
              color={generalColor.other.gray}></AntDesign>
          </View>
          <ButtonComponent
            style={{marginVertical: 24}}
            text={'Đặt phòng'}></ButtonComponent>
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 18,
    justifyContent: 'space-between',
  },
  txt: {
    ...textStyle.content.large,
    color: generalColor.other.stronggray,
  },
  label: {
    textTransform: 'uppercase',
    ...textStyle.h[4],
    fontWeight: '400',
  },
  input: {
    marginBottom: 0,
    borderRadius: 0,
    textAlign: 'center',
    backgroundColor: generalColor.other.lightgray,
  },
});
