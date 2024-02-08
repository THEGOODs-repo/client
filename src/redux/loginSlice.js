import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  token: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.userId = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setId, setToken } = loginSlice.actions;
export default loginSlice.reducer;
