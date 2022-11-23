import {ActionType} from '../action/ActionType';
const InitialState = {
  loginpage: {
    email: '',
    name: '',
    uid: '',
  },
  // RegisterPage: {
  //   name: '',
  //   registeremail: '',
  //   cellNumber: '',
  //   password: '',
  // },
  isFetching: false,
  productData: [],
  cart: [],
  quantity: 0,
};
const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      console.log(action.payload);
      return {...state, loginpage: {...action.payload}};

    // case ActionType.REGISTER_USER:
    //   return {...state, RegisterPage: {...action.payload}};

    case ActionType.SET_INIT_DATA:
      return {...state, productData: action.payload};

    case ActionType.SET_FETCHING:
      return {...state, isFetching: action.payload};

    case ActionType.ADD_ITEM:
      return {...state, cart: [action.payload, ...state.cart]};

    case ActionType.REMOVE_ITEM:
      //console.log(...state.cart.filter( (item) => action.payload !== item))
      return {
        ...state,
        cart: state.cart.filter(item => action.payload !== item.id),
      };


    case ActionType.INCREASE_ITEM_QUANTITY:
    let increase = [...state.cart];
      
      const increaseItem = increase.map(item => {
        return item.id === action.payload
          ? {
              ...item,
              quantity: item.id + 1,
            }
          : item;
      });

      return {
        ...state,
        cart: increaseItem,
      };

    // case ActionType.DECREMENT_ITEM:
    //   let decrease = [...state.cart];
    //   const decreaseItem = decrease.map(item => {
    //     return item.id === action.payload && item.quantity > 0
    //       ? {
    //           ...item,
    //           quantity: item.id - 1,
    //         }
    //       : item;
    //   });
    //   return {
    //     ...state,
    //     cart: decreaseItem,
    //   };

      
    // case ActionType.DECREASE_ITEM_QUANTITY:
    //   //console.log(...state.cart.filter( (item) => action.payload !== item))
    //   return {
    //     ...state,
    //     cart: state.cart.filter(item => action.payload !== item.id),
    //   };

    default:
      return state;
  }
};

export default userReducer;
