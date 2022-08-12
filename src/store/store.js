import {
  createReducer,
  createAction,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';

//actions
export const addContact = createAction('ADD_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');

//reducers
const items = createReducer([], {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});
const filter = createReducer('', () => {});

//Root reducer
const contacts = combineReducers({
  items,
  filter,
});

//Store
const store = configureStore({
  reducer: {
    contacts,
  },
});

//selectors
export const allContacts = state => state.contacts.items;

export default store;
