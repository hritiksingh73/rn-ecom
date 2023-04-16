import {ActionType} from '../action/ActionType';
import axios from 'axios';

// export const getInitialData = () => async dispatch => {
//   dispatch({type: ActionType.SET_FETCHING, payload: true});
//   try {
//     const res = await axios.get(
//       'https://grocery-backend-in.vercel.app/products/popular',
//     );
//     dispatch({type: ActionType.SET_INIT_DATA, payload: res.data});
//     dispatch({type: ActionType.SET_FETCHING, payload: false});
//   } catch (error) {
//     dispatch({});
//   }
// };

export const getProducts = () => {
  return dispatch => {
    try {
      const api = fetch(
        'https://grocery-backend-in.vercel.app/products/popular',
      )
        .then(result => result.json())
        .then(response => dispatch({type: ActionType.GET_PRODUCTS, payload: response}));
    } catch (error) {
      console.log(error);
    }
  };
};

