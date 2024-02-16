import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: 0,
  seller: 0,
  top10: 0,
  tag: 0,
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    increaseProduct: (state, action) => {
      state.product = state.product + action.payload;
    },

    decreaseProduct: (state, action) => {
      state.product = state.product - action.payload;
      console.log(state.product);
    },

    increaseSeller: (state, action) => {
      state.seller = state.seller + action.payload;
    },
    decreaseSeller: (state, action) => {
      state.seller = state.seller - action.payload;
    },

    increaseTop10: (state, action) => {
      state.top10 = state.top10 + action.payload;
    },
    decreaseTop10: (state, action) => {
      state.top10 = state.top10 - action.payload;
    },

    increaseTag: (state, action) => {
      state.tag = state.tag + action.payload;
    },
    decreaseTag: (state, action) => {
      state.tag = state.tag - action.payload;
    },
  },
});

export const {
  increaseProduct,
  decreaseProduct,
  increaseSeller,
  decreaseSeller,
  increaseTop10,
  decreaseTop10,
  increaseTag,
  decreaseTag,
} = preferenceSlice.actions;
export default preferenceSlice.reducer;
