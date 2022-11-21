import {ActionType} from '../action/ActionType';

const initialState = {
  userRecord: {
    fullname: '',
    email: '',
    mobileno: '',
    password: '',
  },
  cartProducts:[],
  
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_DETAILS:
      console.log('user details----->', action.payload);
      return {
        ...state,
        userRecord: action.payload,
      };


    case ActionType.ADD_TO_CART:
      return {...state, cartProducts: [...state.cartProducts, action.payload]};

    case ActionType.REMOVE_CART:
      const deleted = state.filter((item, index) =>{
        return index !== action.payload;
      });
        return deleted;

    default:
      return state;
  }
};

export default createReducer;
