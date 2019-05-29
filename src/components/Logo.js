import React, { useContext } from "react";
import ColorContext from "./context/ColorContext";

export default () => {
  const { changeColor } = useContext(ColorContext);
  return (
    <div className="header-action">
      <i className="fab fa-github icon-git" />
      <button className="changeColor" onClick={changeColor}>
        <i className="fas fa-adjust icon_change" />
      </button>
    </div>
  );
};
