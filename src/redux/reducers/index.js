import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

import user from './user';

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, user),
});

export default rootReducer;
