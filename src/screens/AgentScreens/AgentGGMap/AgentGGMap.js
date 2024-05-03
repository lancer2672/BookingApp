import Geolocation from '@react-native-community/geolocation';
import {hotelsMock} from '@src/mock/mock';
import {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {API_KEY} from 'react-native-dotenv';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {
  Circle,
  Geojson,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
});

const AgentGGMap = ({hotels = hotelsMock}) => {
  const [region, setRegion] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
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
      error => console.log('getCurrentPosition failed', error),
      {enableHighAccuracy: true, timeout: 20000},
    );
  }, []);

  const handlePress = (data, details = null) => {
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
        {hotels.map((hotel, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: hotel.location.latitude,
              longitude: hotel.location.longitude,
            }}
            title={hotel.name}
            description={hotel.address}
          />
        ))}
        {/* <Marker
          coordinate={markerPosition}
          draggable
          onDragEnd={handleDragEnd}
        /> */}
        <Marker coordinate={markerPosition} />

        <Circle
          center={markerPosition}
          radius={1000}
          fillColor="rgba(200, 300, 300, 0.5)"
        />
        <Geojson
          geojson={{
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [
                    markerPosition.longitude,
                    markerPosition.latitude,
                  ],
                },
              },
            ],
          }}
        />

        <Circle center={markerPosition} radius={1000} />
        <MapViewDirections
          origin={region}
          destination={destination}
          apikey={API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
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
    </View>
  );
};

export default AgentGGMap;
