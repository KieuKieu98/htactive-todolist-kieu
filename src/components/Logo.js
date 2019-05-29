import React from "react";
import withApp from "./hoc/withApp";

const Logo = props => {
  return (
    <div className="header-action">
      <i className="fab fa-github icon-git" />
      <button className="changeColor" onClick={props.changeColor}>
        <i className="fas fa-adjust icon_change" />
      </button>
    </div>
  );
};
export default withApp(Logo);
