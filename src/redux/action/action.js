import {ActionTypes} from '../constants/constants';

export const loginDetails = (email, password) =>({
  type: ActionTypes.LOGIN_DETAILS,
  payload: {email, password},
  
});

export const registerDetails = (name, email, number, password) => {
  // console.log('actionfile--->', email, password)
  ({
  type: ActionTypes.REGISTER_DETAILS,
  payload: {name, email, number, password},
})};
