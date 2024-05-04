import locationApi from '@src/api/province';
import textStyle from '@src/theme/text';
import {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const ProvinceModal = ({isVisible, onSelect, onClose}) => {
  const [locations, setLocations] = useState([]);
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        onSelect(item);
      }}>
      <Text
        style={[textStyle.content.large, {color: 'black', paddingVertical: 4}]}>
        {item.provinceName}
      </Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    if (isVisible) {
      locationApi
        .getProvinces()
        .then(response => {
          setLocations(response.data);
        })
        .catch(er => console.log('error', er));
    }
  }, [isVisible]);
  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn="slideInUp"
      backdropOpacity={0}
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
const DistrictModal = ({isVisible, provinceId, onSelect, onClose}) => {
  const [locations, setLocations] = useState([]);
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        onSelect(item);
      }}>
      <Text
        style={[textStyle.content.large, {color: 'black', paddingVertical: 4}]}>
        {item.districtName}
      </Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    if (isVisible && provinceId) {
      locationApi
        .getProvince(provinceId)
        .then(response => {
          setLocations(response.data.districts);
        })
        .catch(er => console.log('error', er));
    }
  }, [isVisible, provinceId]);
  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn="slideInUp"
      backdropOpacity={0}
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
        onPress(item);
      }}>
      <Text
        style={[textStyle.content.large, {color: 'black', paddingVertical: 4}]}>
        {item.wardName}
      </Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    if (isVisible && districtId) {
      locationApi
        .getDistrict(districtId)
        .then(response => {
          setLocations(response.data.wards);
        })
        .catch(er => console.log('error', er));
    }
  }, [isVisible, districtId]);
  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn="slideInUp"
      backdropOpacity={0}
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
    height: 300,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
