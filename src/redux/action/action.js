import {ActionTypes} from '../constants/constants';

export const registerDetails = (name, email, number, password) => ({
  type: ActionTypes.REGISTER_DETAILS,
  payload: {name, email, number, password},
});

export const AddFruitsToCart = val => ({
  type: ActionTypes.ADD_FRUITS_TO_CART,
  payload: val,
});

export const IncrementCartItem = itemId => ({
  type: ActionTypes.ITEMS_INCRIMENT,
  payload: itemId,
});

export const DecrementCartItem = itemId => ({
  type: ActionTypes.ITEMS_DECREMENT,
  payload: itemId,
});

export const UserId = val => ({
  type: ActionTypes.USER_ID,
  payload: val,
});
