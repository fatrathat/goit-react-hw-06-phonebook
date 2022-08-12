import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from '../actions/contacts-actions';

export const items = createReducer([], {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});
