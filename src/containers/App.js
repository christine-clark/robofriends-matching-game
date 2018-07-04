import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { flipCard } from '../actions/cardActions';
import { requestRobots } from '../actions/robotsActions';
import MainPage from '../components/MainPage';
import './App.css';

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
};

App.propTypes = {
  card: PropTypes.object.isRequired,
  robots: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    card: state.cardReducer.card,
    robots: state.robotsReducer.robots,
    isPending: state.robotsReducer.isPending
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots()),
    onCardClick: (event) => dispatch(flipCard(event.target))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
