import {ActionType} from '../action/ActionType';
import guidGenerator from '../../utils/guidGenerator.jsx';

const initialState = {
  orderHistory: [],
  orders: [
    {
      orderID: '',
      selectedAddress: {},
      deliveryDate: {},
      deliveryTime: {},
      //payment: '',
      products: [],
      billingDetails: {},
    },
  ],
};

const orderReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.SET_SELECTED_ADDRESS:
      console.log('selectedAddress-->', action.payload);

      return {
        ...state,
        orders: {...state.orders, selectedAddress: action.payload},
      };

    case ActionType.DELIVERY_DATE:
      console.log('deliveryDate-->', action.payload);
      return {
        ...state,
        orders: {...state.orders, deliveryDate: action.payload},
      };

    case ActionType.DELIVERY_TIME:
      console.log('deliveryTime-->', action.payload);

      return {
        ...state,
        orders: {...state.orders, deliveryTime: action.payload},
      };

    case ActionType.ORDER_ID:
      console.log('order_Id--->>>>>', action.payload);
      return {
        ...state,
        orders: {...state.orders, orderID: action.payload},
      };

    case ActionType.PAYMENT:
      console.log('payment-->', action.payload);
      return {
        ...state,
        orders: {...state.orders, payment: action.payload},
      };

    case ActionType.ORDER_HISTORY:
      console.log('orderHistory -> ', payload);
      return {...state, orderHistory: [...state.orderHistory, action.payload]};

    case ActionType.ORDER_PRODUCT:
      console.log('product-->', action.payload);

      return {
        ...state,
        orders: {products: action.payload},
      };

    case ActionType.PRODUCT_BILLING_DETAILS:
      console.log('product details-->', action.payload);

      return {
        ...state,
        orders: {billingDetails: action.payload},
      };

    default:
      return state;
  }
};

export default orderReducer;
