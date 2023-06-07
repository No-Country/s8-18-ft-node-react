//crear slice de user con typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { RootState } from '../store';
import { UserInfo } from '../../interfaces';


// Define the initial state using that type
const initialState: UserInfo = {
  id: 0,
  firtsName: "",
  lastName: "",
  email: "",
  phone: 0,
  password: "",
  role: {
    name: null
  }
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginUser:(state, action:PayloadAction)=>{
      console.log("loginUser:", state, action.payload)
      return action.payload
    },
    createUser: (state, action: PayloadAction) => {
      console.log("createUser:", state, action.payload)
     return action.payload;
    },
    updateUser:(state, action: PayloadAction<object>)=>{
      console.log("updateUser:", state, action.payload)
      return {...state, ...action.payload}
    },
    resetUser:()=>initialState
  },
});
// Action creators are generated for each case reducer function
export const { loginUser, createUser, updateUser, resetUser } = userSlice.actions;


export default userSlice.reducer;

