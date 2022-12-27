import {
  USER_DATA,
  ADD_CART_PRODUCTS,
  REMOVE_CART_PRODUCTS,
  INCREASE_CART,
  DECREASE_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  USER_ID,
} from '../constants/userTypes';

export const userInfoDetails = userDetails => ({
  type: USER_DATA,
  payload: userDetails,
});
export const addCartProduct = product => ({
  type: ADD_CART_PRODUCTS,
  payload: product,
});
export const removeCartProduct = id => ({
  type: REMOVE_CART_PRODUCTS,
  payload: id,
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
