import {combineReducers, applyMiddleware, createStore} from 'redux';
import UserReducer from '../reducer/UserReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userData: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
