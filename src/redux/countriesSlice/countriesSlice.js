import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllCountries = createAsyncThunk('getCountries/countries', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data) || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const getCountry = createAsyncThunk('getCountry/countries', async (code, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data) || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});
export const getRegion = createAsyncThunk(
  'getRegion/countries',
  async (region, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`,
      );
      return response.data;
    } catch (error) {
      const message = (error.response && error.response.data) || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  },
);

const initialState = {
  isLoading: false,
  countriesData: [],
  countrySearch: [],
  region: '',
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setRegion: (state, action) => ({
      ...state,
      region: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCountries.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getAllCountries.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      countriesData: action.payload,
    }));
    builder.addCase(getAllCountries.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: true,
      message: action.payload,
      countriesData: [],
    }));

    builder.addCase(getCountry.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getCountry.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      countrySearch: action.payload,
    }));
    builder.addCase(getCountry.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: true,
      message: action.payload,
      countriesData: [],
    }));
    builder.addCase(getRegion.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getRegion.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      countriesData: action.payload,
    }));
    builder.addCase(getRegion.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: true,
      message: action.payload,
      countriesData: [],
    }));
  },
});

export default countriesSlice.reducer;
export const { setRegion } = countriesSlice.actions;
