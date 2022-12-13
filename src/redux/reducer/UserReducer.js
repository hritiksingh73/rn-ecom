import {ActionType} from '../action/ActionType';

const initialState = {
  userRecord: {
    fullname: '',
    email: '',
    mobileno: '',
    uid: '',
  },
  cartProducts: [],
  quantity: '',
  userID: '',
};

const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.USER_DETAILS:
      // console.log('user details----->', action.payload);
      return {
        ...state,
        userRecord: payload,
      };

    case ActionType.ADD_TO_CART:
      return {...state, cartProducts: [...state.cartProducts, action.payload]};

    case ActionType.REMOVE_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(item => payload !== item.id),
      };

    case ActionType.INCREASE_CART_ITEM:
      const increaseItem = state.cartProducts.map(item => {
        return item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      });
      return {
        ...state,
        cartProducts: increaseItem,
      };

    case ActionType.DECREASE_CART_ITEM:
      const decreaseItem = state.cartProducts.map(item => {
        return item.id === action.payload && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item;
      });
      return {
        ...state,
        cartProducts: decreaseItem,
      };

    case ActionType.USER_ID:
      return {
        ...state,
        userID: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
