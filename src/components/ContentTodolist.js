import React from "react";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";
import Loader from "./Loader";
// import shortid from "short-id";
import axios from "axios";
const API = "https://5ce4abbbc1ee360014725c91.mockapi.io/api/todos";
export default class ContentTodolist extends React.Component {
  state = {
    todos: [],
    isLoading: false,
    loadIcon: false,
    todoToShow: "all" // 'active', 'completed'
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
      const data = await res.data;
      this.setState({
        todos: [data, ...this.state.todos]
      });
    }
  };

  markTodoDone = async (id, doneTodo) => {
    this.setState({ loadIcon: true });
    const res = await axios.put(`${API}/${id}`, {
      done: !doneTodo
    });
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
      }),
      loadIcon: false
    }));
  };

  removeTodo = async id => {
    const res = await axios.delete(`${API}/${id}`);
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

  editTodoList = async (text, id) => {
    const res = await axios.put(`${API}/${id}`, {
      text
    });
    const data = await res.data;
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
        {this.state.isLoading && <Loader />}
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
          loadIcon={this.state.loadIcon}
        />
      </div>
    );
  }
}
