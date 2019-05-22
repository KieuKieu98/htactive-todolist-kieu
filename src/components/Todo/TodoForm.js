import React from "react";

export default class TodoForm extends React.Component {
  state = {
    value: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    if (this.state.value) {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  };
  render() {
    return (
      <div className="input">
        <form onSubmit={this.onSubmit}>
          <input
            name="value"
            type="text"
            className="task-form"
            placeholder="What needs to be done?"
            value={this.state.value}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}
