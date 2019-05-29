import React from "react";
import withApp from "./hoc/withApp";

const SignOut = props => {
  return (
    <div className="header-action">
      <a className="sign-out" onClick={() => props.changePage("login")}>
        Sign out
      </a>
      <i className="fab fa-github icon-git" />
    </div>
  );
};
export default withApp(SignOut);
