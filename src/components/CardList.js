import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchingCards: [],
      flippedCard: [],
      openedCard: [],
      numberOfMoves: 0
    };

    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(event) {
    if (this.state.flippedCard.length && this.state.openedCard.length) {
      return;
    }

    const flippedCard = [event.target.id, event.target.alt];
    this.setState({ flippedCard: flippedCard });

    if (this.state.openedCard.length) {
      this.doCardsMatch(event.target.id, event.target.alt);
    } else {
      this.setState({ flippedCard: [] });
      this.setState({ openedCard: flippedCard });
    }
  }

  doCardsMatch(flippedCardId, flippedCardAlt) {
    const self = this;

    setTimeout(function() {
      let matchingCards = self.state.matchingCards.slice(0);
      const cardsMatch = self.state.openedCard[0] !== flippedCardId && 
        self.state.openedCard[1] === flippedCardAlt;
      const newFlippedCard = [flippedCardId, flippedCardAlt];
      
      if (cardsMatch) {
        matchingCards.push(self.state.openedCard);
        matchingCards.push(newFlippedCard);
        self.setState({ matchingCards: matchingCards });
      }

      self.setState({ flippedCard: [] });
      self.setState({ openedCard: [] });
      self.setState({ numberOfMoves: self.state.numberOfMoves + 1 });
    }, 1000);
  }

  render() {
    const { robots } = this.props;
    const { flippedCard, matchingCards, openedCard, numberOfMoves } = this.state;
    
    return (
      <ul className="card-list">
        <li>Number of moves: {numberOfMoves}</li>
       {
          robots.map((robot, i) => {
            return <Card key={i} 
                         id={`robot${i}-${robot}`} 
                         alt={`robot${robot}`}
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