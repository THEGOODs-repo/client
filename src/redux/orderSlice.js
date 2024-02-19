import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
};

const orderSlice = createSlice({
  name: "orderItem",
  initialState,
  reducers: {
    setOrderItems: (state, action) => {
      state.orderItems = [...state.orderItems, action.payload];
    },
    emptyOrderItems: (state) => {
      state.orderItems = [];
    },
  },
});

export const { setOrderItems, emptyOrderItems } = orderSlice.actions;
export default orderSlice.reducer;
