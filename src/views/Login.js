import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import "./Login.css";

export default props => (
  <div className="container">
    <Header onLogin={props.onLogin} changeColor={props.changeColor} />
    <Content onLogin={props.onLogin} colorBtn={props.colorBtn} />
  </div>
);
