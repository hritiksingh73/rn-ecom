import {ActionType} from './ActionType';

export const addUser = (email, uid, name) => ({
  type: ActionType.LOGIN_USER,
  payload: {email, uid, name},
});

export const addItemToCart = data => ({
  type: ActionType.ADD_ITEM,
  payload: data,
});

export const removeItemFromCart = item => ({
  type: ActionType.REMOVE_ITEM,
  payload: item,
});

export const increaseItemQuantity = item => ({
  type: ActionType.INCREASE_ITEM_QUANTITY,
  payload: item,
});

export const decreaseItemCountInCartAction = item => ({
  type: ActionType.DECREASE_ITEM_QUANTITY,
  payload: item
})
