import { combineReducers } from '@reduxjs/toolkit';
import { items } from './contacts-reducers';
import { filter } from './filters-redusers';

export const contacts = combineReducers({
  items,
  filter,
});
