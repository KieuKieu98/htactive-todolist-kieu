import React from "react";

export default class TodoItem extends React.Component {
  state = {
    value: this.props.text
  };

  onChange = event => this.setState({ value: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    if (this.state.value) {
      this.props.editTodoList(this.state.value, this.props.id);
    }
  };

  render() {
    const {
      id,
      text,
      markTodoDone,
      removeTodo,
      done,
      editTodo,
      isEdited,
      closeTodo
    } = this.props;

    if (isEdited === true) {
      return (
        <div className="task-item">
          <div className="cell-lelf">
            <div className="cell title">
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  className="task-title"
                  value={this.state.value}
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
          <div className="cell-lelf" onClick={() => markTodoDone(id)}>
            <div className="cell">
              <button className="btn task-button" type="button">
                <i
                  className="fas fa-check icon"
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
              onClick={() => removeTodo(id)}
            >
              <i className="fas fa-trash icon" />
            </button>
          </div>
        </div>
      );
    }
  }
}
