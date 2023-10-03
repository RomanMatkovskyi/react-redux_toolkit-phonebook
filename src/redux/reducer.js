import { createReducer } from '@reduxjs/toolkit';
import { addNumber, deleteNumber, filterContacts } from './action';

const INITIALCONTACTS = [];

const INITIALFILTER = '';

export const contactsReducer = createReducer(INITIALCONTACTS, {
  [addNumber]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteNumber]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export const filterReducer = createReducer(INITIALFILTER, {
  [filterContacts]: (state, action) => {
    return action.payload;
  },
});

// state.filter(contact =>
//   contact.nickname.toLowerCase().includes(action.payload.toLowerCase())
// ); Логіка фільтра
