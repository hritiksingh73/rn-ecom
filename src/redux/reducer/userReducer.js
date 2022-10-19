import {ActionTypes} from '../constants/constants';

const initialState = {
  loginData: [],
  registerData: [
    // {
    //   Name: 'praveen',
    //   Email: 'P',
    //   Number: '123',
    //   Password: '123',
    // },
  ],
};

export const userReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ActionTypes.LOGIN_DETAILS:
      return {
        ...state,
        loginData: [
          ...state.loginData,
          {
            Email: payload.email,
            Password: payload.password,
          },
        ],
      };

    case ActionTypes.REGISTER_DETAILS:
      return {
        ...state,
        registerData: [
          ...state.registerData,
          {
            Name: payload.name,
            Email: payload.email,
            Number: payload.number,
            Password: payload.password,
          },
        ],
      };

    default:
      return state;
  }
};

export default userReducer;
