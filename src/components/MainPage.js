import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  shuffleRobots() {
    const { robots } = this.props;
    const robotCards = robots.slice(0);
    let shuffledCards = [];
    let randomIndex = 0;

    while(shuffledCards.length < robotCards.length) {
      randomIndex = Math.floor(Math.random() * robotCards.length);

      if (robotCards[randomIndex]) {
        shuffledCards.push(robotCards[randomIndex]);
        robotCards[randomIndex] = false;
      }
    }

    return shuffledCards;
  }

  render() {
    const { isPending } = this.props;
    return (
      <div className='robofriends tc'>
        <Header />
        { isPending ? <h1>Loading</h1> :
          <ErrorBoundry>
            <CardList robots={this.shuffleRobots()} />
          </ErrorBoundry>
        }
      </div>
    );
  }
};

MainPage.propTypes = {
  robots: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired
};

export default MainPage;
