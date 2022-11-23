import {ActionTypes} from '../action/actionType';

const initialState = {
  registrationData: {
    fullName: '',
    email: '',
    Mobileno: '',
    Password: '',
  },
  userLoginData: {
    mail: '',
    pass: '',
  },
  cart: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGDATA:
      //console.log('hello', action.payload);
      return {
        ...state,
        registrationData: action.payload,
      };
    case ActionTypes.USERDATA:
      //console.log(action.payload);
      return {
        ...state,
        userLoginData: action.payload,
      };
    case ActionTypes.ADDCART:
      //console.log(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export default counterReducer;
