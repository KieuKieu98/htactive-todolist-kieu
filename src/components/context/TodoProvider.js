import React from "react";
import axios from "axios";

import TodoContext from "./TodoContext";
import Loader from "../Loader";

const API = "https://5ce4abbbc1ee360014725c91.mockapi.io/api/todos";

export default class TodoProvider extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    isLoading: false
  };

  markTodoDone = async (id, doneTodo) => {
    const res = await axios.put(`${API}/${id}`, {
      done: !doneTodo
    });
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === res.data.id) {
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

  removeTodo = async id => {
    const res = await axios.delete(`${API}/${id}`);
    const filteredArray = this.state.todos.filter(
      item => item.id !== res.data.id
    );
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

  editTodoList = async (text, id) => {
    const res = await axios.put(`${API}/${id}`, {
      text
    });
    const data = res.data;
    const todos = this.state.todos.map(todo => {
      if (todo.id === data.id) {
        return {
          ...todo,
          text: data.text,
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

  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await axios.get(API);
    const data = res.data;
    data.sort((a, b) => {
      return b.id - a.id;
    });
    this.setState({ todos: data, isLoading: false });
  }

  addTodo = async text => {
    if (text) {
      const res = await axios.post(API, {
        text,
        done: false,
        isEdited: false
      });
      const data = res.data;
      this.setState({
        todos: [data, ...this.state.todos]
      });
    }
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
      <TodoContext.Provider
        value={{
          todos: this.getFilterTodo(),
          filter: this.state.todoToShow,
          markTodoDone: this.markTodoDone,
          removeTodo: this.removeTodo,
          editTodo: this.editTodo,
          editTodoList: this.editTodoList,
          closeTodo: this.closeTodo,
          addTodo: this.addTodo,
          updateTodoToShow: this.updateTodoToShow
        }}
      >
        {this.state.isLoading ? <Loader /> : this.props.children}
      </TodoContext.Provider>
    );
  }
}
