import React from "react";

export default props => (
  <div className="header-action">
    <a className="sign-out" onClick={() => props.onLogin("login")}>
      Sign out
    </a>
    <i className="fab fa-github icon-git" />
  </div>
);
