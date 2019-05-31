import React from "react";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";
import withTodo from "./hoc/withTodo";
import Loader from "./Loader";

const ContentTodolist = props =>
  props.isLoading ? (
    <Loader />
  ) : (
    <div className="content">
      <TodoForm />
      <TodoList />
    </div>
  );
export default withTodo(ContentTodolist);
