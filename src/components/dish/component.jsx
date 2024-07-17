/* eslint-disable react/jsx-key */
import { Counter } from "../counter/component";
import { Outlet } from "react-router-dom";
import { UseCart } from "../../hooks/use-cart";

export const Dish = ({ dish, className }) => {
  const { count, HandleDecrement, HandleIncrement } = UseCart(dish.id);
  if (!dish) {
    return <div>Данные загружаются</div>;
  }

  return (
    <>
      {" "}
      <div className={className}>
        <Counter
          value={count}
          increment={HandleIncrement}
          decrement={HandleDecrement}
        />
        <span>{dish.price * count}</span>
      </div>
      <Outlet />
    </>
  );
};
