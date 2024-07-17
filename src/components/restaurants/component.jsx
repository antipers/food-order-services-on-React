/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars

import { useState } from "react";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return (
    <div>
      <RestaurantTabsContainer
        onTabClick={setActiveRestaurantId}
        activeRestaurantId={activeRestaurantId}
      />
      {activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}
    </div>
  );
};
