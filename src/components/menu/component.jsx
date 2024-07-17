/* eslint-disable react/jsx-key */
import styles from "./styles.module.css";
import { DishContainer } from "../dish/container";
import { useParams } from "react-router-dom";

export const Menu = () => {
  const {restaurantId}= useParams();
  
  if (!restaurantId) {
    return "В данный момент ресторан вносит изменения в меню, загляните позже";
  }

  return (
    <>
      {/* <Button onClick={onRefreshClick}>Refresh</Button> */}

      <div className={styles.root}>
        <DishContainer className={styles.dish} restaurantId={restaurantId} />
      </div>
    </>
  );
};
