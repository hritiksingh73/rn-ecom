import {ActionType} from './ActionType';
export const loginUser = user => ({
  type: ActionType.LOGIN_USER,
  payload: user,
});

export const registerUser = user => ({
  type: ActionType.REGISTER_USER,
  payload: user,
});
