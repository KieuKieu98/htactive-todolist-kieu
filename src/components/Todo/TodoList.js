import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import ErrorBoundary from "../ErrorBoundary";
import withTodo from "../hoc/withTodo";

const TodoList = props => {
  return (
    <div className="list">
      <ul className="task-filters">
        <li>
          <a
            className={props.filter === "all" ? "active" : ""}
            onClick={() => props.updateTodoToShow("all")}
          >
            View All
          </a>
        </li>
        <li>
          <a
            className={props.filter === "active" ? "active" : ""}
            onClick={() => props.updateTodoToShow("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={props.filter === "complete" ? "active" : ""}
            onClick={() => props.updateTodoToShow("complete")}
          >
            Completed
          </a>
        </li>
      </ul>
      <div className="task-list">
        {props.todos.map(t => <TodoItem key={t.id} todo={t} />)}
      </div>
    </div>
  );
};

export default withTodo(TodoList);
