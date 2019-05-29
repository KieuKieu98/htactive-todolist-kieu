import React, { useContext } from "react";
import Logo from "./Logo";
import SignOut from "./SignOut";
import HeaderTitle from "./HeaderTitle";
import ColorContext from "./context/ColorContext";

export default () => {
  const { page } = useContext(ColorContext);
  if (page === "home") {
    return (
      <div className="header">
        <HeaderTitle />
        <SignOut />
      </div>
    );
  } else {
    return (
      <div className="header">
        <HeaderTitle />
        <Logo />
      </div>
    );
  }
};
