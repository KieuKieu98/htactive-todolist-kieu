import React from "react";
import Logo from "./Logo";
import SignOut from "./SignOut";
import HeaderTitle from "./HeaderTitle";

class Header extends React.Component {
  render() {
    if (this.props.page === "home") {
      return (
        <div className="header">
          <HeaderTitle />
          <SignOut onLogin={this.props.onLogin} page={this.props.page} />
        </div>
      );
    } else {
      return (
        <div className="header">
          <HeaderTitle />
          <Logo changeColor={this.props.changeColor} />
        </div>
      );
    }
  }
}
export default Header;
