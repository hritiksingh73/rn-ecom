import {ActionType} from '../action/ActionType';

const initialState = {
  userRecord: {
    fullname: '',
    email: '',
    mobileno: '',
    password: '',
  },
  cartProducts: [],

  
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_DETAILS:
      console.log('user details----->', action.payload);
      return {
        ...state,
        userRecord: action.payload,
      };

    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts,
          {
            id: action.payload.id,
            title: action.payload.title,
            rating: action.payload.rating,
            price: action.payload.price,
            maxPrice: action.payload.maxPrice,
            quantity: action.payload.quantity,
            url: action.payload.url,
            numberOfItem: action.payload.numberOfItem,
          },
        ],
      };
      // return {...state, cartProducts: [...state.cartProducts, action.payload]};

    case ActionType.REMOVE_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          item => action.payload !== item.id,
        ),
      };

    // case ActionType.INCREASE_CART:
    //   const increase = state.cartProducts.map(item => {
    //     if (item.id === action.payload.id){
    //       return {
    //         ...item, quantity: item.quantity + 1,
    //       };
    //     }
    //     return item;
    //   });
    //   console.log(increase);
    //   return{
    //     ...state, cartProducts: increase,
    //   };

    //   case ActionType.DECREASE_CART:
    //   const decrease = state.cartProducts.map(item => {
    //     if (item.id === action.payload.id){
    //       return {
    //         ...item, quantity: item.quantity - 1,
    //       };
    //     }
    //     return item;
    //   });
    //   console.log(decrease);
    //   return{
    //     ...state, cartProducts: decrease,
    //   };

    case ActionType.INCREMENT_CART:
      console.log(payload)
      let increase = [...state.cartProducts];
      const increaseNo = increase.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
        return item;
        }
      });
      console.log(increaseNo);
      return {
        ...state,
        cartProducts: increaseNo,
      };

    case ActionType.DECREMENT_CART:
      console.log(payload)
      let decrease = [...state.cartProducts];
      const decreaseNo = decrease.map(item => {
        if (item.id === action.payload && item.quantity > 0){
          return {
              ...item,
              quantity: item.quantity - 1,
            }
          } else {
          return item;
          }
          });
          console.log(decreaseNo);
      return {
        ...state,
        cartProducts: decreaseNo,
      };
    default:
      return state;
  }
};

export default createReducer;
