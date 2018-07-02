import {
  CARD_FLIPPED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './actionTypes';

const initialState = {
  card: {},
  robots: [],
  openCards: [],
  isPending: true
};

export const requestRobots = (state=initialState, action={}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true});
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false});
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload});
    default:
      return state;
  }
};

export const flipCard = (state=initialState, action={}) => {
  switch (action.type) {
    case CARD_FLIPPED:
      return Object.assign({}, state, {card: action.payload});
    default:
      return state;
  }
};
