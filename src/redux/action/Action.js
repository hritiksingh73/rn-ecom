import {ActionType} from './ActionType';
import axios from 'axios';

export const userFullInfo = (fullname, email, mobileno, uid) => ({
  type: ActionType.USER_DETAILS,
  payload: {fullname, email, mobileno, uid},
});

export const addToCart = user => ({
  type: ActionType.ADD_TO_CART,
  payload: user,
});

export const removeToCart = user => ({
  type: ActionType.REMOVE_CART,
  payload: user,
});

export const increaseToCart = item => ({
  type: ActionType.INCREASE_CART_ITEM,
  payload: item,
});

export const decreaseToCart = item => ({
  type: ActionType.DECREASE_CART_ITEM,
  payload: item,
});

// export const userId = id => ({
//   type: ActionType.USER_ID,
//   payload: id,
// });

export const addToWishlist = product => ({
  type: ActionType.ADD_TO_WISHLIST,
  payload: product,
});

export const removeToWishlist = index => ({
  type: ActionType.REMOVE_TO_WISHLIST,
  payload: index,
});

export const addAddress = user => ({
  type: ActionType.ADD_ADDRESS,
  payload: user,
});

export const editAddress = user => ({
  type: ActionType.UPDATE_ADDRESS,
  payload: user,
});

export const deleteAddress = user => ({
  type: ActionType.DELETE_ADDRESS,
  payload: user,
});

export const selectAddress = address => ({
  type: ActionType.SELECT_ADDRESS,
  payload: address,
});

export const setSelectedAddress = data => ({
  type: ActionType.SET_SELECTED_ADDRESS,
  payload: data,
});

export const deliveryDate = date => ({
  type: ActionType.DELIVERY_DATE,
  payload: date,
});

export const deliveryTime = time => ({
  type: ActionType.DELIVERY_TIME,
  payload: time,
});

export const getPayment = id => ({
  type: ActionType.SET_PAYMENT,
  payload: id,
});

export const orderId = (id, payment) => ({
  type: ActionType.ORDER_ID,
  payload: {id, payment}
});

export const checkoutDetails = details => ({
  type: ActionType.CHECKOUT_DETAILS,
  payload: details,
});


export const cartBillingDetails = details => ({
  type: ActionType.CART_BILLING_DETAILS,
  payload: details,
});
