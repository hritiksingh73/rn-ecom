import {ActionType} from '../action/ActionType';
import axios from "axios"

export const getInitialData = () => async dispatch => {
  dispatch({type: ActionType.SET_FETCHING, payload: true});
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    dispatch({type: ActionType.SET_INIT_DATA, payload: res.data});
    dispatch({type: ActionType.SET_FETCHING, payload: false});
  } catch (error) {
    dispatch({});
  }
};
