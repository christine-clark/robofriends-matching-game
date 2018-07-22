import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, title, disabled, flippedCard, matchingCards, openedCard, onCardClick }) => {
  const cardClasses = 'card tc bg-light-green br3 pa2 ma2 dib bw2 shadow-5';
  const isMatchingCard = matchingCards.find(card => card[0] === id);
  const shouldCardBeOpen = isMatchingCard || flippedCard[0] === id  || openedCard[0] === id;

  return (
    <li id={id} 
        title={title}
        className={`${cardClasses} ${shouldCardBeOpen ? 'open': 'closed'}`}
        disabled={disabled}
        onClick={onCardClick}>
      <img id={id} alt={title} title={title} src={`https://robohash.org/${title}?size=100x100`} />
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  flippedCard: PropTypes.array.isRequired,
  matchingCards: PropTypes.array.isRequired,
  openedCard: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default Card;