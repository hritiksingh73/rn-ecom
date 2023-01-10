import {ActionTypes} from '../constants/constants';

const initialState = {
  selectedAddress: {},
  deliveryDate: {},
  deliveryTime: '',
  paymentMethod: '',

  orderDetails: [],
};

export const orderDetails = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.SELECTED_ADDRESS:
      console.log('reducer -> selectedAddress -> ', payload);
      return {
        ...state,
        selectedAddress: payload,
      };

    case ActionTypes.DELIVERY_DATE:
      console.log('reducer -> deliveryDate -> ', payload);
      return {
        ...state,
        deliveryDate: payload,
      };

    case ActionTypes.DELIVERY_TIME:
      console.log('reducer -> deliveryTime -> ', payload);
      return {
        ...state,
        deliveryTime: payload,
      };

    case ActionTypes.PAYMENT_METHOD:
      console.log('reducer -> paymentMethod -> ', payload);
      return {
        ...state,
        paymentMethod: payload,
      };

    case ActionTypes.CHECKOUT_DETAILS:
      console.log('reducer -> orderDetails -> ', payload);
      return {
        ...state,
        orderDetails: [...state.orderDetails, payload],
      };

    default:
      return state;
  }
};

export default orderDetails;


// orderDetails = [
//   {
//     orderID: '123',
//     selectedAddress: {
//       addressID: 'id1673369834645',
//       addressType: 'O',
//       apartment: 'O',
//       area: 'O',
//       block: 'O',
//       firstName: 'Oo',
//       lastName: 'O',
//       number: 'O',
//       street: 'Oo',
//     },
//     deliverySlot: {
//       date: '10th',
//       time: '8 AM - 9 AM',
//       day: 'Monday',
//       month: 'Jan',
//     },
//     paymentMethod: 'Cash On Delivery',
//   },
// ];
