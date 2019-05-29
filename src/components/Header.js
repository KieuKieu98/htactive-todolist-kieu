import React from "react";
import Logo from "./Logo";
import SignOut from "./SignOut";
import HeaderTitle from "./HeaderTitle";
import withApp from "./hoc/withApp";

const Header = props => {
  if (props.page === "home") {
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
export default withApp(Header);
