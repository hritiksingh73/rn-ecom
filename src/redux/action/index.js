import axios from "axios"

export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const SET_INIT_DATA = "SET_INIT_DATA"
export const SET_FETCHING = "SET_FETCHING"

// Actions are defined here
export const addTodoToStore = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}


export const getInitialData = () => async dispatch => {

  dispatch({
    type: SET_FETCHING,
    payload: true
  })
  try {
    const res = await axios.get("https://fakestoreapi.com/products")
    dispatch({
      type: "SET_INIT_DATA",
      payload: res.data
    })
    dispatch({
      type: SET_FETCHING,
      payload: false
    })

  } catch (error) {
    dispatch({
      type: "",
      payload: ""
    })
  }
}