import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestRobots } from '../actions/robotsActions';
import MainPage from '../components/MainPage';
import './App.css';

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
};

App.propTypes = {
  robots: PropTypes.array.isRequired,
  error: PropTypes.bool,
  isPending: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    robots: state.robotsReducer.robots,
    error: state.robotsReducer.error,
    isPending: state.robotsReducer.isPending
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
