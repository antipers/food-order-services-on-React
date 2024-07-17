/* eslint-disable react/jsx-key */

import { Tab } from "../tab/component";

export const RestaurantTabs = ({
  restaurants,
  onTabClick,
  activeRestaurantId,
}) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Tab
          title={restaurant.name}
          onClick={() => onTabClick(restaurant.id)}
          isActive={activeRestaurantId === restaurant.id}
        />
      ))}
    </div>
  );
};
