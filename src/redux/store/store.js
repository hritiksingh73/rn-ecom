import {combineReducers} from '@reduxjs/toolkit';
import {createStore} from '@reduxjs/toolkit';

import userDataReducer from '../reducers/userReducer';
import cartProductReducer from '../reducers/cartProductReducer';

const rooteReducer = combineReducers({
  userDataReducer: userDataReducer,
  cartProductReducer: cartProductReducer,
});
const Store = createStore(rooteReducer);
export default Store;
