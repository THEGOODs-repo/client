// selectedItemsSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState: {
    selectedItems: [],
  },
  reducers: {
    setSelectedItems: (state, action) => {
      state.selectedItems = action.payload;
    },
  },
});

export const { setSelectedItems } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;

