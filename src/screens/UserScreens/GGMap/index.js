import Geolocation from '@react-native-community/geolocation';
import {hotelsMock} from '@src/mock/mock';
import ChooseRoomAndCustomer from '@src/screens/UserScreens/Search/components/ChooseRoomAndCustomer';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useEffect, useRef, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-ranges';
import {API_KEY} from 'react-native-dotenv';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Avatar} from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {navigate} from '@src/navigation/NavigationController';
import {formatDate} from '@src/utils/textFormat';
import HotelModal from '../../../components/HotelModal';
Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
});

const GGMap = ({hotels = hotelsMock}) => {
  const [region, setRegion] = useState(null);
  const [roomCustomerVisible, setRoomCustomerVisbile] = useState(false);
  const [roomCustomer, setRoomCustomer] = useState({
    children: 0,
    room: 1,
    mature: 2,
  });
  const [date, setDate] = useState({
    checkinDate: null,
    checkoutDate: null,
  });
  const [markerPosition, setMarkerPosition] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [datepickerVisible, setDatepickerVisible] = useState(false);
  const handleSelectDate = ({startDate, endDate}) => {
    setDate(() => ({
      checkinDate: startDate.replace(/\//g, '-'),
      checkoutDate: endDate.replace(/\//g, '-'),
    }));
  };
  console.log('Selected date range', date);

  // const [visible, setVisible] = useState(false);
  const [destination, setDestination] = useState({
    latitude: 10.87014586159959,
    longitude: 106.80295753522363,
  });
  const mapRef = useRef(null);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        // const {latitude, longitude} = position.coords;
        const latitude = 10.878307605540192,
          longitude = 106.80622622219741;
        setRegion({
          // latitude,
          // longitude,
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setMarkerPosition({latitude, longitude});
        console.log('position', position.coords);
      },
      error => Alert.alert('Lỗi. Lấy vị trí không thành công'),
      {enableHighAccuracy: false, timeout: 20000},
    );
  }, []);

  const handlePress = (data, details = null) => {
    const {location} = details.geometry;
    const newRegion = {
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0621,
    };
    setRegion(newRegion);
    mapRef.current.animateToRegion(newRegion, 1000);
  };

  const handleDragEnd = e => {
    setMarkerPosition(e.nativeEvent.coordinate);
  };

  if (!region || !markerPosition) {
    return null;
  }
  console.log('selected', selectedHotel);
  // return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={{flex: 1, width: '100%'}}
        region={region}>
        {hotels.map((hotel, index) => (
          <Marker
            key={index}
            onPress={() => {
              setSelectedHotel(selectedHotel ? null : hotel);
            }}
            coordinate={{
              latitude: hotel.location.latitude,
              longitude: hotel.location.longitude,
            }}>
            <View style={{alignItems: 'center'}}>
              <Text
                numberOfLines={2}
                style={{
                  ...textStyle.h[5],
                  textShadowColor: 'black',
                  textShadowOffset: {width: -1, height: 1},
                  width: 80,
                  borderRadius: 6,
                  paddingHorizontal: 4,
                  backgroundColor: 'tomato',
                  textShadowRadius: 10,
                  color: 'white',
                  textAlign: 'center',
                }}>
                {hotel.name}
              </Text>
              <Avatar.Image
                size={28}
                style={{borderWidth: 2, borderColor: 'white'}}
                source={{
                  uri: hotel.avatar,
                }}></Avatar.Image>
            </View>
          </Marker>
        ))}
        {/* <Marker
          coordinate={markerPosition}
          draggable
          onDragEnd={handleDragEnd}
        /> */}
        <Marker coordinate={markerPosition} />
        {selectedHotel && (
          <MapViewDirections
            origin={region}
            destination={selectedHotel.location}
            apikey={API_KEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        )}
      </MapView>
      <View style={styles.timeAndPeople}>
        <TouchableOpacity
          onPress={() => {
            setDatepickerVisible(true);
          }}
          style={{...rowCenter, flex: 1}}>
          {!date.checkinDate || !date.checkoutDate ? (
            <Text style={textStyle.h[4]}>Chọn ngày</Text>
          ) : (
            <Text style={textStyle.h[4]}>
              {formatDate(date.checkinDate, 'dd/MM')} -{' '}
              {formatDate(date.checkoutDate, 'dd/MM')}
            </Text>
          )}
        </TouchableOpacity>
        <View style={styles.seperator}></View>
        <TouchableOpacity
          onPress={() => {
            setRoomCustomerVisbile(true);
          }}
          style={{...rowCenter, flex: 1}}>
          <Text style={textStyle.h[4]}>{roomCustomer.room} </Text>
          <Ionicons
            name="bed"
            color={generalColor.primary}
            size={24}></Ionicons>

          <Text style={textStyle.h[4]}> {roomCustomer.mature} </Text>
          <Ionicons
            name="person"
            color={generalColor.primary}
            size={24}></Ionicons>
          <Text style={textStyle.h[4]}> {roomCustomer.children} </Text>
          <FontAwesome6
            name="children"
            color={generalColor.primary}
            size={24}></FontAwesome6>
        </TouchableOpacity>
      </View>

      <View style={{height: 48, width: '100%'}}>
        <GooglePlacesAutocomplete
          placeholder="Tìm kiếm"
          onPress={handlePress}
          query={{
            key: API_KEY,
            language: 'en',
          }}
          onFail={error => console.log('Find place error', error)}
        />
      </View>
      <HotelModal
        handleContinue={() => {
          navigate('HotelRoomList', {hotel: selectedHotel, roomCustomer, date});
        }}
        isVisible={selectedHotel != null}
        onClose={() => {
          setSelectedHotel(null);
        }}></HotelModal>
      <View style={{position: 'absolute', bottom: 0}}>
        <DatePicker
          style={{width: 350, height: 45}}
          isVisible={datepickerVisible}
          markText="Chọn ngày"
          onConfirm={handleSelectDate}
          onChangeVisible={setDatepickerVisible}
          customStyles={{
            placeholderText: {fontSize: 20}, // placeHolder style
            headerStyle: {}, // title container style
            headerMarkTitle: {}, // title mark style
            headerDateTitle: {}, // title Date style
            contentInput: {}, //content text container style
            contentText: {}, //after selected text Style
          }} // optional
          centerAlign // optional text will align center or not
          allowFontScaling={false} // optional
          placeholder={''}
          mode={'range'}
        />
      </View>
      <ChooseRoomAndCustomer
        roomCustomer={roomCustomer}
        onChange={setRoomCustomer}
        onClose={() => setRoomCustomerVisbile(false)}
        isVisible={roomCustomerVisible}></ChooseRoomAndCustomer>
    </View>
  );
};

export default GGMap;

const styles = StyleSheet.create({
  timeAndPeople: {
    position: 'absolute',
    top: 24,
    padding: 8,
    right: 24,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: generalColor.other.lightgray,
    borderRadius: 8,
  },
  seperator: {
    width: 3,
    borderRadius: 24,
    height: 32,
    marginHorizontal: 8,
    backgroundColor: 'gray',
  },
});
