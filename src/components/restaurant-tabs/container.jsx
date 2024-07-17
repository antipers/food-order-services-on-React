/* eslint-disable react/jsx-key */

import { RestaurantTabs } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api/api";

export const RestaurantTabsContainer = ({ onTabClick, activeRestaurantId }) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <RestaurantTabs
      restaurants={restaurants}
      onTabClick={onTabClick}
      activeRestaurantId={activeRestaurantId}
    />
  );
};