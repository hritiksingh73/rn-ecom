import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import rootReducer from "./reducers"

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store





// import { configureStore } from '@reduxjs/toolkit'
// import todoSlice from './reducers/todoSlice'

// const store = configureStore({
//   reducer: {
//     todo: todoSlice,
//   },
// })

// export default store