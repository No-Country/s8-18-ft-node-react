//crear slice de user con typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { RootState } from '../store';
import { UserInfo } from '../../interfaces';


// Define the initial state using that type
const initialState: UserInfo = {
  id: 0,
  name: '',
  email: '',
  password: '',
  role: '',
  avatar: '',
  status: ''
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction) => {
      console.log(state)
     return action.payload;
    },
    setUserStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    updateUser:(state, action)=>{
      return {...state, ...action.payload}
    },
    resetUser:()=>initialState
  },
});
// Action creators are generated for each case reducer function
export const { createUser, setUserStatus, updateUser, resetUser } = userSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.user)`
//export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;

