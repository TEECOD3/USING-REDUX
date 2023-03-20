import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { authenticated: false };

const authenticationSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.authenticated = true;
    },
    logout: (state) => {
      state.authenticated = false;
    },
  },
});

export const authAction = authenticationSlice.actions;
export default authenticationSlice.reducer;
