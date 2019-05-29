import React from "react";
// import PropTypes from "prop-types";
import withTodo from "../hoc/withTodo";

const TodoItem = props => {
  const [value, setValue] = React.useState(props.todo.text);

  const onChange = event => setValue(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (value) {
      props.editTodoList(value, props.todo.id);
    }
  };

  const {
    todo: { id, text, done, isEdited },
    markTodoDone,
    removeTodo,
    editTodo,
    closeTodo
  } = props;

  return isEdited ? (
    <div className="task-item">
      <div className="cell-lelf">
        <div className="cell title">
          <form onSubmit={onSubmit}>
            <input
              name="value"
              type="text"
              className="task-title"
              defaultValue={value}
              onChange={onChange}
            />
          </form>
        </div>
      </div>
      <div className="cell cell-right">
        <button
          className="btn task-button"
          type="button"
          onClick={() => closeTodo(id)}
        >
          <i className="fas fa-times icon" />
        </button>
      </div>
    </div>
  ) : (
    <div className="task-item">
      <div className="cell-lelf" onClick={() => markTodoDone(id, done)}>
        <div className="cell">
          <button className="btn task-button" type="button">
            <i
              className="fas fa-check icon "
              style={{
                color: done ? "green" : ""
              }}
            />
          </button>
        </div>
        <div className="cell title">
          <div
            className="task-title"
            style={{
              textDecoration: done ? "line-through #85bf6b" : "",
              color: done ? "#555" : ""
            }}
          >
            {text}
          </div>
        </div>
      </div>
      <div className="cell cell-right">
        <button
          className="btn task-button"
          type="button"
          onClick={() => editTodo(id)}
        >
          <i className="fas fa-pencil-alt icon" />
        </button>
        <button
          className="btn task-button btn-delete"
          type="button"
          onClick={() =>
            window.confirm("Are you sure you want to delete this item?") &&
            removeTodo(id)}
        >
          <i className="fas fa-trash icon" />
        </button>
      </div>
    </div>
  );
};

export default withTodo(TodoItem);
