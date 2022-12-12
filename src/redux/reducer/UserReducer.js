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
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      // console.log(action.payload);
      return {...state, loginpage: {...action.payload}};

    // case ActionType.REGISTER_USER:
    // return {...state, RegisterPage: {...action.payload}};

    case ActionType.SET_INIT_DATA:
      return {...state, productData: action.payload};

    case ActionType.SET_FETCHING:
      return {...state, isFetching: action.payload};

    case ActionType.ADD_ITEM:
      //  console.log([...state.cart,{...action.payload,quantity:1}])
      return {
        ...state,
        cart: [...state.cart, {...action.payload, quantity: 1}],
      };

    // case ActionType.REMOVE_ITEM:
    //   //console.log(...state.cart.filter( (item) => action.payload !== item))
    //   return {
    //     ...state,
    //     cart: state.cart.filter(item => action.payload !== item.id),
    //   };

    case ActionType.INCREASE_ITEM_QUANTITY:
      const increaseItem = state.cart.map(item => {
        return item.id === action.payload
          ? {...item, quantity: item.quantity + 1}
          : item;
      });
      return {
        ...state,
        cart: increaseItem,
      };

    case ActionType.DECREASE_ITEM_QUANTITY:
      const decreaseItem = state.cart.map(item => {
        return item.id === action.payload && item.quantity > 0
          ? {...item, quantity: item.quantity - 1}
          : item;
      });
      return {
        ...state,
        cart: decreaseItem,
      };

    default:
      return state;
  }
};

export default userReducer;
