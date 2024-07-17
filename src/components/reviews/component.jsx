/* eslint-disable react/jsx-key */

import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api/api";
import { ReviewContainer } from "../review/container";

export const Reviews = ({ restaurantId }) => {

  const {data: reviews, isFetching}= useGetReviewsByRestaurantIdQuery(restaurantId);
  if (isFetching) {
    return  <div>Loading...</div>
  }

  return <ReviewContainer reviews={reviews} />;
};
