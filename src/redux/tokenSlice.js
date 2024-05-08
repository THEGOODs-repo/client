import { createSlice } from "@reduxjs/toolkit";
import { login } from "./loginSlice"; // login 액션 임포트, 실제 경로에 맞게 수정 필요

const initialState = {
  token: null,
  expire: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setExpire: (state, action) => {
      state.expire = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state) => {
      // 로그인 실패 시 토큰과 만료 시간 초기화
      state.token = null;
      state.expire = null;
    });
  },
});

export const { setToken, setExpire } = tokenSlice.actions;
export default tokenSlice.reducer;
