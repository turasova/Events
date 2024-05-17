import { createSlice } from '@reduxjs/toolkit';
import { getAllEventsThunk } from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const eventInitialState = {
  events: [],
  participants: [],
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventInitialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(getAllEventsThunk.fulfilled, (state, { payload }) => {
        state.events = payload;
      })
      .addCase(getAllEventsThunk.pending, handlePending)
      .addCase(getAllEventsThunk.rejected, handleRejected);
  },
});

export const eventsReducer = eventsSlice.reducer;
export const getIsLoading = state => state.events.isLoading;
