import {ActionType} from '../action/ActionType';
const InitialState = {
  orders: [
    {
      selectedDeliveryAddress: {},
      orderDetails: {},
      deliveryDateSlot: {},
      deliveryTimeSlot: {},
      orderID: '',
    },
  ],
  orderHistory: [],
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    /////////////////Address Section/////////////////

    case ActionType.SELECTED_DELIVERY_ADDRESS:
      return {
        ...state,
        orders: {...state.orders, selectedDeliveryAddress: action.payload},
      };

    case ActionType.SELECTED_DELIVERY_DATE:
      return {
        ...state,
        orders: {...state.orders, deliveryDateSlot: action.payload},
      };

    case ActionType.SELECTED_DELIVERY_TIME:
      return {
        ...state,
        orders: {...state.orders, deliveryTimeSlot: action.payload},
      };
    case ActionType.ORDER_ID:
      return {
        ...state,
        orders: {...state.orders, orderID: action.payload},
      };

    case ActionType.PRODUCT_BILLING_DETAILS:
      return {
        ...state,
        orders: {...state.orders, orderDetails: action.payload},
      };

    case ActionType.PRODUCT_ORDER_HISTORY:
      //console.log("Order History from Reducer======>>>>>",action.payload);
      return {...state, orderHistory: [...state.orderHistory, action.payload]};

    default:
      return state;
  }
};

export default userReducer;
