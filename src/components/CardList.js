import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <ul className="card-list">
      {
        robots.map((robot, i) => {
          return <Card key={i} id={`robot${i}-${robot}`} />;
        })
      }
    </ul>
  );
}

CardList.propTypes = {
  robots: PropTypes.array
};

export default CardList;