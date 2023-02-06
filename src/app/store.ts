import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import activeSliceReducer from './active';

export const store = configureStore({
  reducer: {
    active: activeSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
