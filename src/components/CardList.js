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
      numberOfMoves: 0,
      successMessage: ''
    };
  }

  onCardClick = (event) => {
    const flippedCard = [event.target.id, event.target.title];
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
    let matchingCards = this.state.matchingCards.slice(0);
    const cardsMatch = this.state.openedCard[0] !== flippedCardId && 
    this.state.openedCard[1] === flippedCardTitle;
    const newFlippedCard = [flippedCardId, flippedCardTitle];

    if (cardsMatch) {
      matchingCards.push(this.state.openedCard);
      matchingCards.push(newFlippedCard);
      this.setState({ matchingCards: matchingCards });
    } 
    
    setTimeout(function() {
      self.setState({ numberOfMoves: self.state.numberOfMoves + 1 });
      self.setState({ flippedCard: [] });
      self.setState({ openedCard: [] });
      self.checkIfWin(matchingCards);
    }, 500);
  }

  checkIfWin(matchingCards) {
    if (matchingCards.length === this.props.robots.length) {
      // Show window to display winning! and number of moves / star rating
      alert('You did it! Awesome job!');
      this.setState({ successMessage: 'You did it! Awesome job!' });
    }
  }

  render() {
    const { robots } = this.props;
    const { flippedCard, matchingCards, openedCard, numberOfMoves } = this.state;
    
    return (
      <ul className="card-list">
        <li className="pa2">Moves: {numberOfMoves}</li>
       {
          robots.map((robot, i) => {
            return <Card key={i} 
                         id={`robot${i}-${robot}`} 
                         title={`robot${robot}`}
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