import { useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/service/api/api";
import { selectRestaurantFromResult } from "../../redux/service/api/selectors";
import { Restaurant } from "./component";

/* import styles from "./styles.module.css"; */

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectRestaurantFromResult(restaurantId),
  });

  if (!restaurant) {
    return <div>No restaurant</div>;
  }
  return <Restaurant restaurant={restaurant} restaurantId={restaurantId} />;
};
