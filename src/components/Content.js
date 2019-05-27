import React from "react";
import Button from "../components/Button";
class Content extends React.Component {
  state = {
    socials: ["GitHub", "Google", "Twitter"]
  };
  render() {
    return (
      <div className="content">
        <div className="sign-in">
          <h2 className="sign-in-heading">Sign in</h2>
          {this.state.socials.map((social, key) => (
            <Button key={key} value={social} onLogin={this.props.onLogin} />
          ))}
        </div>
      </div>
    );
  }
}
export default Content;
