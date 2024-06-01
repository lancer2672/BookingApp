import Geolocation from '@react-native-community/geolocation';
import { ClockSVG, PinSVG, TargetSVG } from '@src/assets/icons';
import { navigate } from '@src/navigation/NavigationController';
import { generalColor } from '@src/theme/color';
import textStyle from '@src/theme/text';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
import { useTheme } from 'styled-components';
const UserSearchScreen = () => {
  const theme = useTheme();
  const [markerPosition, setMarkerPosition] = useState(null);
  const [region, setRegion] = useState(null);
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
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          minHeight: 140,
          backgroundColor: generalColor.primary,
          padding: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 24,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <PinSVG color={generalColor.white[100]}></PinSVG>

            <Text
              style={{
                textTransform: 'uppercase',
                marginLeft: 12,
                color: generalColor.white[100],
                ...textStyle.content.large,
              }}>
              Địa điểm
            </Text>
          </View>
        </View>
        <Pressable onPress={() => navigate('UserSearchDetailScreen')}>
          <Searchbar
            editable={false}
            //   onFocus={() => console.log('click')}
            //   editable={false}
            placeholder="Tìm kiếm"
            style={{backgroundColor: 'white', borderRadius: 4}}
          />
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <Pressable
          onPress={() => {
            navigate('GGMap');
            console.log('GGMAP');
          }}>
          <View style={styles.item}>
            <TargetSVG></TargetSVG>
            <Text
              style={{
                //   color: theme.color.text.primary,
                ...textStyle.content.medium,
                marginLeft: 6,
            
              }}>
              Khách sạn xung quanh bạn
            </Text>
          </View>
          <View style={{height:120}}>
              
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 1, width: '100%'}}
            region={region}>
            <Marker coordinate={markerPosition} />
          </MapView>
          </View>
        </Pressable>

        <View style={{padding:12,paddingTop:0 }}>
          <RecentSearches></RecentSearches>
        </View>
      </View>
    </View>
  );
};

const RecentSearches = () => {
  const data = [
    'Quận 2, HCM',
    'Quận 1, HCM',
    'Quận 3, HCM',
    // Thêm các mục tìm kiếm gần đây khác vào đây
  ];

  const renderItem = ({item}) => (
    <Pressable onPress={() => console.log('click')}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
        }}>
        <ClockSVG />
        <Text
          style={{
            marginLeft: 12,
            // color: theme.color.text.primary,
            ...textStyle.content.medium,
          }}>
          {item}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={{marginTop: 12}}>
      <Text
        style={{
          color: generalColor.primary,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          ...textStyle.content.medium,
        }}>
        Tìm kiếm gần đây
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default UserSearchScreen;

const styles = StyleSheet.create({
  item: {
    marginTop: 4,
    paddingHorizontal: 20,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  
    borderBottomColor: 'gray',
  },
});
