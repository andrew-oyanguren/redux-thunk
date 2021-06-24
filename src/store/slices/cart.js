import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  items: [],
  totalQuantity: 0,
  changed: false, // used to avoid re-evaluation on load, only changes to true locally from add/remove cartItemHandlers!
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    
    addItemToCart(state, action) { // action argument carries extra information
      const newItem = action.payload; // payload contains the data set to the action
      // check if there is an item in our items array with the same id, the same item already exists.
      const exisitingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++; // no matter the result the totalQuantity will increase by 1.
      state.changed = true;
      if (!exisitingItem) { // if existingItem is not in our array , we can push in our newItem.
        state.items.push({
          id: newItem.id,
          name: newItem.title, // taking our payload data and customizing the structure of our object.
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else { // item does exists
        exisitingItem.quantity++; // updated quantity
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price; // new total price is old total price plus newItem price.
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload; // we are expecting an id from our payload to match to array objects.
      // matching our payload id to an existing item in our array.
      const exisitingItem = state.items.find(item => item.id === id);
      // check if items quantity is 1, and then completely remove from array.
      state.totalQuantity--; // deducts total quantity by 1
      state.changed = true;
      if (exisitingItem.quantity === 1) {
        // filter returns new array, we use this to remove our item with matching id.
        state.items = state.items.filter(item => item.id !== id);
      } else {
        exisitingItem.quantity--; // if not 1, then decrement quantity by 1.
        // also need to update the total price as we take away one from quantity.
        exisitingItem.totalPrice = exisitingItem.totalPrice - exisitingItem.price;
      }
    },
  }
});

export const cartActions = cartSlice.actions; // action creators: return { type: '', payload: ...}

export default cartSlice;