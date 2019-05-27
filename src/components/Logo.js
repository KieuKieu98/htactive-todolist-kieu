import React from "react";

export default props => (
  <div className="header-action">
    <i className="fab fa-github icon-git" />
    <button className="changeColor" onClick={props.changeColor}>
      <i className="fas fa-adjust icon_change" />
    </button>
  </div>
);
