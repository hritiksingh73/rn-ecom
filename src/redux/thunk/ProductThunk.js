import {ActionType} from '../action/ActionType';
import axios from 'axios';

export const getInitialData = () => async Dispatch => {
  Dispatch({type: ActionType.SET_FETCHING, payload: true});
  try {
    const res = await axios.get('https://grocery-backend-in.vercel.app/products/popular');
    Dispatch({type: ActionType.SET_INIT_DATA, payload: res.data});
    Dispatch({type: ActionType.SET_FETCHING, payload: false});
  } catch (error) {
    Dispatch({});
  }
};
