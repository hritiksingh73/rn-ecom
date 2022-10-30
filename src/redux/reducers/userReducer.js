import {USER_DATA} from '../constants/userTypes';

const initialState = {
  userDetails: {
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
  },
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      console.log('user details---->', action.payload);
      return {...state, userDetails: action.payload};

    default:
      return state;
  }
};
export default userDataReducer;
