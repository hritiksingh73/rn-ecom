import {ActionType} from './ActionType';

export const addUser =  (email,password) =>({
  type: ActionType.LOGIN_USER,
  payload: {email,password},
});

export const registerUser = (name,registeremail,cellNumber,password) => ({
  type: ActionType.REGISTER_USER,
  payload: {name,registeremail,cellNumber,password}
});
