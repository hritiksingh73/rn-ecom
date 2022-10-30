import {ActionType} from '../action/ActionType';
const InitialState = {
  loginpage: {
    Email: '',
    displayName: '',
    uid: '',
    photourl:'',
    phoneNumber:''
  },
  // RegisterPage: {
  //   name: '',
  //   registeremail: '',
  //   cellNumber: '',
  //   password: '',
  // },
  isFetching: false,
  productData: [],
};
const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
     // const {displayName,email, phonenumber } = payload;
      return {...state, loginpage: {...action.payload}};

    // case ActionType.REGISTER_USER:
    //   return {...state, RegisterPage: {...action.payload}};

    case ActionType.SET_INIT_DATA:
      return {...state, productData: action.payload};

    case ActionType.SET_FETCHING:
      return {...state, isFetching: action.payload};

    default:
      return state;
  }
};

export default userReducer;
