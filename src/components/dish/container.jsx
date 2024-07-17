/* eslint-disable react/jsx-key */

import { Dish } from "./component";

import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api/api";

export const DishContainer = ({ restaurantId, ...props }) => {
  const { data: dishes, isFetching } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return dishes.map((dish) => <Dish {...props} dish={dish} />);
};
