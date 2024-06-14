import DateTimePicker from '@react-native-community/datetimepicker';
import {useRoute} from '@react-navigation/native';
import ButtonComponent from '@src/components/Button';
import {bookingHistoryMock} from '@src/mock/mock';
import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {getStatusText} from '@src/utils/constant';
import {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EditRoom from '../EditRoom';
const DetailRoom = () => {
  const route = useRoute();
  const room = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditRoomVisible, setModalEditRoomVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [modalDateVisible, setModalDateVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  const bookingHistoryYear = bookingHistoryMock.filter(item => {
    const year = new Date(item.createdAt);
    return year.getFullYear() == date.getFullYear();
  });
  const bookingHistoryMonth = bookingHistoryYear.filter(item => {
    const month = new Date(item.createdAt);
    return month.getMonth() == date.getMonth();
  });
  const [bookingHistory, setBookingHistory] = useState(bookingHistoryMonth);
  const pickDate = () => {
    setModalDateVisible(false);
    const bookingHistoryYear = bookingHistoryMock.filter(item => {
      const year = new Date(item.createdAt);
      return year.getFullYear() == date.getFullYear();
    });
    const bookingHistoryMonth = bookingHistoryYear.filter(item => {
      const month = new Date(item.createdAt);
      return month.getMonth() == date.getMonth();
    });
    setBookingHistory(bookingHistoryMonth);
  };
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{padding: 12, marginTop: 12, ...rowCenter, marginBottom: 12}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.other.gray}></AntDesign>
        </Pressable>
        <Text
          style={{
            textTransform: 'uppercase',
            color: 'black',
            ...textStyle.h[2],
            flex: 1,
            textAlign: 'center',
            marginRight: 24,
            fontFamily: 'serif',
          }}>
          Chi tiết phòng
        </Text>
      </View>
      <View style={styles.slider}>
        <Swiper autoplay={true} autoplayTimeout={3} style={styles.wrapper}>
          {room.images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{uri: image}} style={styles.imageslider} />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>Thông tin chung</Text>
      </View>

      <View style={styles.main}>
        <FontAwesome5 name="hotel" size={20}></FontAwesome5>
        <Text style={styles.textmain}>{room.name}</Text>
      </View>
      {/* <View style={styles.main}>
        <Entypo name="user" size={20}></Entypo>
        <Text style={styles.textmain}>
        
          Khong co trong database
        </Text>
      </View> */}
      <View style={styles.main}>
        <FontAwesome name="money" size={20}></FontAwesome>
        <Text style={styles.textmain}>{room.price} $</Text>
      </View>
      {/* <View style={styles.main}>
        <Ionicons name="bed" size={20}></Ionicons>
        <Text style={styles.textmain}>Không có trong database</Text>
      </View> */}

      <View style={styles.title}>
        <Text style={styles.text}>Chi tiết tiện tích</Text>
      </View>
      {room.amenities.map(item => (
        <View style={styles.main}>
          <AntDesign name="right" size={20}></AntDesign>
          <Text style={styles.textmain}>{item.name}</Text>
        </View>
      ))}
      {/* <View style={styles.title}>
        <Text style={styles.text}>Quy định</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="exclamationcircleo" size={20}></AntDesign>
        <Text style={styles.textmain}>Không có trong database</Text>
      </View> */}
      <View style={styles.title}>
        <Text style={styles.text}>Trạng thái</Text>
      </View>
      <View style={styles.main}>
        <AntDesign name="infocirlceo" size={20}></AntDesign>
        <Text style={styles.textmain}>{room.status == 'AVAILABLE' ? 'Còn trống' : 'Đã đặt'}</Text>
        {room.status != 'AVAILABLE' && (
          <TouchableOpacity onPress={() => setModalVisible(true)} style={{}}>
            <Text style={{color: 'blue', fontSize: 18, marginLeft: 10}}>
              Bill
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closebutton}
              onPress={() => setModalVisible(false)}>
              <AntDesign name="close" size={20}></AntDesign>
            </TouchableOpacity>
            <View
              style={[styles.title, {borderRadius: 5, alignItems: 'center'}]}>
              <Text style={styles.text}>Thông tin khách hàng</Text>
            </View>
            <View style={styles.main}>
              <AntDesign name="user" size={20}></AntDesign>
              <Text style={styles.textmain}>
                {room.bill.inforCustomer.firstName}{' '}
                {room.bill.inforCustomer.lastName}
              </Text>
            </View>
            <View style={styles.main}>
              <Fontisto name="email" size={20}></Fontisto>
              <Text style={styles.textmain}>
                {room.bill.inforCustomer.email}
              </Text>
            </View>
            <View style={styles.main}>
              <AntDesign name="phone" size={20}></AntDesign>
              <Text style={styles.textmain}>
                {room.bill.inforCustomer.phoneNumber}
              </Text>
            </View>
            <View
              style={[styles.title, {borderRadius: 5, alignItems: 'center'}]}>
              <Text style={styles.text}>CCCD khách hàng</Text>
            </View>
            <View style={styles.main}>
              <AntDesign name="infocirlceo" size={20}></AntDesign>
              <Text style={styles.textmain}>
                {room.bill.inforCustomer.identityCard}
              </Text>
            </View>
            <View style={styles.main}>
              <Text
                style={[
                  styles.textmain,
                  {fontWeight: 'bold', fontStyle: 'italic'},
                ]}>
                Mặt trước CCCD
              </Text>
            </View>
            <View style={styles.main}>
              <Image
                source={{uri: room.bill.inforCustomer.frontIdentityCard}}
                style={{height: 130, width: '70%', resizeMode: 'cover'}}
              />
            </View>
            <View style={styles.main}>
              <Text
                style={[
                  styles.textmain,
                  {fontWeight: 'bold', fontStyle: 'italic'},
                ]}>
                Mặt sau CCCD
              </Text>
            </View>
            <View style={styles.main}>
              <Image
                source={{uri: room.bill.inforCustomer.frontIdentityCard}}
                style={{height: 130, width: '70%', resizeMode: 'cover'}}
              />
            </View>
            <View
              style={[styles.title, {borderRadius: 5, alignItems: 'center'}]}>
              <Text style={styles.text}>Thông tin đặt phòng</Text>
            </View>
            <View style={styles.main}>
              <Fontisto name="date" size={20}></Fontisto>
              <Text style={styles.textmain}>
                {room.bill.startDay} - {room.bill.endDay}
              </Text>
            </View>
            <View style={styles.main}>
              <AntDesign name="clockcircleo" size={20}></AntDesign>
              <Text style={styles.textmain}>{room.bill.duration} ngày</Text>
            </View>
            <View style={styles.main}>
              <MaterialIcons name="payment" size={20}></MaterialIcons>
              <Text style={styles.textmain}>{room.bill.status}</Text>
            </View>
            <View
              style={[styles.title, {borderRadius: 5, alignItems: 'center'}]}>
              <Text style={styles.text}>Ghi chú</Text>
            </View>
            <View style={styles.main}>
              <Text style={styles.textmain}>{room.bill.note}</Text>
            </View>
          </View>
        </View>
      </Modal> */}
      <View style={styles.title}>
        <Text style={styles.text}>Lịch sử đặt phòng</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%',
          marginLeft: '5%',
          textAlign: 'center',
        }}>
        <TouchableOpacity
          style={styles.pickdates}
          onPress={() => setModalDateVisible(true)}>
          <Text style={[styles.textmain, {fontWeight: 'bold', fontSize: 20}]}>
            Tháng: {date.getMonth() + 1} - {date.getFullYear()}
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalDateVisible}
          onRequestClose={() => setModalDateVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.closebutton}
                onPress={() => setModalDateVisible(false)}>
                <AntDesign name="close" size={20}></AntDesign>
              </TouchableOpacity>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="spinner"
                onChange={onChange}
              />
              <ButtonComponent
                style={styles.pickdate}
                text="OK"
                onPress={pickDate}></ButtonComponent>
            </View>
          </View>
        </Modal>
      </View>

      {bookingHistory.map(item => {
        const createDate = new Date(item.createdAt);
        const checkinDate = new Date(item.checkInDate);
        const checkoutDate = new Date(item.checkOutDate);
        return (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '90%',
              marginLeft: '5%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 1,
              marginTop: 15,
              padding: 15,
            }}>
            <View style={styles.main}>
              <Text style={[styles.textmain, {fontWeight: 'bold'}]}>
                Ngày tạo:{' '}
              </Text>
              <Text style={styles.textmain}>
                {createDate.getDate()} - {createDate.getMonth() + 1} -{' '}
                {createDate.getFullYear()}
              </Text>
            </View>
            <View style={styles.main}>
              <Text style={[styles.textmain, {fontWeight: 'bold'}]}>
                Ngày checkin:{' '}
              </Text>
              <Text style={styles.textmain}>
                {checkinDate.getDate()} - {checkinDate.getMonth() + 1} -{' '}
                {checkinDate.getFullYear()}
              </Text>
            </View>
            <View style={styles.main}>
              <Text style={[styles.textmain, {fontWeight: 'bold'}]}>
                Ngày checkout:{' '}
              </Text>
              <Text style={styles.textmain}>
                {checkoutDate.getDate()} - {checkoutDate.getMonth() + 1} -{' '}
                {checkoutDate.getFullYear()}
              </Text>
            </View>
            <View style={styles.main}>
              <Text style={[styles.textmain, {fontWeight: 'bold'}]}>
                Số lượng khách:{' '}
              </Text>
              <Text style={styles.textmain}>
                {item.roomCustomer.mature} người lớn và{' '}
                {item.roomCustomer.children} trẻ em
              </Text>
            </View>
            <View style={styles.main}>
              <Text style={[styles.textmain, {fontWeight: 'bold'}]}>
                Tổng chi phí:{' '}
              </Text>
              <Text style={styles.textmain}>{item.totalPrice}</Text>
            </View>
            <View style={styles.main}>
              <Text style={[styles.textmain, {fontWeight: 'bold'}]}>
                Thanh toán bằng:{' '}
              </Text>
              <Text style={styles.textmain}>{item.paymentMethod}</Text>
            </View>
            <View style={styles.main}>
              <Text style={[styles.textmain, {fontWeight: 'bold'}]}>
                Trạng thái:{' '}
              </Text>
              <Text style={styles.textmain}>{getStatusText(item.status)}</Text>
            </View>
          </View>
        );
      })}
      {bookingHistory.length === 0 && (
        <Text
          style={[
            styles.textmain,
            {marginLeft: '5%', marginTop: 20, fontStyle: 'italic'},
          ]}>
          ( Không có ai đặt phòng trong tháng này !! ){' '}
        </Text>
      )}
      <ButtonComponent
        style={styles.delete}
        text="Edit"
        onPress={() => setModalEditRoomVisible(true)}></ButtonComponent>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEditRoomVisible}
        onRequestClose={() => setModalEditRoomVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closebutton}
              onPress={() => setModalEditRoomVisible(false)}>
              <AntDesign name="close" size={20}></AntDesign>
            </TouchableOpacity>
            <EditRoom roomDefaut={room}></EditRoom>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default DetailRoom;

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    justifyContent: 'center',
    height: 30,
    backgroundColor: generalColor.primary,
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white',
    marginRight: 20,
  },
  textmain: {
    fontSize: 18,
    marginLeft: 5,
    marginBottom: 2,
    marginBottom: 2,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    height: 'auto',
    marginLeft: 20,
    marginRight: 20,
    width: '100%',
  },
  slider: {
    height: 200,
  },
  imageslider: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slide: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: {
    width: '60%',
    marginLeft: '20%',
    marginTop: 20,
    backgroundColor: generalColor.primary,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 99,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    elevation: 5,
    paddingTop: 40,
  },
  closebutton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  date: {
    marginTop: 10,
    left: 0,
  },
  pickdate: {
    width: '40%',
    borderRadius: 10,
    marginLeft: '30%',
  },
  pickdates: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 10,
  },
});
