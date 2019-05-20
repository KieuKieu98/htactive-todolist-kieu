import React from "react";
import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";

class App extends React.Component {
  state = {
    page: ""
  };

  changePage = page => this.setState({ page });

  render() {
    return this.state.page === "home" ? (
      <Home onLogin={this.changePage} page={this.state.page} />
    ) : (
      <Login onLogin={this.changePage} />
    );
  }
}

export default App;
