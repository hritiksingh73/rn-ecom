//import {combineReducers, applyMiddleware, createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../reducer/UserReducer';
//import thunk from 'redux-thunk';

//const rootReducer = combineReducers({
  const store = configureStore({
    reducer:{
         userData: UserReducer,
    },
});

//const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
