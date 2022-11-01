import {combineReducers, applyMiddleware, createStore} from 'redux';
import CreateReducer from '../reducer/CreateReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userData: CreateReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;