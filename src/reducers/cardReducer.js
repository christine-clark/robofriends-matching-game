import { CARD_FLIPPED } from '../actions/actionTypes';

const initialState = {
  card: {}
};

export default function cardReducer(state=initialState, action={}) {
  switch (action.type) {
    case CARD_FLIPPED:
      return Object.assign({}, {card: action.card});
    default:
      return state;
  }
};
