import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basket/basket.slice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
