import {ActionTypes} from './actionType';

export const updateUser = dataone => ({
  type: ActionTypes.USERDATA,
  payload: dataone,
});
export const updateReg = dataone => ({
  type: ActionTypes.REGDATA,
  payload: dataone,
});
export const addtoCart = dataone => ({
  type: ActionTypes.ADDCART,
  payload: dataone,
});
export const IncCartItem = itemId => ({
  type: ActionTypes.INCREMENT_ITEM,
  payload: itemId,
});

export const DecCartItem = itemId => ({
  type: ActionTypes.DECREMENT_ITEM,
  payload: itemId,
});

export const RemoveItem = itemId => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: itemId,
});

export const updateAddress = itemId => ({
  type: ActionTypes.Add_Address,
  payload: itemId,
});

export const removeAddress = itemId => ({
  type: ActionTypes.REMOVE_ADDRESS,
  payload: itemId,
});

export const editAddress = (data, id) => ({
  type: ActionTypes.EDIT_ADDRESS,
  payload: data,
  id,
});
