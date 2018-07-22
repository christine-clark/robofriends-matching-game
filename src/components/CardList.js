import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      matchingCards: [],
      flippedCard: [],
      openedCard: [],
      numberOfMoves: 0
    };

    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(event) {
    if (this.state.disabled) {
      return;
    }

    const flippedCard = [event.target.id, event.target.title];
    this.setState({ disabled: true });
    this.setState({ flippedCard: flippedCard });

    if (this.state.openedCard.length) {
      this.doCardsMatch(event.target.id, event.target.title);
    } else {
      this.setState({ disabled: false });
      this.setState({ flippedCard: [] });
      this.setState({ openedCard: flippedCard });
    }
  }

  doCardsMatch(flippedCardId, flippedCardTitle) {
    const self = this;

    setTimeout(function() {
      let matchingCards = self.state.matchingCards.slice(0);
      const cardsMatch = self.state.openedCard[0] !== flippedCardId && 
        self.state.openedCard[1] === flippedCardTitle;
      const newFlippedCard = [flippedCardId, flippedCardTitle];
      
      if (cardsMatch) {
        matchingCards.push(self.state.openedCard);
        matchingCards.push(newFlippedCard);
        self.setState({ matchingCards: matchingCards });
      }

      self.setState({ numberOfMoves: self.state.numberOfMoves + 1 });
      self.setState({ flippedCard: [] });
      self.setState({ openedCard: [] });
      self.setState({ disabled: false });
    }, 1000);
  }

  render() {
    const { robots } = this.props;
    const { disabled, flippedCard, matchingCards, openedCard, numberOfMoves } = this.state;
    
    return (
      <ul className="card-list">
        <li>Number of moves: {numberOfMoves}</li>
       {
          robots.map((robot, i) => {
            return <Card key={i} 
                         id={`robot${i}-${robot}`} 
                         title={`robot${robot}`}
                         disabled={disabled}
                         flippedCard={flippedCard}
                         matchingCards={matchingCards}
                         openedCard={openedCard}
                         onCardClick={this.onCardClick} />;
          })
        }
      </ul>
    );
  }
}

CardList.propTypes = {
  robots: PropTypes.array
};

export default CardList;