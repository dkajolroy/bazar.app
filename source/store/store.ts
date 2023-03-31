import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import counterSlice from '../slices/counterSlice';
import themeSlice from '../slices/themeSlice';

//Config persist settings
let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
//Set all reducers
let rootReducer = combineReducers({
  theme: themeSlice,
  counter: counterSlice,
});
//configure store
let persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
