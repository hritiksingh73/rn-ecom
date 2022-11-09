import {ActionType} from '../action/ActionType';
const InitialState = {
  loginpage: {
    email: '',
    name: '',
    uid: '',
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
      console.log(action.payload);
      return {...state, loginpage: {...action.payload}};

    // case ActionType.REGISTER_USER:
    //   return {...state, RegisterPage: {...action.payload}};

    case ActionType.SET_INIT_DATA:
      return {...state, productData: action.payload};

    case ActionType.SET_FETCHING:
      return {...state, isFetching: action.payload};

    case ActionType.ADD_ITEM:
      return {...state, productData: action.payload};

    case ActionType.REMOVE_ITEM:
      return {
        ...state,
        deleteArray: action.payload.filter((item, index) => {
          index != action.payload;
        }),
      };
    default:
      return state;
  }
};

export default userReducer;
