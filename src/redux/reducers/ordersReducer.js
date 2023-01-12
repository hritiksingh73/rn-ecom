import {guidGenerator} from '../../utils/helperFunctions';
import {
  SET_SELECTED_ADDRESS,
  SET_DELIVERY_SLOT,
  SET_PAYMENT,
} from '../constants/userTypes';

const initialState = {
  latestOrder: {
    selectedAddress: '',
    deliverySlot: {},
    payment: '',
  },
  orders: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        latestOrder: {...state.latestOrder, selectedAddress: action.payload},
      };

    case SET_DELIVERY_SLOT:
      return {
        ...state,
        latestOrder: {...state.latestOrder, deliverySlot: action.payload},
      };

    case SET_PAYMENT:
      console.log('data--->', action.payload);
      const latestOrder = {
        ...state.latestOrder,
        payment: action.payload,
        orderId: guidGenerator(),
        status: 'placed',
      };
      return {
        ...state,
        orders: [...state.orders, latestOrder],
        // latestOrder: latestOrder,
      };
    default:
      return state;
  }
};
export default ordersReducer;
