import {USER_DATA} from '../constants/userTypes';
import {ADD_CART_PRODUCTS} from '../constants/userTypes';
import {REMOVE_CART_PRODUCTS} from '../constants/userTypes';
import {INCREASE_CART} from '../constants/userTypes';
import {DECREASE_CART} from '../constants/userTypes';
import {ADD_TO_WISHLIST} from '../constants/userTypes';
import {REMOVE_FROM_WISHLIST} from '../constants/userTypes';

export const userInfoDetails = userDetails => ({
  type: USER_DATA,
  payload: userDetails,
});
export const addCartProduct = product => ({
  type: ADD_CART_PRODUCTS,
  payload: product,
});
export const removeCartProduct = index => ({
  type: REMOVE_CART_PRODUCTS,
  payload: index,
});
export const increaseCartProduct = index => ({
  type: INCREASE_CART,
  payload: index,
});
export const decreaseCartProduct = index => ({
  type: DECREASE_CART,
  payload: index,
});
export const addToWishlist = product => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});
export const removeFromWishlist = index => ({
  type: REMOVE_FROM_WISHLIST,
  payload: index,
});
