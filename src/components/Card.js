import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flippedCardId: null
    };

    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(event) {
    this.setState({ flippedCardId: event.target.alt });
  }

  render() {
    const { id } = this.props;
    const { flippedCardId } = this.state;
    const cardClasses = 'card tc grow bg-light-green br3 pa2 ma2 dib bw2 shadow-5';
    return (
      <li className={`${cardClasses} ${flippedCardId === id ? 'open': 'closed'}`}
          onClick={this.onCardClick}>
        <img alt={id} src={`https://robohash.org/${id}?size=100x100`} />
      </li>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired
};

export default Card;