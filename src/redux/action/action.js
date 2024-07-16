import {ActionTypes} from '../constants/constants';

// user Details
export const userId = val => ({
  type: ActionTypes.USER_ID,
  payload: val,
});

export const userDetails = (name, email, number, password) => ({
  type: ActionTypes.USER_DETAILS,
  payload: {name, email, number, password},
});

// cart Details
export const addItemsToCart = val => ({
  type: ActionTypes.ADD_FRUITS_TO_CART,
  payload: val,
});

export const increaseNoOfCartItem = val => ({
  type: ActionTypes.ITEMS_INCRIMENT,
  payload: val,
});

export const decreaseNoOfCartItem = val => ({
  type: ActionTypes.ITEMS_DECREMENT,
  payload: val,
});

export const removeSingleCartItem = val => ({
  type: ActionTypes.REMOVE_CART_ITEM,
  payload: val,
});

export const clearAllCartItem = () => ({
  type: ActionTypes.REMOVE_ALL_CART_ITEM,
  payload: true,
});

// Address Management
export const manageAddresses = val => ({
  type: ActionTypes.MANAGE_ADDRESSES,
  payload: val,
});

export const deleteAddress = val => ({
  type: ActionTypes.DELETE_ADDRESS,
  payload: val,
});

export const updateAddress = (ID, data) => ({
  type: ActionTypes.UPDATE_ADDRESS,
  payload: {ID, data},
});

// component change conditionally
export const componentChangeByIndex = val => ({
  type: ActionTypes.COMPONENT_CHANGE_BY_INDEX,
  payload: val,
});

// CART -> CHECKOUT_SCREEN
export const selectedAddress = val => ({
  type: ActionTypes.SELECTED_ADDRESS,
  payload: val,
});

export const deliveryDate = val => ({
  type: ActionTypes.DELIVERY_DATE,
  payload: val,
});

export const deliveryTime = val => ({
  type: ActionTypes.DELIVERY_TIME,
  payload: val,
});

export const paymentMode = val => ({
  type: ActionTypes.PAYMENT_MODE,
  payload: val,
});

export const userOrderDetails = val => ({
  type: ActionTypes.USER_ORDER_DETAILS,
  payload: val,
});

export const orderedProducts = val => ({
  type: ActionTypes.ORDERED_PRODUCTS,
  payload: val,
});

export const orderedProductsPricing = val => ({
  type: ActionTypes.ORDERED_PRODUCTS_PRICE_DETAILS,
  payload: val,
});

// add to Wishlist
export const addToWishlist = val => ({
  type: ActionTypes.ADD_TO_WISHLIST,
  payload: val,
});

export const removeToWishlist = val => ({
  type: ActionTypes.REMOVE_TO_WISHLIST,
  payload: val,
});

// Calling Products API
export const setProductsData = data => {
  return dispatch => {
    try {
      const response = fetch(
        'https://grocery-backend-in.vercel.app/products/popular',
      )
        .then(result => result.json())
        .then(response =>
          dispatch({type: ActionTypes.DATA_CALLING, payload: response}),
        );
    } catch (error) {
      console.log(error);
    }
  };
};
