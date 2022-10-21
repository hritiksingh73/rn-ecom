import {ActionTypes} from '../action/actionType';

const initialState = {
  registrationData: {
    fullName: '',
    email: '',
    Mobileno: '',
    Password: '',
  },
  userLoginData: {
    mail: '',
    pass: '',
  },
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGDATA:
      //console.log('hello', action.payload);
      return {
        ...state,
        registrationData: action.payload,
      };
    case ActionTypes.USERDATA:
      // console.log(action.payload)
      return {
        ...state,
        userLoginData: action.payload,
      };

    default:
      return state;
  }
};

export default counterReducer;
