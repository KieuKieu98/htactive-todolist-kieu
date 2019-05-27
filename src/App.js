import React from "react";
import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";

class App extends React.Component {
  state = {
    page: "",
    colorBtn: ""
  };

  changeColor = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgcolor = "rgb(" + x + "," + y + "," + z + ")";
    // document.body.style.background = bgcolor;
    this.setState({
      colorBtn: bgcolor
    });
  };

  changePage = page => this.setState({ page });

  render() {
    return this.state.page === "home" ? (
      <Home
        onLogin={this.changePage}
        page={this.state.page}
        changeColor={this.changeColor}
      />
    ) : (
      <Login
        onLogin={this.changePage}
        changeColor={this.changeColor}
        colorBtn={this.state.colorBtn}
      />
    );
  }
}

export default App;
