import {LOGIN_DATA} from '../constants/userTypes';
import {REGISTER_DATA} from '../constants/userTypes';

export const userLogin = login => ({
  type: LOGIN_DATA,
  payload: login,
});

export const userRegister = register => ({
  type: REGISTER_DATA,
  payload: register,
});
