import React from "react";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";

class ContentTodolist extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        text: "kieu",
        done: false,
        isEdited: false
      },
      {
        id: 2,
        text: "kieu",
        done: false,
        isEdited: false
      }
    ],
    todoToShow: "all" // 'active', 'completed'
  };

  addTodo = text => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          done: false,
          isEdited: false,
          text
        }
      ]
    });
  };

  markTodoDone = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      })
    }));
  };

  removeTodo = id => {
    const filteredArray = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos: filteredArray });
  };

  editTodo = id => {
    this.setState(state => ({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdited: true
          };
        } else {
          return todo;
        }
      })
    }));
  };

  editTodoList = (text, id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
          isEdited: false
        };
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  closeTodo = id => {
    this.setState(state => ({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdited: false
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  getFilterTodo = () => {
    const { todos, todoToShow } = this.state;
    switch (todoToShow) {
      case "active":
        return todos.filter(t => !t.done);
      case "complete":
        return todos.filter(t => t.done);
      default:
        return todos;
    }
  };

  render() {
    return (
      <div className="content">
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.getFilterTodo()}
          removeTodo={this.removeTodo}
          markTodoDone={this.markTodoDone}
          updateTodoToShow={this.updateTodoToShow}
          editTodo={this.editTodo}
          filter={this.state.todoToShow}
          editTodoList={this.editTodoList}
          closeTodo={this.closeTodo}
        />
      </div>
    );
  }
}

export default ContentTodolist;
