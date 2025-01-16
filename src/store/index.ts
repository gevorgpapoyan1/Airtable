import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './slices/globalSlice.ts';
import cardReducer from './slices/cardSlice.ts';

const store = configureStore({
  reducer: {
    sidebar: globalReducer,
    card: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
