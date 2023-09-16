import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';

const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
});

export default store;
