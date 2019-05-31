import React from "react";
import Header from "../components/Header";
import ContentTodolist from "../components/ContentTodolist";
import TodoProvider from "../components/context/TodoProvider";
import "./Login.css";

export default () => (
  <TodoProvider>
    <div className="container">
      <Header />
      <ContentTodolist />
    </div>
  </TodoProvider>
);
