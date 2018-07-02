import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, onCardClick }) => {
  const cardClasses = 'card tc grow bg-light-green br3 pa2 ma2 dib bw2 shadow-5';
  return (
    <li className={`${cardClasses}`}
        onClick={onCardClick}>
      <img alt='robots' src={`https://robohash.org/${id}?size=100x100`} />
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired
};

export default Card;