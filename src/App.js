import React from "react";
import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";
import ColorContext from "./components/context/ColorContext";
import TodoProvider from "./components/context/TodoProvider";

class App extends React.Component {
  state = {
    page: "",
    colorBtn: "",
    changeColor: () => {
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      const z = Math.floor(Math.random() * 256);
      const bgcolor = "rgb(" + x + "," + y + "," + z + ")";
      // document.body.style.background = bgcolor;
      this.setState({
        colorBtn: bgcolor
      });
    },
    changePage: page => this.setState({ page })
  };

  render() {
    return (
      <ColorContext.Provider value={this.state}>
        <TodoProvider>
          {this.state.page === "home" ? <Home /> : <Login />}
        </TodoProvider>
      </ColorContext.Provider>
    );
  }
}

export default App;
