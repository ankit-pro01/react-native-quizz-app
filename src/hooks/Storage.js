import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStoreData = async (dataKey, value) => {
  try {
    await AsyncStorage.setItem(dataKey, value);
  } catch (e) {
    console.log('error', e);
  }
};

export const getStoreData = async dataKey => {
  try {
    const value = await AsyncStorage.getItem(dataKey);
    if (value !== null) {
      return value;
    } else {
      console.log('not found');
    }
  } catch (e) {
    // error reading value
    console.log('error', e);
  }
};
