import {ActionType} from '../action/ActionType';

const initialState = {
  userAddressList: [],
  selectDeliveryAddress:[],
};

export const userAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_ADDRESS:
      return {
        ...state,
        userAddressList: [...state.userAddressList, action.payload],
      };

    case ActionType.UPDATE_ADDRESS:
      const idxOfAddressTobeUpdated = state.userAddressList.findIndex(
        item => item.id === action.payload.id,
      );

      let currentAddress = [...state.userAddressList];
      currentAddress.splice(idxOfAddressTobeUpdated, 1, action.payload);

      return {
        ...state,
        userAddressList: currentAddress,
      };

    case ActionType.DELETE_ADDRESS:
      return {
        ...state,
        userAddressList: state.userAddressList.filter(
          item => item !== action.payload,
        ),
      };
      case ActionType.SELECT_DELIVERY_ADDRESS:
       console.log(action.payload)
      return {
        ...state,
        selectDeliveryAddress: [...state.selectDeliveryAddress, action.payload],
      };

    default:
      return state;
  }
};
export default userAddressReducer;
