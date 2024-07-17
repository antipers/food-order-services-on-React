import { useGetRestaurantsQuery } from "../../redux/service/api/api";
import { selectRestaurantFromResult } from "../../redux/service/api/selectors";
import { Restaurant } from "./component";
/* import styles from "./styles.module.css"; */

export const RestaurantContainer = ({ id }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectRestaurantFromResult(id),
  });
  
  if (!restaurant) {
    return <div>No restaurant</div>;
  }
  return <Restaurant restaurant={restaurant} />;
};
