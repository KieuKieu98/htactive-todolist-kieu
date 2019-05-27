import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import "./Login.css";

export default props => (
  <div className="container">
    <Header onLogin={props.onLogin}  />
    <Content onLogin={props.onLogin} />
  </div>
);
