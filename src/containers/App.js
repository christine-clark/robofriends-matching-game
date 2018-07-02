import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestRobots } from '../actions';
import Header from '../components/Header';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: props.robots.slice(0)
    };
  }

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
            <CardList robots={this.shuffleRobots()}/>
          </ErrorBoundry>
        }
      </div>
    );
  }
};

App.propTypes = {
  robots: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
