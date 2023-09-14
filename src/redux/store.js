import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice/countriesSlice';

const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
});

export default store;
