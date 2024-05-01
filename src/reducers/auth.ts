import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isAuthenticated = true;
      state.message = "Successfully login!";
    },
    logutUser: (state) => {
      state.isAuthenticated = false;
      state.message = "Successfully logout!";
    },
  },
});

export const { loginUser, logutUser } = authSlice.actions;
export default authSlice.reducer;
