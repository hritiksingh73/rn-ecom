export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

// Actions are defined here
export const addTodoToStore = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  }

}