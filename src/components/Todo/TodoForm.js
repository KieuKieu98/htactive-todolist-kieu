import React, { useEffect, useState } from "react";

import withTodo from "../hoc/withTodo";

const TodoForm = props => {
  const [value, setValue] = useState("");
  const textInput = React.createRef();
  // useEffect should enter an empty array to not run during process
  useEffect(() => {
    return textInput.current.focus();
  }, []);

  const onChange = event => setValue(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (value) {
      props.addTodo(value);
      setValue("");
    }
  };

  return (
    <div className="input">
      <form onSubmit={onSubmit}>
        <input
          name="value"
          type="text"
          ref={textInput}
          className="task-form"
          placeholder="What needs to be done?"
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default withTodo(TodoForm);
