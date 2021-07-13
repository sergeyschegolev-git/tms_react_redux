import { createStore, combineReducers } from 'redux';
import { tagsReducer } from './reducers/tagsReducer';
import { usersReducer } from './reducers/usersReducer';

const rootReducer = combineReducers({
  tags: tagsReducer,
  users: usersReducer,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
