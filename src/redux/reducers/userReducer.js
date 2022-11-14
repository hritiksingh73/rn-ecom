import {USER_DATA} from '../constants/userTypes';
import {ADD_CART_PRODUCTS} from '../constants/userTypes';
import {REMOVE_CART_PRODUCTS} from '../constants/userTypes';
import {INCREASE_CART} from '../constants/userTypes';
import {DECREASE_CART} from '../constants/userTypes';
import {ADD_TO_WISHLIST} from '../constants/userTypes';
import {REMOVE_FROM_WISHLIST} from '../constants/userTypes';

const initialState = {
  userDetails: {
    fullName: '',
    email: '',
    mobileNumber: '',
  },
  cartProducts: [],
  wishList: [],
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      console.log('user details---->', action.payload);
      return {...state, userDetails: action.payload};

    case ADD_CART_PRODUCTS:
      return {...state, cartProducts: [...state.cartProducts, action.payload]};

    case REMOVE_CART_PRODUCTS:
      const deletedProduct = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedProduct;

    case DECREASE_CART:
      let deleteData = [...state.cartProducts];
      deleteData.splice(action.index, 1);
      return {...state, cartProducts: deleteData};

    case ADD_TO_WISHLIST:
      return {...state, wishList: [...state.wishList, action.payload]};

    case REMOVE_FROM_WISHLIST:
      let removeProduct = [...state.wishList];
      removeProduct.splice(action.index, 1);
      return {...state, wishList: removeProduct};

    default:
      return state;
  }
};
export default userDataReducer;
