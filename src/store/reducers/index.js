import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { items } from './contacts-reducers';
import { filter } from './filters-redusers';

const persistConfig = {
  key: 'contacts',
  storage,
};

const rootReduser = combineReducers({
  items,
  filter,
});

export const contacts = persistReducer(persistConfig, rootReduser);
