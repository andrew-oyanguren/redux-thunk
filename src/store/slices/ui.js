import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = {
  cartIsVisible: false,
  notification: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) { // the kind of notification to dispatch is expected in the payload.
      state.notification = {
        status: action.payload.status, // pending, error, or success
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
});

// export the slice actions
export const uiActions = uiSlice.actions;

export default uiSlice;