import {
  ADD_ADDRESS,
  EDIT_ADDRESS,
  REMOVE_ADDRESS,
  USER_LOGGED_IN,
  USER_SIGNED_OUT,
} from '../constants';

import { guidGenerator } from '../../utils/helperFunctions';

const initialState = {
  isLoggedIn: false,
  personalDetails: {},
  addresses: [
    {
      id: 0,
      firstName: 'Moosa',
      lastName: 'Abdul Rehman',
      house: '2nd Floor',
      areaType: 'Building',
      area: 'WayNo 3109',
      block: 'Building No 475',
      street: 'Muskat',
      mobileNo: '9012121212',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      const { email, userId, name } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        personalDetails: {
          userId: userId,
          email: email,
          name: name,
        },
      };

    case USER_SIGNED_OUT:
      return {
        ...state,
      };
    case ADD_ADDRESS:
      let addressWithId = {
        ...action.payload,
        id: guidGenerator(),
      };

      return {
        ...state,
        addresses: [...state.addresses, addressWithId],
      };
    case REMOVE_ADDRESS:
      let updatedArray = state.addresses.filter(
        item => item.id !== action.payload.id,
      );
      console.log('Data after filter', updatedArray);

      return {
        ...state,
        addresses: updatedArray,
      };
    case EDIT_ADDRESS:
      // console.log('id', action.payload.id);

      // Get the index of the address to update
      const idxOfAddressTobeUpdated = state.addresses.findIndex(
        item => item.id === action.payload.id,
      );

      const updatedAddress = { ...action.payload.data };

      // update the address obj in array using splice
      let currentAddressArray = state.addresses;
      currentAddressArray.splice(idxOfAddressTobeUpdated, 0, updatedAddress);

      return {
        ...state,
        addresses: currentAddressArray,
      };

    default: {
      return state;
    }
  }
};
