import {USER_DATA} from '../constants/userTypes';
import {ADD_CART_PRODUCTS} from '../constants/userTypes';
import {REMOVE_CART_PRODUCTS} from '../constants/userTypes';
import {INCREASE_CART} from '../constants/userTypes';
import {DECREASE_CART} from '../constants/userTypes';
import {ADD_TO_WISHLIST} from '../constants/userTypes';
import {REMOVE_FROM_WISHLIST} from '../constants/userTypes';
import {USER_ID} from '../constants/userTypes';

const initialState = {
  userDetails: {
    fullName: '',
    email: '',
    mobileNumber: '',
  },
  cartProducts: [],
  wishList: [],
  userID: '',
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      console.log('user details---->', action.payload);
      return {...state, userDetails: action.payload};

    case ADD_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: [...state.cartProducts, {...action.payload, qty: 1}],
      };

    case REMOVE_CART_PRODUCTS:
      const deletedProduct = state.filter(item => {
        return item !== action.payload;
      });
      return deletedProduct;

    case INCREASE_CART:
      let increaseItem = [...state.cartProducts];
      const increaseQty = increaseItem.map(item => {
        return item.id === action.payload
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item;
      });
      return {
        ...state,
        cartProducts: increaseQty,
      };

    case DECREASE_CART:
      let decreaseItem = [...state.cartProducts];
      const decreaseQty = decreaseItem.map(item => {
        return item.id === action.payload && item.qty > 0
          ? {
              ...item,
              qty: item.qty - 1,
            }
          : item;
      });
      return {
        ...state,
        cartProducts: decreaseQty,
      };

    case ADD_TO_WISHLIST:
      return {...state, wishList: [...state.wishList, action.payload]};

    case REMOVE_FROM_WISHLIST:
      let removeProduct = [...state.wishList];
      removeProduct.splice(action.index, 1);
      return {...state, wishList: removeProduct};

    case USER_ID:
      console.log('Reducer userid --> ', action.payload);
      return {
        ...state,
        userID: action.payload,
      };

    default:
      return state;
  }
};
export default userDataReducer;
