import React from "react";

import withTodo from "../hoc/withTodo";

class TodoForm extends React.Component {
  state = {
    value: ""
  };
  textInput = React.createRef();
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    if (this.state.value) {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  };

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div className="input">
        <form onSubmit={this.onSubmit}>
          <input
            name="value"
            type="text"
            ref={this.textInput}
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

export default withTodo(TodoForm);
