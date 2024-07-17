import { Button } from "../button/component";

export const Counter = ({ value, increment, decrement, max = 5, min = 0 }) => {
  
  return (
    <div>
      <Button onClick={decrement} disabled={value === min} type="secondary">
        -
      </Button>
      <span>{value}</span>
      <Button onClick={increment} disabled={value === max} type="secondary">
        +
      </Button>
    </div>
  );
};
