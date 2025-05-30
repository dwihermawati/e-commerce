import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemProps } from '@/types/cart';
import { QuantityInputProps } from '@/components/QuantityInput';

type CartState = {
  items: CartItemProps[];
  directCheckoutItems: CartItemProps[];
};

const initialState: CartState = {
  items: [], // cart
  directCheckoutItems: [], // direct checkout product detail
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

    addDirectCheckout: (state, action: PayloadAction<CartItemProps>) => {
      state.directCheckoutItems = [{ ...action.payload, quantity: 1 }];
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },

    clearDirectCheckoutItems: (state) => {
      state.directCheckoutItems = [];
    },

    resetDirectCheckoutQuantity: (state) => {
      state.directCheckoutItems = [
        { ...state.directCheckoutItems[0], quantity: 1 },
      ];
    },

    increaseQuantity: (state, action: PayloadAction<QuantityInputProps>) => {
      if (!action.payload.directCheckout) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.directCheckoutItems = state.directCheckoutItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    },

    decreaseQuantity: (state, action: PayloadAction<QuantityInputProps>) => {
      if (!action.payload.directCheckout) {
        state.items = state.items
          .map((item) =>
            item.id === action.payload.id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
      } else {
        state.directCheckoutItems = state.directCheckoutItems
          .map((item) =>
            item.id === action.payload.id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
      }
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

    removeSelectedItems: (state) => {
      state.items = state.items.filter((item) => !item.selected);
    },
  },
});

export const {
  addToCart,
  addDirectCheckout,
  clearDirectCheckoutItems,
  resetDirectCheckoutQuantity,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  toggleItemSelected,
  toggleSelectAll,
  removeSelectedItems,
} = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const getDirectCheckoutItems = (state: { cart: CartState }) =>
  state.cart.directCheckoutItems;

export const selectCartItemCount = (state: { cart: CartState }) =>
  state.cart.items.length;

export default cartSlice.reducer;
