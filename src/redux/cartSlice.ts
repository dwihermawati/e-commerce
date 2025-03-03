import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemProps } from '@/types/cart';

type CartState = {
  items: CartItemProps[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemProps>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.items = state.items
        .map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      state.items = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    },

    toggleItemSelected: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, selected: !item.selected }
          : item
      );
    },

    toggleSelectAll: (state, action: PayloadAction<boolean>) => {
      state.items = state.items.map((item) => ({
        ...item,
        selected: action.payload,
      }));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  toggleItemSelected,
  toggleSelectAll,
} = cartSlice.actions;

export default cartSlice.reducer;
