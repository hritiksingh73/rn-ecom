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

export const increaseToCart = user => ({
  type: ActionType.INCREASE_CART,
  payload: user,
});

export const decreaseToCart = user => ({
  type: ActionType.DECREASE_CART,
  payload: user,
});



