import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userHeight: number;
  userWeight: number;
  userAge: number;
}
const initialState: UserState = {
  userHeight: 180,
  userWeight: 80,
  userAge: 25,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserHeight(state, action: PayloadAction<number>) {
      const newState = state;

      newState.userHeight = action.payload;
    },
  },
});

export const { setUserHeight } = userSlice.actions;

export default userSlice.reducer;
