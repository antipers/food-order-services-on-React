import { useParams } from "react-router-dom";
import { useGetDishesByDishIdQuery } from "../redux/service/api/api";
import { Counter } from "../components/counter/component";
import { UseCart } from "../hooks/use-cart";

export const DishInfoPage = () => {
  const { dishId } = useParams();
  const { data: dish } = useGetDishesByDishIdQuery(dishId);
  
  const { count, HandleDecrement, HandleIncrement } = UseCart(dishId);

  if (!dish) {
    return <div>Данные загружаются</div>;
  }

  return (
    <>
      {" "}
      <div>
        <span>{dish.name}</span>
        <div>
          Состав:
          <span>{dish.ingredients.join(", ")}</span>
          <br />
          <span>Price:{dish.price}</span>
        </div>
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
