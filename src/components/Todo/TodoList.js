import React from "react";
import TodoItem from "./TodoItem";
import ErrorBoundary from "../ErrorBoundary";
export default props => (
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
      <ErrorBoundary>
        {props.todos.map(t => (
          <TodoItem
            key={t.id}
            todo={t}
            removeTodo={props.removeTodo}
            markTodoDone={props.markTodoDone}
            editTodo={props.editTodo}
            editTodoList={props.editTodoList}
            closeTodo={props.closeTodo}
            loadIcon={props.loadIcon}
          />
        ))}
      </ErrorBoundary>
    </div>
  </div>
);
