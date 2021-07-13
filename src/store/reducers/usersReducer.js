import { handleActions } from 'redux-actions';
import { addUser } from '../actions/usersActions';

export const usersReducer = handleActions({
  [addUser]: (state, action) => [...state, action.payload],
}, []);