import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/robotsReducer';
import * as robotsActions from '../actions/robotsActions';

describe('Store', function() {
  it('Should handle retrieving robots', function() {
    const store = createStore(rootReducer, initialState);
    const action = robotsActions.requestRobots();
    store.dispatch(action);

    const actual = store.getState();
    const expected = {
      robotsReducer: {
        isPending: false, 
        robots: [1, 2, 3, 4, 5, 6, 7, 8,1, 2, 3, 4, 5, 6, 7, 8]
      }
    };

    expect(actual).toEqual(expected);
  });
});
