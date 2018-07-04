import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from '../actions/actionTypes';

const initialState = {
  robots: [],
  isPending: true
};

export default function robotsReducer(state=initialState, action={}) {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, {isPending: true});
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, {robots: action.robots, isPending: false});
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, {error: action.robots});
    default:
      return state;
  }
};
