import Geolocation from '@react-native-community/geolocation';
import ButtonComponent from '@src/components/Button';
import {hotelsMock} from '@src/mock/mock';
import {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {API_KEY} from 'react-native-dotenv';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
});

const AgentGGMap = ({hotels = hotelsMock}) => {
  const [region, setRegion] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
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
      error => console.log('getCurrentPosition failed', error),
      {enableHighAccuracy: true, timeout: 20000},
    );
  }, []);

  const handlePress = (data, details = null) => {
    console.log('DATA', {data, details});
    const {location} = details.geometry;
    const newRegion = {
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    setRegion(newRegion);
    mapRef.current.animateToRegion(newRegion, 1000);
  };

  const handleDragEnd = e => {
    setMarkerPosition(e.nativeEvent.coordinate);
    console.log('markerPosition', e.nativeEvent.coordinate);
  };

  if (!region || !markerPosition) {
    return null;
  }

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={{flex: 1, width: '100%'}}
        region={region}>
        <Marker
          coordinate={markerPosition}
          draggable
          onDragEnd={handleDragEnd}
        />
        <Circle
          center={{
            latitude: 10.878307605540192,
            longitude: 106.80622622219741,
          }}
          radius={1000}
          fillColor="rgba(200, 300, 300, 0.5)"
        />
      </MapView>
      <View
        style={{
          height: 48,
          top: 24,
          left: 24,
          right: 24,
          position: 'absolute',
        }}>
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
      <ButtonComponent
        onPress={() => {
          console.log('press');
        }}
        style={{position: 'absolute', bottom: 24, left: 24, right: 24}}
        text="Chọn"
      />
    </View>
  );
};

export default AgentGGMap;
