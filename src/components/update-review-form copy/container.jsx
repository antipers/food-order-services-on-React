import { useCallback } from "react";
import { ReviewForm } from "../review-form/component";
import { useUpdateReviewMutation } from "../../redux/service/api/api";
import { useMemo } from "react";

export const UpdateReviewFormContainer = ({ review, onCancel, onSave }) => {
  const [updateReview] = useUpdateReviewMutation();
  const { text, rating } = review;
  const HandleSave = useCallback(
    (form) => {
      updateReview({
        ...review,
        ...form,
      });
      onSave();
    },
    [updateReview, review, onSave]
  );
  const formValue = useMemo(
    () => ({ text: text, rating: rating }),
    [rating, text]
  );
  return <ReviewForm initialState={formValue} onSaveClick={HandleSave} onCancelClick={onCancel} />;
};
