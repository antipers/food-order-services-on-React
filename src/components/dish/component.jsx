/* eslint-disable react/jsx-key */
import { Counter } from "../counter/component";
import { selectDishCount } from "../../redux/ui/cart/selectors";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { decrement, increment } from "../../redux/ui/cart";
import { useSelector } from "react-redux";
export const Dish = ({
  dish,
  className,
}) => {
  const count = useSelector((state) => selectDishCount(state, dish.id));

  const dispatch = useDispatch();

  const HandleIncrement = useCallback(
    () => dispatch(increment(dish.id)),
    [dish.id, dispatch]
  );
  const HandleDecrement = useCallback(
    () => dispatch(decrement(dish.id)),
    [dish.id, dispatch]
  );
  if (!dish) {
    return <div>Данные загружаются</div>;
  }

  return (
    <>
      {" "}
      <div className={className}>
        <span>{dish.name}</span>
        <Counter
          value={count}
          increment={HandleIncrement}
          decrement={HandleDecrement}
        />
        <span>{dish.price * count}</span>
      </div>
    </>
  );
};
