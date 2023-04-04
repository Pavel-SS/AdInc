import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import userSliceReducer from './user-slice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
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
