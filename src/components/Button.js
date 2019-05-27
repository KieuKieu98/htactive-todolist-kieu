import React from "react";
import ColorContext from "./ColorContext";

export default props => (
  <ColorContext.Consumer>
    {({ colorBtn }) => (
      <button
        style={{ backgroundColor: colorBtn }}
        className="btn sign-in-button"
        type="button"
        onClick={() => props.onLogin("home")}
      >
        {props.value}
      </button>
    )}
  </ColorContext.Consumer>
);
