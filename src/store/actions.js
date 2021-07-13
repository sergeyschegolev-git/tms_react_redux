import { ADD_TAG, ADD_USER } from './actionTypes';

export const addTag = (data) => ({
  type: ADD_TAG,
  payload: data,
})