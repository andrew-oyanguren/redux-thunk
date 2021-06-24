import { configureStore } from '@reduxjs/toolkit';

// Slice Imports
import uiSlice from './slices/ui';
import cartSlice from './slices/cart';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer, // .reducer points to the reducer created my slice
    cart: cartSlice.reducer
  }
});

export default store;