import * as reducers from './reducers';
import * as types from './actionTypes';

const initialState = {
  robots: [],
  isPending: true
};

describe('requestRobots reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(
      {
        card: {},
        openCards: [],
        robots: [],
        isPending: true
      }
    )
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: types.REQUEST_ROBOTS_PENDING,
        payload: {isPending: true}
      })
    ).toEqual(
      {
        robots: [],
        isPending: true
      }
    )
  })
  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: [123]
      })
    ).toEqual(
      {
        robots: [123],
        isPending: false
      }
    )
  })
  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: types.REQUEST_ROBOTS_FAILED,
        payload: 'NOOO'
      })
    ).toEqual(
      {
        error: 'NOOO',
        robots: [],
        isPending: true
      }
    )
  })
})