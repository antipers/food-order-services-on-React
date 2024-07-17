/* eslint-disable react/jsx-key */

import { useState } from "react";
import { Button } from "../button/component";
import { UsersContainer } from "../users/container";
import styles from "./styles.module.css";
import { useCallback } from "react";
import { UpdateReviewFormContainer } from "../update-review-form copy/container";

export const Review = ({ review }) => {
  const { userId } = review;
  const [isEditModeOn, setIsEditModeOn] = useState();
  const switchEditMode = useCallback(() => {
    setIsEditModeOn((isOn) => !isOn);
  }, []);
  return (
    <div>
      {isEditModeOn ? (
        <UpdateReviewFormContainer
          review={review}
          onSave={switchEditMode}
          onCancel={switchEditMode}
        />
      ) : (
        <>
          <div className={styles.root}>{review.text}</div>
          <div className={styles.root}>{review.rating}</div>
          <Button onClick={switchEditMode}>Edit</Button>
          <UsersContainer id={userId} />
        </>
      )}
    </div>
  );
};
