import {ActionType} from '../action/ActionType';

const initialState = {
  userRecord: {
    fullname: '',
    email: '',
    mobileno: '',
    password: '',
  },
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_DETAILS:
      console.log('user details----->', action.payload);
      return {
        ...state,
        userRecord: action.payload,
      };
    default:
      return state;
  }
};

export default createReducer;
