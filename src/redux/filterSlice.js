import { createSlice } from '@reduxjs/toolkit';

const INITIALFILTER = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIALFILTER,
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
