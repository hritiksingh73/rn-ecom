import {ActionTypes} from '../constants/constants';

const initialState = {
  registerData: [
    {
      Name: '',
      Email: '',
      Number: '',
      Password: '',
    },
    {
      Name: 'praveen',
      Email: 'praveen@gmail.com',
      Number: '9999999999',
      Password: '99999999',
    },
  ],
};

export const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
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
