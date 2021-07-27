import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: []
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,

  reducers: {
    add: (state, action) => {
      state.basket = [...state.basket, action.payload]
    },
    remove: (state, action) => {
      state.basket = state.basket.filter(item => String(item.id+'-'+item.userId) !== String(action.payload.id+'-'+action.payload.userId))
    }
  }
});

export const { remove, add } = basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;
// export const selectPost = (id, userId) => (state) => state.basket.basket.find(item => item.id === id && item.userId === userId);

export default basketSlice.reducer
