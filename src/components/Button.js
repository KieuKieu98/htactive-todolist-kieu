import React from "react";

export default props => (
  <button
    className="btn sign-in-button"
    type="button"
    onClick={() => props.onLogin("home")}
  >
    {props.value}
  </button>
);
