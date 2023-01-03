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
  addressDetail: [],

  cart: [],
  productDetail: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGDATA:
      return {
        ...state,
        registrationData: action.payload,
      };
    case ActionTypes.PRODUCT_DATA:
      return {...state, productDetail: action.payload};

    case ActionTypes.USERDATA:
      return {
        ...state,
        userLoginData: action.payload,
      };
    case ActionTypes.Add_Address:
      console.log('reducer', action.payload);
      return {
        ...state,
        addressDetail: [...state.addressDetail, action.payload],
      };
    case ActionTypes.ADDCART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
            //quantity: action.payload.quantity,
          },
        ],
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
      const decreaseItem = decrease.map(item => {
        return item.id === action.payload && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item;
      });

      return {
        ...state,
        cart: decreaseItem,
      };

    case ActionTypes.REMOVE_ITEM:
      const remove = [...state.cart];
      const removeItem = remove.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: removeItem,
      };

    case ActionTypes.REMOVE_ADDRESS:
      return {
        ...state,
        addressDetail: state.addressDetail.filter(
          item => item !== action.payload,
        ),
      };

    case ActionTypes.EDIT_ADDRESS:
      const update = state.addressDetail.findIndex(
        item => item.id === action.payload.id,
      );

      let editAddress = [...state.addressDetail];
      editAddress.splice(update, 1, action.payload);

      return {
        ...state,
        addressDetail: editAddress,
      };

    default:
      return state;
  }
};

export default counterReducer;
