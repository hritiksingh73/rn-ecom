import { createStore, combineReducers } from "redux";
import UserReducer from "../reducer/DataHub";

const rootReducer= combineReducers({
    userInput: UserReducer,
})

const store = createStore(rootReducer);

export default store;