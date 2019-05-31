import React from "react";
import withApp from "./hoc/withApp";

const Logo = props => {
  return (
    <div className="header-action">
      <a
        className="git"
        href="https://github.com/KieuKieu98/htactive-todolist-kieu/"
      >
        <i className="fab fa-github icon-git" />
      </a>
      <button className="changeColor" onClick={props.changeColor}>
        <i className="fas fa-adjust icon_change" />
      </button>
    </div>
  );
};
export default withApp(Logo);
