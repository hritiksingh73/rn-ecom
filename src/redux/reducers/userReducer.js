import {USER_DATA} from '../constants/userTypes';
import {USER_ID} from '../constants/userTypes';

const initialState = {
  userDetails: {
    fullName: '',
    email: '',
    mobileNumber: '',
    userID: '',
  },
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      console.log('user details---->', action.payload);
      return {...state, userDetails: action.payload};

    case USER_ID:
      console.log('Reducer userid --> ', action.payload);
      return {
        ...state,
        userID: action.payload,
      };

    default:
      return state;
  }
};
export default userDataReducer;
