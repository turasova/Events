import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllEvents } from 'service/fetchAllEvents';

export const getAllEventsThunk = createAsyncThunk(
  'events/getAllEvents',
  async (_, thunkApi) => {
    try {
      const data = await fetchAllEvents();
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
