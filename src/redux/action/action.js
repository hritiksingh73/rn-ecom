import {ActionTypes} from '../constants/constants';

export const UserId = val => ({
  type: ActionTypes.USER_ID,
  payload: val,
});

export const registerDetails = (name, email, number, password) => ({
  type: ActionTypes.REGISTER_DETAILS,
  payload: {name, email, number, password},
});

export const AddFruitsToCart = val => ({
  type: ActionTypes.ADD_FRUITS_TO_CART,
  payload: val,
});

export const IncrementCartItem = val => ({
  type: ActionTypes.ITEMS_INCRIMENT,
  payload: val,
});

export const DecrementCartItem = val => ({
  type: ActionTypes.ITEMS_DECREMENT,
  payload: val,
});

export const RemoveCartItem = val => ({
  type: ActionTypes.REMOVE_CART_ITEM,
  payload: val
});




