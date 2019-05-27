import React from "react";
import PropTypes from "prop-types";

export default class TodoItem extends React.Component {
  state = {
    value: ""
  };
  static propTypes = {
    todo: PropTypes.shape({
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      isEdited: PropTypes.bool.isRequired,
      isLoading: PropTypes.bool.isRequired
    }).isRequired,
    markTodoDone: PropTypes.func,
    removeTodo: PropTypes.func,
    closeTodo: PropTypes.func,
    editTodo: PropTypes.func
  };

  static defaultProps = {
    markTodoDone: () => {},
    removeTodo: () => {},
    closeTodo: () => {},
    editTodo: () => {}
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    if (this.state.value) {
      this.props.editTodoList(this.state.value, this.props.todo.id);
    }
  };

  render() {
    const {
      todo: { id, text, done, isEdited },
      markTodoDone,
      removeTodo,
      editTodo,
      closeTodo
    } = this.props;

    if (isEdited === true) {
      closeTodo(id);
      throw new Error();
      return (
        <div className="task-item">
          <div className="cell-lelf">
            <div className="cell title">
              <form onSubmit={this.onSubmit}>
                <input
                  name="value"
                  type="text"
                  className="task-title"
                  defaultValue={text}
                  onChange={this.onChange}
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
      );
    } else {
      return (
        <div className="task-item">
          <div className="cell-lelf" onClick={() => markTodoDone(id, done)}>
            <div className="cell">
              <button className="btn task-button" type="button">
                <i
                  className={
                    this.props.loadIcon
                      ? "fas fa-spinner icon"
                      : "fas fa-check icon "
                  }
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
    }
  }
}
