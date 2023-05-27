import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

describe('Detail Weather render', () => {
  const mockStore = configureStore();
  const newState = {
    data: [{ country: 'Ethiopia', population: 120000000 }],
    forecast: {
      city: 11111,
      name: 'Ethiopia',
      list: [{ weather: { description: 'sunny' } }],
    },
    status: 'idle',
    error: null,
  };

  test('should return the correct state', () => {
    const weatherData = mockStore(newState);
    weatherData.dispatch({
      type: 'fetch/WeatherData',
      payload: { taker: newState },
    });
    expect(weatherData.getState()).toEqual(newState);
  });
});
