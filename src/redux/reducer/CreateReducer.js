import {ActionType} from '../action/ActionType';

const initialState = {
  login: {
    email: '',
    password: '',
  },
  register: {
    fullname: '',
    email: '',
    mobileno: '',
    password: '',
  },
};

export const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      console.log(action.payload);
      return {
        ...state,
        login: action.payload,
      };

    case ActionType.REGISTER_USER:
      console.log(action.payload);
      return {
        ...state,
        register: action.payload,
      };
    default:
      return state;
  }
};

export default createReducer;
