import {ActionType} from './ActionType';
import axios from 'axios';

export const userFullInfo = user => ({
  type: ActionType.USER_DETAILS,
  payload: user,
});

export const addToCart = user => ({
  type: ActionType.ADD_TO_CART,
  payload: user,
});

export const removeToCart = user => ({
  type: ActionType.REMOVE_CART,
  payload: user,
});

export const increaseToCart = item => ({
  type: ActionType.INCREASE_CART_ITEM,
  payload: item,
});

export const decreaseToCart = item => ({
  type: ActionType.DECREASE_CART_ITEM,
  payload: item,
});

export const userCreate = id => ({
  type: ActionType.USER_ID,
  payload: id,
});

export const getInitialData = data => {
  return dispatch => {
    try {
      const response = fetch(
        'https://grocery-backend-in.vercel.app/products/popular',
      )
        .then(result => result.json())
        .then(response =>
          dispatch({type: ActionType.GET_PRODUCTS, payload: response}),
        );
    } catch (error) {
      console.log(error);
    }
  };
};

export const addAddress = user => ({
  type: ActionType.ADD_ADDRESS,
  payload: user,
});

export const editAddress = user => ({
  type: ActionType.UPDATE_ADDRESS,
  payload: user,
});

export const deleteAddress = user => ({
  type: ActionType.DELETE_ADDRESS,
  payload: user,
});

export const selectAddress = address => ({
  type: ActionType.SELECT_ADDRESS,
  payload: address,
});

export const setSelectedAddress = data => ({
  type: ActionType.SET_SELECTED_ADDRESS,
  payload: data,
});

export const deliveryDate = date => ({
  type: ActionType.DELIVERY_DATE,
  payload: date,
});

export const deliveryTime = time => ({
  type: ActionType.DELIVERY_TIME,
  payload: time,
});
export const deliverySlot = time => ({
  type: ActionType.DELIVERY_SLOT,
  payload: time,
});

export const payment = payment => ({
  type: ActionType.PAYMENT,
  payload: payment,
});

export const orderId = (id, payment) => ({
  type: ActionType.ORDER_ID,
  payload: {id, payment},
});

export const orderHistory = details => ({
  type: ActionType.ORDER_HISTORY,
  payload: details,
});

export const orderProduct = product => ({
  type: ActionType.ORDER_PRODUCT,
  payload: product,
});

export const productBillingDetails = details => ({
  type: ActionType.PRODUCT_BILLING_DETAILS,
  payload: details,
});
