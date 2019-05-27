import React from "react";
import Header from "../components/Header";
import ContentTodolist from "../components/ContentTodolist";
import "./Login.css";
export default props => (
  <div className="container">
    <Header
      onLogin={props.onLogin}
      page={props.page}
      changeColor={props.changeColor}
    />
    <ContentTodolist />
  </div>
);
