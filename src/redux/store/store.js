import {combineReducers} from '@reduxjs/toolkit';
import userDataReducer from '../reducers/userReducer';
import {createStore} from '@reduxjs/toolkit';

const rooteReducer = combineReducers({
  userDataReducer: userDataReducer,
});
const Store = createStore(rooteReducer);
export default Store;
