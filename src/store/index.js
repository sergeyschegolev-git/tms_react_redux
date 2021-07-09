import { createStore, combineReducers } from 'redux';
import { usersReducer } from './reducers/usersReducer';
import { tagsReducer } from './reducers/tagsReducer';

const rootReducer = combineReducers({
  tags: tagsReducer,
  users: usersReducer,
})

export const store = createStore(rootReducer);
