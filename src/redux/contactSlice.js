import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const INITIALCONTACTS = [];

const contactSlice = createSlice({
  name: 'contact',
  initialState: INITIALCONTACTS,
  reducers: {
    addNumber: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(nickname, number) {
        return {
          type: 'contact/addContact',
          payload: { id: nanoid(), nickname, number },
        };
      },
    },
    deleteNumber(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addNumber, deleteNumber } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
