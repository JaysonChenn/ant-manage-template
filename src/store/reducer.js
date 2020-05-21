import { combineReducers } from 'redux';

/**
 * @description Collaspsed
 * @param {type: collasped}
 */
let collaspsedReducer = (state = false, action) => {
  return action.type === 'collasped' ? !state : state;
};

export default combineReducers({
  collaspsedReducer
});
