import {ActionType} from '../action/ActionType';
import guidGenerator from '../../utils/guidGenerator.jsx';

const initialState = {
  latestOrders: {
    orderID: '',
    selectedAddress: {},
    deliveryDate: {},
    deliveryTime: {},
    payment: '',
    billingDetails: {},
  },
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.SET_SELECTED_ADDRESS:
      console.log('selectedAddress-->', action.payload);

      return {
        ...state,
        latestOrders: {...state.latestOrders, selectedAddress: action.payload},
      };

    case ActionType.DELIVERY_DATE:
      console.log('deliveryDate-->', action.payload);
      return {
        ...state,
        latestOrders: {...state.latestOrders, deliveryDate: action.payload},
      };

    case ActionType.DELIVERY_TIME:
      console.log('deliveryTime-->', action.payload);

      return {
        ...state,
        latestOrders: {...state.latestOrders, deliveryTime: action.payload},
      };

    case ActionType.ORDER_ID:
      console.log('order_Id--->>>>>', action.payload);
      return {
        ...state,
        latestOrders: {...state.latestOrders, orderID: action.payload},
      };

    case ActionType.SET_PAYMENT:
      console.log('payment-->', action.payload);

      return {
        ...state,
        latestOrders: {...state.latestOrders, payment: action.payload},
      };

    case ActionType.CHECKOUT_DETAILS:
      console.log('checkout -> ', action.payload);
      return {...state, orders: [...state.orders, action.payload]};

    case ActionType.CART_BILLING_DETAILS:
      console.log('product details-->', action.payload);

      return {
        ...state,
        latestOrders: {...state.latestOrders, billingDetails: action.payload},
      };

    default:
      return state;
  }
};

export default orderReducer;
