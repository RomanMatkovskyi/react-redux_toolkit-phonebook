import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addNumber = createAction('tasks/AddTask', (nickname, number) => {
  return {
    type: 'contact/addContact',
    payload: { id: nanoid(), nickname, number },
  };
});

export const deleteNumber = createAction('contact/deleteContact');

export const filterContacts = createAction('filter/filterContacts');
