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
    const { error, isPending, successMessage } = this.props;
    return (
      <div className='robofriends tc'>
        <Header />
        { successMessage && <div className="alert alert-success">You did it! Awesome job!</div> }
        { error && <div className="alert alert-danger">{error}</div> }
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
  error: PropTypes.bool,
  isPending: PropTypes.bool.isRequired,
  successMessage: PropTypes.bool
};

export default MainPage;
