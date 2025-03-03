import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WishlistProps } from '@/types/wishlistProps';

type WishlistState = {
  items: WishlistProps[];
};

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistProps>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    moveAllToBag: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, moveAllToBag } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
