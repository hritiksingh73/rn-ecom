import {ActionTypes} from '../action/actionType';

const initialState = {
  registrationData: {
    fullName: '',
    email: '',
    Mobileno: '',
    Password: '',
    user: '',
  },
  userLoginData: {
    mail: '',
    pass: '',
  },
  cart: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGDATA:
      //console.log('hello', action.payload);
      return {
        ...state,
        registrationData: action.payload,
      };
    case ActionTypes.USERDATA:
      //console.log(action.payload);
      return {
        ...state,
        userLoginData: action.payload,
      };
    case ActionTypes.ADDCART:
      //console.log(action.payload);
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            name: action.payload.name,
            Price: action.payload.Price,
            oldPrice: action.payload.oldPrice,
            image: action.payload.image,
            quantity: action.payload.quantity,
          },
        ],
        // cart: {...state, cart: [action.payload, ...state.cart]},
      };
    case ActionTypes.INCREMENT_ITEM:
      let increase = [...state.cart];
      const increaseItem = increase.map(item => {
        return item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      });
      return {
        ...state,
        cart: increaseItem,
      };
    case ActionTypes.DECREMENT_ITEM:
      let decrease = [...state.cart];
      // const decreaseItem = decrease.map(item => {
      //   return item.id === action.payload && item.quantity > 0
      //     ? {
      //         ...item,
      //         quantity: item.quantity - 1,
      //       }
      //     : item;
      // });
      const removeCartItem = decrease.filter(
        item => item.id !== action.payload && item.quantity === 0,
      );
      return {
        ...state,
        cart: removeCartItem,
      };
    default:
      return state;
  }
};

export default counterReducer;
