import { CARD_FLIPPED } from './actionTypes';

export const flipCard = (card) => ({ type: CARD_FLIPPED, card: card });