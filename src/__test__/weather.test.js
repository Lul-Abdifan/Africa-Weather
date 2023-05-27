import weatherReducer, { initialState } from '../redux/features/weatherSlice';

describe('Initial state', () => {
  test('should have the correct initial state', () => {
    const state = weatherReducer(undefined, {});
    expect(state).toEqual(initialState);
  });
  test("Initial state", () => {
    expect(initialState).toEqual({
      data: [],
      forecast: '',
      status: 'idle',
      error: null,
    });
  });
});

// Run the tests



