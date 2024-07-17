/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars

import { RestaurantTabsContainer } from "../restaurant-tabs/container";

import { Outlet } from "react-router-dom";

export const Restaurants = () => {
  return (
    <div>
      <RestaurantTabsContainer />
      <Outlet />
    </div>
  );
};
