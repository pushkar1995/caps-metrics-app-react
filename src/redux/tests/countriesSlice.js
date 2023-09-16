import { countriesSlice } from '../countriesSlice';

describe('Set Region Action', () => {
  test('setRegion action should set the region in the state', () => {
    const initialState = { region: '' };
    const action = {
      type: countriesSlice.actions.setRegion,
      payload: 'europe',
    };
    const expectedState = { region: 'europe' };

    const actualState = countriesSlice.reducer(initialState, action, countriesSlice.extraReducers);

    expect(actualState).toEqual(expectedState);
  });
});
