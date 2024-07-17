/* eslint-disable react/jsx-key */
import { Dish } from "./component";
import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api/api";
import { NavLink } from "react-router-dom";

export const DishContainer = ({ restaurantId, ...props }) => {
  const { data: dishes, isFetching } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return dishes.map((dish) => (
    <>
      <NavLink title={dish.name} to={`/dish/${dish.id}`}>
        {dish.name}
      </NavLink>
      <Dish {...props} dish={dish} />
    </>
  ));
};
