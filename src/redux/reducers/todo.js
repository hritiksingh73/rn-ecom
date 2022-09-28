import { ADD_TODO } from "../action";

const initialState = [
  { id: '1', title: 'Buy a Shoe', finished: false },
  { id: '2', title: 'Learn Javascript', finished: false },
  { id: '3', title: 'Learn React', finished: true },
  { id: '4', title: 'Learn React Native', finished: false },
  { id: '5', title: 'Build an App', finished: false },
];


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action)
      let todoItem = {
        title: action.payload,
        id: Math.random(1),
        finished: false,
      };

      return [...state, { ...todoItem }]

    //

    default:
      return state
  }
}

export default todoReducer