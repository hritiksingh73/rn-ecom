import {ActionTypes} from '../constants/constants';

const initialState = {
  screenIndex: 0,
  selectedAddress: {},
  deliveryDate: {},
  deliveryTime: '',
  paymentMethod: '',
  products: [],
  billingDetails: {},
  // All order Details
  orderDetails: [],
};

export const orderDetails = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.SELECTED_ADDRESS:
      // console.log('reducer -> selectedAddress -> ', payload);
      return {
        ...state,
        selectedAddress: payload,
      };

    case ActionTypes.DELIVERY_DATE:
      // console.log('reducer -> deliveryDate -> ', payload);
      return {
        ...state,
        deliveryDate: payload,
      };

    case ActionTypes.DELIVERY_TIME:
      // console.log('reducer -> deliveryTime -> ', payload);
      return {
        ...state,
        deliveryTime: payload,
      };

    case ActionTypes.PAYMENT_MODE:
      // console.log('reducer -> paymentMethod -> ', payload);
      return {
        ...state,
        paymentMethod: payload,
      };

    case ActionTypes.ORDERED_PRODUCTS:
      // console.log('reducer -> products -> ', payload);
      return {
        ...state,
        products: payload,
      };

    case ActionTypes.ORDERED_PRODUCTS_PRICE_DETAILS:
      // console.log('reducer -> billingDetails -> ', payload);
      return {
        ...state,
        billingDetails: payload,
      };

    case ActionTypes.USER_ORDER_DETAILS:
      // console.log('reducer -> orderDetails -> ', payload);
      return {
        ...state,
        orderDetails: [...state.orderDetails, payload],
      };

    case ActionTypes.COMPONENT_CHANGE_BY_INDEX:
      // console.log('reducer -> screenIndex -> ', payload);
      return {
        ...state,
        screenIndex: payload,
      };

    default:
      return state;
  }
};

export default orderDetails;
