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
      return {
        ...state,
        cartProducts: state.cartProducts.filter( item => action.payload !== item.id)
      };

      case ActionType.ADD_TO_CART:
        return {...state, cartProducts: [...state.cartProducts, action.payload]};
  
      

    default:
      return state;
  }
};

export default createReducer;
