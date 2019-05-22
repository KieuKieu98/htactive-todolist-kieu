import React from "react";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";
import shortid from "short-id";
import axios from "axios";
const API = "https://5ce4abbbc1ee360014725c91.mockapi.io/api/todos";
export default class ContentTodolist extends React.Component {
  state = {
    todos: [],
    // todos: [
    //   {
    //     id: shortid.generate(),
    //     text: "kieu",
    //     done: false,
    //     isEdited: false
    //   },
    //   {
    //     id: shortid.generate(),
    //     text: "kieu",
    //     done: false,
    //     isEdited: false
    //   }
    // ],
    loading: true,
    todoToShow: "all" // 'active', 'completed'
  };

  async componentDidMount() {
    const res = await axios.get(API);
    const data = await res.data;
    this.setState({ todos: data });
    //  axios
    //   .get(API)
    //   .then(result =>
    //     this.setState({
    //       todos: result.data
    //     })
    //   )
    //   .catch(error =>
    //     this.setState({
    //       error
    //     })
    //   );
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
        todos: [...this.state.todos, data]
      });
      // if (text) {
      //   return axios
      //     .post(API, {
      //       text,
      //       done: false,
      //       isEdited: false
      //     })
      //     .then(response => {
      //       this.setState({
      //         todos: [...this.state.todos, response.data]
      //       });
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
      // }
    }
  };

  markTodoDone = async (id, doneTodo) => {
    const res = await axios.put(`${API}/${id}`, {
      done: !doneTodo
    });
    // const data = await res.data;
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
    // return  axios
    //   .put(`${API}/${id}`, {
    //     done: !doneTodo
    //   })
    //   .then(response => {
    //     this.setState(state => ({
    //       todos: state.todos.map(todo => {
    //         if (todo.id === id) {
    //           return {
    //             ...todo,
    //             done: !todo.done
    //           };
    //         } else {
    //           return todo;
    //         }
    //       })
    //     }));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  removeTodo = async id => {
    const res = await axios.delete(`${API}/${id}`);
    // const data = await res.data;
    const filteredArray = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos: filteredArray });
    // return  axios
    //   .delete(`${API}/${id}`)
    //   .then(response => {
    //     const filteredArray = this.state.todos.filter(item => item.id !== id);
    //     this.setState({ todos: filteredArray });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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

    // return  axios
    //   .put(`${API}/${id}`, {
    //     text
    //   })
    //   .then(({ data }) => {
    //     const todos = this.state.todos.map(todo => {
    //       if (todo.id === data.id) {
    //         return {
    //           ...todo,
    //           text: data.text,
    //           isEdited: false
    //         };
    //       } else {
    //         return todo;
    //       }
    //     });
    //     this.setState({ todos });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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
          isLoading={this.isLoading}
        />
      </div>
    );
  }
}
