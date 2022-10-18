import {LOGIN_DATA} from '../constants/userTypes';
import {REGISTER_DATA} from '../constants/userTypes';

const initialState = {
  loginDetails: {
    email: '',
    password: '',
  },
  registerDetails: {
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
  },
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      console.log(action.payload);
      return {...state, loginDetails: action.payload};

    case REGISTER_DATA:
      console.log(action.payload);
      return {...state, registerDetails: action.payload};

    default:
      return state;
  }
};
export default userDataReducer;
