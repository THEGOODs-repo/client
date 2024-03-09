import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  refreshToken: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { setToken, setRefreshToken } = loginSlice.actions;
export default loginSlice.reducer;
