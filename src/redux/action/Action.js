import {ActionType} from './ActionType';

export const addUser = (email, uid, name) => ({
  type: ActionType.LOGIN_USER,
  payload: {email, uid, name},
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

export const addItemToCart = data => ({
  type: ActionType.ADD_ITEM,
  payload: data,
});
export const removeItemFromCart = index => ({
  type: ActionType.REMOVE_ITEM,
  payload: index,
});
