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
