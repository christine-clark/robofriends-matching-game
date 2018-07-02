// import { apiCall } from './api/api';
import {
  CARD_FLIPPED,
  // REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS//,
  // REQUEST_ROBOTS_FAILED
 } from './actionTypes'

export const flipCard = (card) => ({ type: CARD_FLIPPED, payload: card });

export const requestRobots = () => {
  // Allow duplicates in array for matching game
  const matchingRobots = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]; 
  return { type: REQUEST_ROBOTS_SUCCESS, payload: matchingRobots };
};

// Retrieve users data from API instead of hard coded robots array.
// export const requestRobots = () => (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
//   apiCall('https://jsonplaceholder.typicode.com/users')
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
// };
