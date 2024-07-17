import classNames from "classnames";
import { AuthorizationButton } from "../authorization-button/component";
import { ProgressBar } from "../progress-bar/component";
import { ThemeToggler } from "../theme-toggler/component";

import styles from "./styles.module.css";
import { CartIndicatorContainer } from "../cart-indicator/container";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={classNames(styles.root, styles.heavy)}>
      <ProgressBar />
      <ThemeToggler />
      <AuthorizationButton />
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/restaurants">Restaurants</Link>
      <CartIndicatorContainer />
    </header>
  );
};
