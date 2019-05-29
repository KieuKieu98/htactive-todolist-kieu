import React from "react";
import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";

import TodoProvider from "./components/context/TodoProvider";
import withApp from "./components/hoc/withApp";

const App = props => (
  <TodoProvider>{props.page === "home" ? <Home /> : <Login />}</TodoProvider>
);

export default withApp(App);
