import { ADD_TAG, ADD_USER } from './actionTypes';

const initialState = {
  users: [],
  tags: [],
}

export const reducer = (state = initialState, action) => {
  if (action.type === ADD_USER) {
    return {
      ...state,
      users: [
        ...state.users,
        action.payload,
      ]
    }
  }

  if (action.type === ADD_TAG) {
    return {
      ...state,
      tags: [
        ...state.tags,
        action.payload,
      ]
    }
  }
  return state;
}