import {ActionType} from '../action/ActionType';
const InitialState = {
  loginpage: {
    Email: '',
    Password: '',
  },
  RegisterPage: {
    name: '',
    registeremail: '',
    cellNumber: '',
    password: '',
  },
  isFetching: false,
  productData: [],
};
const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      // console.log(loginpage);
      return {...state, loginpage: {...action.payload}};

    case ActionType.REGISTER_USER:
      return {...state, RegisterPage: {...action.payload}};

    case ActionType.SET_INIT_DATA:
      return {...state, productData: action.payload};

    case ActionType.SET_FETCHING:
      return {...state, isFetching: action.payload};

    default:
      return state;
  }
};

export default userReducer;