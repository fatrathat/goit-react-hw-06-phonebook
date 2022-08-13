import { configureStore } from '@reduxjs/toolkit';

import { contacts } from './reducers';

import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: {
    contacts,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  ],
});

export let persistor = persistStore(store);

export default store;
