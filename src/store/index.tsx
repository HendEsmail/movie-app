import { createStore } from "redux";
import SearchesReducer from "./reducers/SearchesReducer";

// const store = createStore(SearchesReducer);
// export default store;

import { persistStore, persistReducer } from 'redux-persist';
import { MMKVLoader } from "react-native-mmkv-storage";
import { rootReducer } from "./reducers/rootReducer";
 
// const storage = new MMKVLoader().initialize(); 
import { Storage } from 'redux-persist'
import { MMKV } from "react-native-mmkv"

const storage = new MMKV()

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    console.log("SET_ITEM", key, value)
    storage.set(key, value)
    return Promise.resolve(true)
  },
  getItem: (key) => {
    const value = storage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key) => {
    storage.delete(key)
    return Promise.resolve()
  },
}
const persistConfig = {
  key: 'store',
  storage:reduxStorage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}