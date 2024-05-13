import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  expire: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setExpire: (state, action) => {
      state.expire = action.payload;
    },
  },
});

export const { setToken, setExpire } = loginSlice.actions;
export default loginSlice.reducer;
