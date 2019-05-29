import React, { useContext } from "react";
import ColorContext from "./context/ColorContext";

export default props => {
  const { colorBtn, changePage } = useContext(ColorContext);
  return (
    <button
      style={{ backgroundColor: colorBtn }}
      className="btn sign-in-button"
      type="button"
      onClick={() => changePage("home")}
    >
      {props.value}
    </button>
  );
};
