import {ActionTypes} from '../constants/constants';

export const registerDetails = (name, email, number, password) => ({
  type: ActionTypes.REGISTER_DETAILS,
  payload: {name, email, number, password},
});

export const AddFruitsToCart = (val) => ({
  type: ActionTypes.ADD_FRUITS_TO_CART,
  payload: val,
});

export const NumberOfItems = (number, index, itemId) => ({
  type: ActionTypes.NUMBER_OF_ITEMS,
  payload: {number, index, itemId},
});

