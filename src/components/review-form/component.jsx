import { useReducer } from "react";
import { RatingButtons } from "../rating-buttons/component";
import { Button } from "../button/component";


function reducer(state, { type, payload } = {}) {
  switch (type) {
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "clearAction":
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
}

const DEFAULT_FORM_VALUE = {
  text: "",
  rating: 5,
};

export const ReviewForm = ({
  initialState = DEFAULT_FORM_VALUE,
  onSaveClick,
  onCancelClick,
}) => {
  const [form, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <RatingButtons
        value={form.rating}
        onChange={(rating) => {
          dispatch({ type: "setRating", payload: rating });
        }}
      />
      <Button onClick={() => onSaveClick({ ...initialState, ...form })}>
        Save
      </Button>
      {onCancelClick && <Button onClick={onCancelClick}>Cancel</Button>}
    </>
  );
};