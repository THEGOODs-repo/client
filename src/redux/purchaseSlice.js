import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchaseItem: [],
};

const purchaseSlice = createSlice({
  name: "purchaseItem",
  initialState,
  reducers: {
    setPurchaseItems: (state, action) => {
      state.purchaseItem = [...state.orderItems, action.payload];
    },
    emptyPurchaseUtems: (state) => {  
      state.orderItems = [];
    },
  },
});

export const { setPurchaseItems, emptyPurchaseUtems } = purchaseSlice.actions;
export default purchaseSlice.reducer;
