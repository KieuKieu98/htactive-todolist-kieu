import React from "react";
import ColorContext from "./ColorContext";

export default props => (
  <ColorContext.Consumer>
    {({ changeColor }) => (
      <div className="header-action">
        <i className="fab fa-github icon-git" />
        <button className="changeColor" onClick={changeColor}>
          <i className="fas fa-adjust icon_change" />
        </button>
      </div>
    )}
  </ColorContext.Consumer>
);
