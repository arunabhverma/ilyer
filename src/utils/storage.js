import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN = "LOGIN";
export const NEWSSEARCH = "NEWSSEARCH";

export const get = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error(e);
  }
};

export const save = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};
