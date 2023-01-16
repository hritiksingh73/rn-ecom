import {ActionType} from '../action/ActionType';
import {guidGenerator} from '../../utils/guidGenerator.jsx';

const initialState = {
  userRecord: {
    fullname: '',
    email: '',
    mobileno: '',
    uid: '',
    userID: '',
  },
  userAddress: [],
  selectAddress: [],
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

    case ActionType.ADD_ADDRESS:
      //console.log(action.payload);

      return {...state, userAddress: [...state.userAddress, action.payload]};

    case ActionType.UPDATE_ADDRESS:
      //console.log(action.payload);
      const addressUpdated = state.userAddress.findIndex(
        item => item.id === action.payload.id,
      );
      let currentAddress = [...state.userAddress];
      currentAddress.splice(addressUpdated, 1, action.payload);

      return {
        ...state,
        userAddress: currentAddress,
      };

    case ActionType.DELETE_ADDRESS:
      return {
        ...state,
        userAddress: state.userAddress.filter(item => item !== payload),
      };

    case ActionType.SELECT_ADDRESS:
      //console.log(action.payload)
      return {
        ...state,
        selectAddress: [...state.selectAddress, action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
