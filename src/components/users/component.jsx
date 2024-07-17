import styles from "./styles.module.css";

export const Users = ({ users }) => {
  return (
    <div className={styles.root}>
      <span>{users?.name}</span>
    </div>
  );
};
