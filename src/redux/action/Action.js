import {ActionType} from './ActionType';

export const addUser = (email, uid, name) => ({
  type: ActionType.LOGIN_USER,
  payload: {email,uid, name},
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
