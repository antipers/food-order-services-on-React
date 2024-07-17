import { useCallback } from "react";
import { ReviewForm } from "../review-form/component";
import { useCreateReviewMutation } from "../../redux/service/api/api";

export const NewReviewFormContainer = ({restaurantId}) => {
  const [createReview] = useCreateReviewMutation();

  const HandleSave = useCallback(
    (form) => {
      createReview({
        restaurantId,
        newReview: { ...form, userId: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c" },
      });
    },
    [createReview, restaurantId]
  );
  return <ReviewForm onSaveClick={HandleSave} />;
};
