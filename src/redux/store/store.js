import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "../reducer/UserReducer";
import thunk from "redux-thunk";
const rootReducer= combineReducers({
    userInput: UserReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;