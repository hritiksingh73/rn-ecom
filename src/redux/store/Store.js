import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducer/userReducer';
import cartReducer from '../reducer/cartReducer'

const store = configureStore({
  reducer: {
    userData: userReducer,
    cartData: cartReducer
  },
});

export default store;
