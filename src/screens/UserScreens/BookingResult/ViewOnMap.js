import Geolocation from '@react-native-community/geolocation';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {useEffect, useRef, useState} from 'react';
import {Alert, Linking, StyleSheet, Text, View} from 'react-native';
import {API_KEY} from 'react-native-dotenv';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Avatar} from 'react-native-paper';

import {useRoute} from '@react-navigation/native';
Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
});

const ViewOnMap = ({}) => {
  const {hotel} = useRoute().params;
  const [region, setRegion] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setMarkerPosition({latitude, longitude});
        console.log('position', position.coords);
      },
      error => Alert.alert('Error', 'Unable to get location'),
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
        interval: 10000,
        fastestInterval: 5000,
      },
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);
  const [result, setResult] = useState({
    distance: 0,
    duration: 0,
  });

  const mapRef = useRef(null);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        // const latitude = 10.878307605540192,
        //   longitude = 106.80622622219741;
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

  if (!region || !markerPosition) {
    return null;
  }
  const callAgent = (phoneNumber = '0846303261') => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  // return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={{flex: 1, width: '100%'}}
        region={region}>
        <Marker
          onPress={() => {}}
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
        <Marker coordinate={markerPosition} />
        {hotel && (
          <MapViewDirections
            origin={region}
            destination={hotel.location}
            apikey={API_KEY}
            onReady={r => {
              setResult(r);
              console.log(`Khoảng cách: ${r.distance} km`);
              console.log(`Thời gian di chuyển: ${r.duration} phút`);
            }}
            strokeWidth={3}
            strokeColor={generalColor.primary}
          />
        )}
      </MapView>

      <View style={styles.container}>
        <View style={row}>
          <View>
            <Image source={{uri: hotel.avatar}} style={styles.img}></Image>
            <View style={row}>
              <StarRating
                fullStarColor={generalColor.other.yellow}
                disabled={true}
                maxStars={5}
                containerStyle={{marginTop: 8}}
                rating={hotel.rating}
                starSize={16}
              />
              <Text style={{lineHeight: 32, color: 'black'}}>
                ({hotel.rating})
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 12,
              flex: 1,
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                ...textStyle.content.medium,
                fontWeight: '500',
                marginBottom: 8,
                color: generalColor.primary,
              }}>
              {hotel.name}
            </Text>

            <View style={{...row}}>
              <Entypo name="location-pin" size={20}></Entypo>

              <Text
                numberOfLines={2}
                style={{
                  ...textStyle.content.small,
                  marginBottom: 8,
                  flex: 1,
                }}>
                {hotel.address}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            numberOfLines={2}
            style={{
              ...textStyle.content.medium,
              marginBottom: 8,

              color: 'black',
            }}>
            Khoảng cách{' '}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              ...textStyle.content.medium,
              color: generalColor.primary,
              fontWeight: 'bold',
            }}>
            {result.distance.toFixed(1)} km,
          </Text>
          <Text
            numberOfLines={2}
            style={{
              ...textStyle.content.medium,
              color: 'black',
            }}>
            {' '}
            di chuyển
          </Text>
          <Text
            numberOfLines={2}
            style={{
              ...textStyle.content.medium,
              color: generalColor.primary,
              fontWeight: 'bold',
            }}>
            {' '}
            {result.duration.toFixed(1)} phút
          </Text>
        </View>

        <View style={rowCenter}>
          <AntDesign name="wifi" color="black" size={20}></AntDesign>
          <Text style={styles.txt}>Wifi miễn phí</Text>

          <Divider style={{marginLeft: 12}}></Divider>
          <FontAwesome5 name="parking" color="black" size={20}></FontAwesome5>
          <Text style={styles.txt}>Có bãi đỗ xe</Text>

          <TouchableOpacity
            style={{
              ...center,
              marginLeft: 'auto',
              borderRadius: 25,
              backgroundColor: generalColor.primary,
              width: 50,
              height: 50,
            }}
            onPress={callAgent}>
            <Feather name="phone-call" color="white" size={20}></Feather>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ViewOnMap;

import {center, row, rowCenter} from '@src/theme/style';
import {Image, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    height: 230,
    position: 'absolute',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    bottom: 0,
    right: 0,
    left: 0,
  },
  txt: {
    ...textStyle.content.medium,
    color: 'black',
    marginLeft: 4,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
});
