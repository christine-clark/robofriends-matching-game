import { REQUEST_ROBOTS_SUCCESS } from './actionTypes';

// For demonstration purposes, using hard copy array
export const requestRobots = () => {
  // Allow duplicates in array for matching game
  const matchingRobots = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]; 
  return { type: REQUEST_ROBOTS_SUCCESS, robots: matchingRobots };
};

// Retrieve users data from API instead of hard coded robots array
// export const requestRobots = () => (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
//   apiCall('https://jsonplaceholder.typicode.com/users')
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
// };
