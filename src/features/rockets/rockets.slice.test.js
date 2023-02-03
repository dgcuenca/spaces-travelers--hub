import store from '../../app/store';

describe('Rockets redux state tests', () => {
  it('Should initially set rockets to an empty object', () => {
    const state = store.getState().rockets;
    expect(state.rockets).toEqual([]);
  });
});
