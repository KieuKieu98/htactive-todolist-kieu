import React from "react";
import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";

import withApp from "./components/hoc/withApp";

const App = props => (props.page === "home" ? <Home /> : <Login />);

export default withApp(App);
