import {ActionTypes} from '../constants/constants';

const initialState = {
  registerData: [],
  fruitCart: [],
  numberOfItems: '',
};

export const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.REGISTER_DETAILS:
      console.log("Registerd Details ----->", payload.name, payload.email, payload.number, payload.password)
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
      return{
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
      }

    // Increas or Decrease number of items selected by users.
    case ActionTypes.NUMBER_OF_ITEMS:
      console.log('----->', payload.itemId)
      // console.log('number and index', payload.number, payload.index)
      var updateItem = [...state.fruitCart];
      var abc = (payload.number).toString();

      console.log('----->', updateItem)

      const quantity = state.fruitCart.map(item => {
        if(payload.itemId == item.id){
          console.log('inside map -> ' , item.id)
          // console.log('inside map -> ' , payload.index)
          updateItem[payload.index].numberOfItem = payload.number
          // item.id = payload.number;
          console.log('inside map -> ' , [...state.fruitCart])
        }
      })

      // console.log('----->', [...state.fruitCart])

      // console.log('------>','quantity:', updateItem[payload.index].numberOfItem, 'id: ', updateItem[payload.index].id, 'index: ', abc)
      
      // updateItem[payload.index].numberOfItem = abc;
      // console.log(updateItem[payload.index].numberOfItem)
      // console.log(updateItem[payload.index])



      return{
        ...state, fruitCart: updateItem
      }
      // return {...state, ListDemo: userData};

    default:
      return state;
  }
};

export default userReducer;
