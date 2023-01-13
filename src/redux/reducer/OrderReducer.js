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
  ]
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    /////////////////Address Section///////////////////////

    case ActionType.SELECTED_DELIVERY_ADDRESS:
      //console.log('selectedDeliveryAddress=======>>>>>>>>>', action.payload);
      return {
        ...state,
        orders: {...state.orders, selectedDeliveryAddress: action.payload},
      };

    case ActionType.SELECTED_DELIVERY_DATE:
      //console.log('SELECTED_DELIVERY_DATE=======>>>>>', action.payload);
      return {
        ...state,
        orders: {...state.orders, deliveryDateSlot: action.payload},
      };

    case ActionType.SELECTED_DELIVERY_TIME:
      //console.log('SELECTED_DELIVERY_TIME=======>>>>>', action.payload);
      return {
        ...state,
        orders: {...state.orders, deliveryTimeSlot: action.payload},
      };
    case ActionType.ORDER_ID:
      //console.log('ORDER_ID=======>>>>>', action.payload);
      return {
        ...state,
        orders: {...state.orders, orderID: action.payload},
      };

    case ActionType.PRODUCT_BILLING_DETAILS:
      //console.log("FINAL_CHECKOUT_ORDER_DETAIL-->>>>>",action.payload)
      return {
        ...state,
        orders: {...state.orders, orderDetails: action.payload},
      };

    default:
      return state;
  }
};

export default userReducer;
