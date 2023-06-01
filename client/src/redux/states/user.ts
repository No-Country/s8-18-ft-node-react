//crear slice de user con typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


// Define a type for the slice state
interface UserState {
  user:  null;
}
// Define the initial state using that type
const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    }
  },
});
// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.user)`
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;

