import locationApi from '@src/api/province';
import textStyle from '@src/theme/text';
import {SCREEN_HEIGHT} from '@src/utils/constant';
import {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const ProvinceModal = ({isVisible, onSelect, onClose}) => {
  const [locations, setLocations] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        onSelect(item);
        onClose();
      }}>
      <Text
        style={[
          textStyle.content.medium,
          {color: 'black', paddingVertical: 4},
        ]}>
        {item.provinceName}
      </Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    locationApi
      .getProvinces()
      .then(response => {
        setLocations(response);
      })
      .catch(er => console.log('error', er));
  }, []);

  const filteredLocations = locations.filter(location =>
    location.provinceName.toLowerCase().includes(searchKey.toLowerCase()),
  );

  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn="slideInUp"
      backdropOpacity={0.2}
      useNativeDriver={true}
      animationOut="slideOutDown"
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={{margin: 0}}>
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          onChangeText={text => setSearchKey(text)}
          value={searchKey}
          placeholder="Tìm kiếm"
        />
        <FlatList
          renderItem={renderItem}
          data={filteredLocations}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
        />
      </View>
    </ReactNativeModal>
  );
};
const DistrictModal = ({isVisible, provinceId, onSelect, onClose}) => {
  console.log('province Id', provinceId);
  const [locations, setLocations] = useState([]);
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        onSelect(item);
        onClose();
      }}>
      <Text
        style={[
          textStyle.content.medium,
          {color: 'black', paddingVertical: 4},
        ]}>
        {item.districtName}
      </Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    if (isVisible && provinceId) {
      locationApi
        .getProvince(provinceId)
        .then(response => {
          setLocations(response.districts);
        })
        .catch(er => console.log('error', er));
    }
  }, [isVisible, provinceId]);
  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn="slideInUp"
      backdropOpacity={0.2}
      useNativeDriver={true}
      animationOut="slideOutDown"
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={{margin: 0}}>
      <View style={styles.container}>
        <FlatList
          renderItem={renderItem}
          data={locations}
          keyExtractor={(item, index) => index.toString()}
          showVertical={false}
          ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
        />
      </View>
    </ReactNativeModal>
  );
};
const WardModal = ({isVisible, districtId, onSelect, onClose}) => {
  const [locations, setLocations] = useState([]);
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        onSelect(item);
        onClose();
      }}>
      <Text
        style={[
          textStyle.content.medium,
          {color: 'black', paddingVertical: 4},
        ]}>
        {item.wardName}
      </Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    if (isVisible && districtId) {
      locationApi
        .getDistrict(districtId)
        .then(response => {
          setLocations(response.wards);
        })
        .catch(er => console.log('error', er));
    }
  }, [isVisible, districtId]);
  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn="slideInUp"
      backdropOpacity={0.2}
      useNativeDriver={true}
      animationOut="slideOutDown"
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={{margin: 0}}>
      <View style={styles.container}>
        <FlatList
          renderItem={renderItem}
          data={locations}
          keyExtractor={(item, index) => index.toString()}
          showVertical={false}
          ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
        />
      </View>
    </ReactNativeModal>
  );
};

export {DistrictModal, ProvinceModal, WardModal};

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    height: SCREEN_HEIGHT * 0.5,
    elevation: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  search: {
    height: 40,
    paddingHorizontal: 4,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 12,
  },
});
