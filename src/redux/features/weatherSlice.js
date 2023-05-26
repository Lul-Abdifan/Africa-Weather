import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API_URL = 'https://restcountries.com/v3.1/region/Africa';
const API_KEY = 'c7b015b39d5fdfefbb455c135bc60041';

// Define the asynchronous thunk for fetching weather data

export const fetchCountryData = createAsyncThunk(
  'Country/countryData',
  async () => {
    const countryResponse = await axios.get(
      'https://restcountries.com/v3.1/region/Africa',
    );
    return countryResponse.data;
  },
);
export const forecastWeatherData = createAsyncThunk(
  'weather/forecastWeatherData',
  async (capital) => {
    const forecastApiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${capital}&appid=${API_KEY}`;

    const forecastResponse = await axios.get(forecastApiURL);
    return forecastResponse.data;
  },
);

// Create the weather slice
const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: [],
    forecast: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountryData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Assign the fetched weather data array to the state
      })
      .addCase(fetchCountryData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(forecastWeatherData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(forecastWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.forecast = action.payload; // Assign the fetched weather data array to the state
      })
      .addCase(forecastWeatherData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer and actions
export default weatherSlice.reducer;
// export const {} = weatherSlice.actions;
