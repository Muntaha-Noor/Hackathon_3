import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
}

interface WishlistState {
  wishlistItems: WishlistItem[];
}

const initialState: WishlistState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const itemExists = state.wishlistItems.some(
        (item) => item.id === action.payload.id,
      );
      if (!itemExists) {
        state.wishlistItems.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<{ id: string }>) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
