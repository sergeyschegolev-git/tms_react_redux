import { handleActions } from 'redux-actions';
import { addTag } from '../actions/tagsActions';

export const tagsReducer = handleActions({
  [addTag]: ((state, action) => [...state, action.payload]),
}, []);
