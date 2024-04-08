import Geolocation from '@react-native-community/geolocation';
import {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {GG_API_KEY} from 'react-native-dotenv';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
});

const GGMap = () => {
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
        const {latitude, longitude} = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setMarkerPosition({latitude, longitude});
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
        style={{flex: 1}}
        region={region}>
        <Marker
          coordinate={markerPosition}
          draggable
          onDragEnd={handleDragEnd}
        />
        <Circle center={markerPosition} radius={1000} />
        <MapViewDirections
          origin={region}
          destination={destination}
          apikey={GG_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
      <View style={{height: 300, width: '100%'}}>
        <GooglePlacesAutocomplete
          placeholder="Tìm kiếm"
          onPress={handlePress}
          query={{
            key: GG_API_KEY,
            language: 'en',
          }}
          onFail={error => console.log('Find place error', error)}
        />
      </View>
    </View>
  );
};

export default GGMap;

{
  /* 
      <Polygon coordinates={coordinates} fillColor="rgba(100, 200, 200, 0.3)" />

      <Polyline coordinates={coordinates} strokeColor="#000" strokeWidth={3} />

      <Circle
        center={coordinates[0]}
        radius={1000}
        fillColor="rgba(200, 300, 300, 0.5)"
      />

      <Overlay
        bounds={[coordinates[0], coordinates[1]]}
        image={{uri: overlayImage}}
      />

      <Heatmap points={coordinates} radius={20} />

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
                  coordinates[0].longitude,
                  coordinates[0].latitude,
                ],
              },
            },
          ],
        }}
      /> */
}
