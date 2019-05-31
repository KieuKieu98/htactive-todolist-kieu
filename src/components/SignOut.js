import React from "react";
import withApp from "./hoc/withApp";

const SignOut = props => {
  return (
    <div className="header-action">
      <a className="sign-out" onClick={() => props.changePage("")}>
        Sign out
      </a>
      <a
        className="git"
        href="https://github.com/KieuKieu98/htactive-todolist-kieu/"
      >
        <i className="fab fa-github icon-git" />
      </a>
    </div>
  );
};
export default withApp(SignOut);
