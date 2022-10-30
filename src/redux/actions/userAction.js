import {USER_DATA} from '../constants/userTypes';

export const userInfoDetails = userDetails => ({
  type: USER_DATA,
  payload: userDetails,
});
