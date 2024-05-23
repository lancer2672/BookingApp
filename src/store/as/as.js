// storage.js :)), replace by calling api
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getKey = (hotelId, roomId) => {
  return `room/${hotelId}/${roomId}`;
};
export const addItem = async (key, value) => {
  try {
    console.log('KeyV', key, value);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error adding item to AsyncStorage', e);
  }
};

export const getAllValuesMatchingPattern = async pattern => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    console.log('AllKeys', allKeys);
    const matchingKeys = allKeys.filter(key => key.startsWith(pattern));
    const values = await Promise.all(
      matchingKeys.map(async key => {
        const value = await AsyncStorage.getItem(key);
        return JSON.parse(value); // Chỉ trả về giá trị, không kèm key
      }),
    );

    return values;
  } catch (error) {
    console.error('Error getting values from AsyncStorage:', error);
    return [];
  }
};

// Sử dụng hàm này với pattern là chuỗi bắt đầu của key bạn muốn lấy
getAllValuesMatchingPattern('room').then(values => {
  console.log('Matching values:', values);
});

export const getItem = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error getting item from AsyncStorage', e);
  }
};
export const deleteAllMatchingPattern = async pattern => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const matchingKeys = allKeys.filter(key => key.startsWith(pattern));

    await Promise.all(
      matchingKeys.map(async key => {
        await AsyncStorage.removeItem(key);
      }),
    );

    console.log('All values matching pattern deleted successfully.');
  } catch (error) {
    console.error('Error deleting values from AsyncStorage:', error);
  }
};
export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing item from AsyncStorage', e);
  }
};
