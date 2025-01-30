import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
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
        const existingItem = state.wishlistItems.find((item) => item.id === action.payload.id);
        if (!existingItem) {
          state.wishlistItems.push(action.payload);
        }
      },
    },
  });
  
export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
