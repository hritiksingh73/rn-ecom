import {ActionTypes} from '../constants/constants';

const initialState = {
  userID: '',
  registerData: [],
};

export const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.REGISTER_DETAILS:
      const {name, email, number, password} = payload;
      console.log('Registerd Details ----->', name, email, number, password);
      return {
        ...state,
        registerData: [
          ...state.registerData,
          {
            Name: name,
            Email: email,
            Number: number,
            Password: password,
          },
        ],
      };

    case ActionTypes.USER_ID:
      return {
        ...state,
        userID: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
