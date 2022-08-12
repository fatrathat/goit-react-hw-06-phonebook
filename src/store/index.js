import { configureStore } from '@reduxjs/toolkit';

import { contacts } from './reducers';

const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;
