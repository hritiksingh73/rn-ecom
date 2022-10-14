import { ADD_TODO, SET_FETCHING, SET_INIT_DATA } from "../action";

const initialState = {
  loginData: {
    email: "",
    pass: ""
  },
  registerData: {
    name: "",
    phone: ""
  }
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_TODO:
    //   console.log(action)
    //   let todoItem = {
    //     title: action.payload,
    //     id: Math.random(1),
    //     finished: false,
    //   };
    //   return [...state, { ...todoItem }]
    case SET_INIT_DATA:
      console.log(action.payload)
      return {
        ...state
      }
    case SEt_EMAIL:
      const { email, pass } = payload
      return {
        ...state,
        email: action.payload,
        pass: acion.payload.
      }
    default:
      return state
  }
}

export default todoReducer