/* eslint-disable react/jsx-key */

import { Review } from "./component";

export const ReviewContainer = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </>
  );
};
