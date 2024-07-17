import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { DishSlice } from "./entities/dish/dish";
import { RestaurantSlice } from "./entities/restaurant/restaurant";
import { ReviewSlice } from "./entities/review/review";
import { UserSlice } from "./entities/user/user";
import { cartSlice } from "./ui/cart";
import { RequestSlice } from "./ui/request/request";
import { apiService } from "./service/api/api";

export const store = configureStore({
  reducer: combineSlices(
    RestaurantSlice,
    DishSlice,
    ReviewSlice,
    UserSlice,
    cartSlice,
    RequestSlice,
    apiService
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

console.log("store", store.getState()); /* Оставил для себя */
