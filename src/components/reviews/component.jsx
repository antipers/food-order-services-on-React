/* eslint-disable react/jsx-key */

import { useParams } from "react-router-dom";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api/api";
import { ReviewContainer } from "../review/container";

export const Reviews = () => {
  const { restaurantId } = useParams();
  const { data: reviews, isFetching } =
    useGetReviewsByRestaurantIdQuery(restaurantId);
  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <ReviewContainer reviews={reviews} />;
};
