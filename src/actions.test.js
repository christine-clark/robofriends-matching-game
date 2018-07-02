import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

export const mockStore = configureMockStore([thunkMiddleware]);

describe("Fetch robots action SUCCESS", () => {
  it("should create a Success action on request Robots", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    expect(action[0].type).toEqual("REQUEST_ROBOTS_SUCCESS");
  });
});