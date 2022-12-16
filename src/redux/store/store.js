import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducer/userReducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userReducer),
  },
})

export default store;
export const persistor = persistStore(store);

// import {configureStore} from '@reduxjs/toolkit';
// import userReducer from '../reducer/userReducer';
// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });
// export default store;