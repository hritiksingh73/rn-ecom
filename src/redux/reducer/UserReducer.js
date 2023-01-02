import {ActionType} from '../action/ActionType';

const initialState = {
  userRecord: {
    fullname: '',
    email: '',
    mobileno: '',
    uid: '',
    userID: '',
  },
  address: [],
};

const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.USER_DETAILS:
      // console.log('user details----->', action.payload);
      return {
        ...state,
        userRecord: payload,
      };

    case ActionType.USER_ID:
      return {
        ...state,
        userID: payload,
      };

    case ActionType.ADD_USER:
      //console.log(action.payload);
      return {...state, address: [...state.address, action.payload]};

    case ActionType.EDIT_USER:
      let userData = [...state.address];
      userData.splice(action.index, 1, action.payload);
      return {...state, address: userData};

    case ActionType.DELETE_USER:
      return {
        ...state,
        address: state.address.filter(item => item !== payload),
      };

    default:
      return state;
  }
};

export default userReducer;
