import {ActionType} from './ActionType';

export const userFullInfo = user => ({
  type: ActionType.USER_DETAILS,
  payload: user,
});

