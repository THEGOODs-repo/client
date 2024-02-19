// selectedItemsSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState: {
    selectedItems: [],
  },
  reducers: {
    updateSelectedItems: (state, action) => {
      state.selectedItems = action.payload;
    },
  },
});

export const { updateSelectedItems } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;

