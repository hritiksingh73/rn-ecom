import {ActionType} from './ActionType';

export const addUser = (displayName, email, uid, phoneNumber, photoURL) => ({
  type: ActionType.LOGIN_USER,
  payload: {displayName, email, uid, phoneNumber, photoURL},
});

// export const registerUser = (
//   name,
//   registeremail,
//   cellNumber,
//   phoneNumber,
//   photoURL,
// ) => ({
//   type: ActionType.REGISTER_USER,
//   payload: {name, registeremail, cellNumber, phoneNumber, photoURL},
// });
