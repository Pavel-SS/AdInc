import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    setActive(state, action: PayloadAction<boolean>) {
      state.active = action.payload;
    },
  },
});

export const { setActive } = activeSlice.actions;

export default activeSlice.reducer;
