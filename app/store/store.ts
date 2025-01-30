import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import wishlistReducer from "./slices/WishlistSlice"; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
