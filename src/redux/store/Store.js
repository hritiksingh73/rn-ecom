import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducer/userReducer';

const store = configureStore({
  reducer: {
    userData: userReducer,
  },
});

export default store;
