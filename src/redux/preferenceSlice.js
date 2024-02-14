import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  seller: null,
  top10: null,
  tag: null,
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setSeller: (state, action) => {
      state.seller = action.payload;
    },
    setTop10: (state, action) => {
      state.top10 = action.payload;
    },
    setTag: (state, action) => {
      state.tag = action.payload;
    },
  },
});

export const { setProduct, setSeller, setTop10, setTag } =
  preferenceSlice.actions;
export default preferenceSlice.reducer;
