import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from '../actions/contacts-actions';

export const items = createReducer([], {
  [addContact]: (state, action) => {
    if (state.find(el => el.name === action.payload.name)) {
      alert(`${action.payload.name} is already in contacts`);
    } else {
      return [...state, action.payload];
    }
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});
