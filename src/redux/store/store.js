import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userDataReducer from '../reducers/userReducer';
import cartProductReducer from '../reducers/cartProductReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const Store = configureStore({
  reducer: {
    userDataReducer: persistReducer(persistConfig, userDataReducer),
    cartProductReducer: persistReducer(persistConfig, cartProductReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default Store;
export const persistor = persistStore(Store);
