/* eslint-disable react/jsx-key */

import { useSearchParams } from "react-router-dom";
import { Tab } from "../tab/component";
import styles from "./styles.module.css";

export const RestaurantTabs = ({ restaurants }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  return (
    <>
      <input
        value={searchValue}
        onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      <div className={styles.root}>
        {restaurants
          .filter(
            ({ name }) =>
              name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
          )
          .map(({ id, name }) => (
            <Tab title={name} to={`${id}`} />
          ))}
      </div>
    </>
  );
};
