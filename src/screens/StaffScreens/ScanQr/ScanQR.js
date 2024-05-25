import {expandAnimation} from '@src/animation';
import ButtonComponent from '@src/components/Button';
import {hotelsMock} from '@src/mock/mock';
import {navigate} from '@src/navigation/NavigationController';
import {ResultItem} from '@src/screens/UserScreens/BookingResult/BookingResult';
import {generalColor} from '@src/theme/color';
import {row, rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {formatDate} from '@src/utils/textFormat';

import {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

const ScanQR = () => {
  const device = useCameraDevice('back');
  const [show, setShow] = useState(false);
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`, codes);
      if (codes.length > 0) {
        setShow(() => true);
      } else {
        setShow(() => false);
      }
    },
  });
  const {hasPermission, requestPermission} = useCameraPermission();
  const [data, setData] = useState({
    room: hotelsMock[0].rooms[0],
    hotel: hotelsMock[0],
    roomCustomer: {
      mature: 2,
      room: 1,
      children: 0,
    },
    date: {
      checkinDate: new Date(),
      checkoutDate: new Date(),
    },
  });
  useEffect(() => {
    LayoutAnimation.configureNext(expandAnimation);
  }, [show]);
  useEffect(() => {
    if (!hasPermission) {
      requestPermission().then(() => {
        Alert.alert('Error, permission denied');
        navigate('HomeStaff');
      });
    }
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 12, marginTop: 12, height: 60}}>
        <Text
          style={{
            textTransform: 'uppercase',
            color: generalColor.primary,
            ...textStyle.h[2],
            flex: 1,
            textAlign: 'center',

            fontFamily: 'serif',
          }}>
          Quét mã
        </Text>
      </View>
      {!show && (
        <Camera
          style={{flex: 1}}
          device={device}
          codeScanner={codeScanner}
          isActive={true}
        />
      )}

      {show && (
        <View style={{flex: 1}}>
          <View style={[rowCenter, styles.header]}>
            <View style={{flex: 1}}>
              <Text>Nhận phòng</Text>
              <Text style={styles.infoText}>
                {formatDate(data?.date?.checkinDate, 'dd/MM')}{' '}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Trả phòng</Text>
              <Text style={styles.infoText}>
                {formatDate(data?.date?.checkoutDate, 'dd/MM')}{' '}
              </Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{textAlign: 'right'}}>Phòng & Khách</Text>
              <Text style={{...styles.infoText, textAlign: 'right'}}>
                {data?.roomCustomer?.room} phòng {data?.roomCustomer?.mature}{' '}
                người{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 12,
              flex: 1,
            }}>
            <Divider style={{marginVertical: 12}} bold></Divider>
            <View style={rowCenter}>
              <Image
                source={{uri: data?.hotel?.avatar}}
                style={{
                  width: 80,
                  height: 80,
                  margin: 12,
                  borderRadius: 12,
                }}></Image>

              <View
                style={{
                  ...row,
                  padding: 12,
                  paddingLeft: 4,
                  paddingRight: 4,
                  alignItems: 'flex-end',
                }}>
                <View>
                  <Text style={styles.txt}>{data?.hotel?.name}</Text>
                  <View style={rowCenter}>
                    <Text style={styles.rating}>{data?.hotel?.rating}</Text>
                    <Text> (120 lượt đánh giá)</Text>
                  </View>
                </View>
              </View>
            </View>

            <ResultItem label="Mã phòng" content={data?.room?.id}></ResultItem>
            <ResultItem
              label="Tên phòng"
              content={data?.room?.name}></ResultItem>
            <ResultItem
              label="Tên khách hàng"
              content={'012312312'}></ResultItem>
            <ResultItem label="Email" content={'012312312'}></ResultItem>
            <ResultItem
              label="Số điện thoại"
              content={'012312312'}></ResultItem>
          </View>
          <View style={[rowCenter, {margin: 12}]}>
            <View style={{flex: 1}}>
              <ButtonComponent
                onPress={() => {}}
                text={'Nhận phòng'}></ButtonComponent>
            </View>
            <View style={{flex: 1, marginLeft: 12}}>
              <ButtonComponent
                onPress={() => {
                  setShow(false);
                }}
                text={'Quét mã'}></ButtonComponent>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ScanQR;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 18,
    // borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    paddingBottom: 2,
    justifyContent: 'space-between',
  },
  title: {
    textTransform: 'uppercase',
    color: generalColor.primary,
    ...textStyle.h[2],
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
    fontFamily: 'serif',
  },

  txt: {
    ...textStyle.content.large,
    color: generalColor.primary,
  },
  infoText: {
    color: generalColor.primary,
    textDecorationLine: 'underline',
    ...textStyle.h[4],
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
