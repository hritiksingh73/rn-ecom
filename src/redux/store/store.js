import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import UserReducer from "../reducer/UserReducer";

const rootReducer= combineReducers({
    userInfo: UserReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;