import { Outlet } from "react-router-dom";
import { NewReviewFormContainer } from "../new-review-form/container";
import { Tab } from "../tab/component";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Restaurant = ({ restaurant }) => {
  const { id, name } = restaurant;
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`menu`, { replace: true });
  }, [navigate]); /* Доработать */

  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <Tab to={`menu`} title={"Меню"}></Tab>
      <Tab to={`reviews`} title={"Отзывы"}></Tab>

      <Outlet />

      <h3>Оставить новый отзыв</h3>
      <NewReviewFormContainer restaurantId={id} />
    </div>
  );
};
