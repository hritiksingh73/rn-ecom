import {ActionTypes} from '../constants/constants';

const initialState = {
  userID: '',
  registerData: [],
  fruitCart: [],
  numberOfItems: '',
};

export const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.REGISTER_DETAILS:
      console.log(
        'Registerd Details ----->',
        payload.name,
        payload.email,
        payload.number,
        payload.password,
      );
      return {
        ...state,
        registerData: [
          ...state.registerData,
          {
            Name: payload.name,
            Email: payload.email,
            Number: payload.number,
            Password: payload.password,
          },
        ],
      };

    // Add FruitScreen items to CartScreen
    case ActionTypes.ADD_FRUITS_TO_CART:
      // console.log('Add fruits to cart', payload)
      return {
        ...state,
        fruitCart: [
          ...state.fruitCart,
          {
            id: payload.id,
            title: payload.title,
            rating: payload.rating,
            price: payload.price,
            maxPrice: payload.maxPrice,
            quantity: payload.quantity,
            url: payload.url,
            numberOfItem: payload.numberOfItem,
          },
        ],
      };

    // Increas number of items selected by users in CartScreen.
    case ActionTypes.ITEMS_INCRIMENT:
      let increaseItem = [...state.fruitCart];
      const incQuantity = increaseItem.map(item => {
        return (item.id === payload) ? 
              {
                ...item,
                numberOfItem: item.numberOfItem + 1,
              } :
               item
      });
      return {
        ...state,
        fruitCart: incQuantity,
      };

    // Decrease number of items selected by users in CartScreen.
    case ActionTypes.ITEMS_DECREMENT:
      let decreaseItem = [...state.fruitCart];
      const decQuantity = decreaseItem.map(item => {
        return (item.id === payload && item.numberOfItem > 0) ?
              {
                ...item,
                numberOfItem: item.numberOfItem - 1,
              } 
              :
               item
      });
      return {
        ...state,
        fruitCart: decQuantity,
      };

    case ActionTypes.USER_ID:
      console.log('Reducer userid --> ', payload)
      return {
        ...state,
        userID: payload,
      }

    default:
      return state;
  }
};

export default userReducer;
