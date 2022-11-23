import {ActionType} from './ActionType';

export const userFullInfo = user => ({
  type: ActionType.USER_DETAILS,
  payload: user,
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
  type: ActionType.INCREASE_CART,
  payload: item,
});

export const decreaseToCart = item => ({
  type: ActionType.DECREASE_CART,
  payload: item,
});



