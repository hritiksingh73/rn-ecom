import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "../reducer/UserReducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
const rootReducer= combineReducers({
    userInfo: UserReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;