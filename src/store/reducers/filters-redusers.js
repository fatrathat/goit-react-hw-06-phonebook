import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from '../actions/filters-actions';

export const filter = createReducer('', {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});
