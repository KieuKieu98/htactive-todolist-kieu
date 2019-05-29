import React, { useContext } from "react";
import ColorContext from "./context/ColorContext";

export default () => {
  const { changePage } = useContext(ColorContext);
  return (
    <div className="header-action">
      <a className="sign-out" onClick={() => changePage("login")}>
        Sign out
      </a>
      <i className="fab fa-github icon-git" />
    </div>
  );
};
