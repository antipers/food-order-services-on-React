import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/ui/cart";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectDishCount } from "../redux/ui/cart/selectors";

export const UseCart = ( productId ) => {
  const count = useSelector((state) => selectDishCount(state, productId));
  const dispatch = useDispatch();

  const HandleIncrement = useCallback(
    () => dispatch(increment(productId)),
    [productId, dispatch]
  );
  const HandleDecrement = useCallback(
    () => dispatch(decrement(productId)),
    [productId, dispatch]
  );
  return { count, HandleIncrement, HandleDecrement };
};
