import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "../reducer/UserReducer";
import thunk from "redux-thunk";
//import logger from 'redux-logger'
const rootReducer= combineReducers({
    userInfo: UserReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;