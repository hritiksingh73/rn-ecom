import {ActionTypes} from '../constants/constants';

export const registerDetails = (name, email, number, password) => ({
  type: ActionTypes.REGISTER_DETAILS,
  payload: {name, email, number, password},
});
