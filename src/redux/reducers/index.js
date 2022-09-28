import { combineReducers } from "redux"


import todoReducer from "./todo";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer
})

export default rootReducer