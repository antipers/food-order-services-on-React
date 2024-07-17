import { Menu } from "../menu/component";
import { NewReviewFormContainer } from "../new-review-form/container";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
  const { id, name } = restaurant;

  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <h3>Меню</h3>
      <Menu restaurantId={id} />
      <h3>Отзывы</h3>

      <Reviews restaurantId={id} />

      <h3>Оставить новый отзыв</h3>
      <NewReviewFormContainer restaurantId={id} />
    </div>
  );
};
