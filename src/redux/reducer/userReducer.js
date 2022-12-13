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
      const {name, email, number, password} = payload;
      console.log('Registerd Details ----->', name, email, number, password);
      return {
        ...state,
        registerData: [
          ...state.registerData,
          {
            Name: name,
            Email: email,
            Number: number,
            Password: password,
          },
        ],
      };

    // Add FruitScreen items to CartScreen
    case ActionTypes.ADD_FRUITS_TO_CART:
      const {id, title, rating, price, maxPrice, quantity, url, numberOfItem} = payload;
      return {
        ...state,
        fruitCart: [
          ...state.fruitCart,
          {
            id: id,
            title: title,
            rating: rating,
            price: price,
            maxPrice: maxPrice,
            quantity: quantity,
            url: url,
            numberOfItem: numberOfItem,
          },
        ],
      };

    // Increas number of items selected by users in CartScreen.
    case ActionTypes.ITEMS_INCRIMENT:
      let increaseItem = [...state.fruitCart];
      const incQuantity = increaseItem.map(item => {
        return item.id === payload
          ? {
              ...item,
              numberOfItem: item.numberOfItem + 1,
            }
          : item;
      });
      return {
        ...state,
        fruitCart: incQuantity,
      };

    // Decrease number of items selected by users in CartScreen.
    case ActionTypes.ITEMS_DECREMENT:
      let decreaseItem = [...state.fruitCart];
      const decQuantity = decreaseItem.map(item => {
        return item.id === payload && item.numberOfItem > 0
          ? {
              ...item,
              numberOfItem: item.numberOfItem - 1,
            }
          : item;
      });
      return {
        ...state,
        fruitCart: decQuantity,
      };

    case ActionTypes.USER_ID:
      // console.log('Reducer userid --> ', payload);
      return {
        ...state,
        userID: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
