import {USER_DATA} from '../constants/userTypes';
import {ADD_CART_PRODUCTS} from '../constants/userTypes';
import {REMOVE_CART_PRODUCTS} from '../constants/userTypes';
import {INCREASE_CART} from '../constants/userTypes';
import {DECREASE_CART} from '../constants/userTypes';
import {ADD_TO_WISHLIST} from '../constants/userTypes';
import {REMOVE_FROM_WISHLIST} from '../constants/userTypes';
import {USER_ID} from '../constants/userTypes';

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
export const increaseCartProduct = itemId => ({
  type: INCREASE_CART,
  payload: itemId,
});
export const decreaseCartProduct = itemId => ({
  type: DECREASE_CART,
  payload: itemId,
});
export const addToWishlist = product => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});
export const removeFromWishlist = index => ({
  type: REMOVE_FROM_WISHLIST,
  payload: index,
});
export const userId = info => ({
  type: USER_ID,
  payload: info,
});
