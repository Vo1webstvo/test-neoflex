import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IData, IProduct } from '../../interface/data';

const initialState: IProduct = {
  product: [],
  count: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IData>) => {
      const findItem = state.product.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.product.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    delToBasket: (state, action) => {
      state.product = state.product.filter((item) => item.id !== action.payload);
    },
    incrCount: (state, action) => {
      const findItem = state.product.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
    },
    decrCount: (state, action) => {
      const findItem = state.product.find((item) => item.id === action.payload);
      if (findItem) {
        if (findItem.count == 1) {
          findItem.count = 1;
        } else {
          findItem.count--;
        }
      }
    },
  },
});

export const { addToBasket, delToBasket, incrCount, decrCount } = productSlice.actions;
export default productSlice.reducer;
