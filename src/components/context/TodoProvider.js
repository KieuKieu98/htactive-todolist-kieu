import React, { useEffect, useState } from "react";
import axios from "axios";

import TodoContext from "./TodoContext";

const API = "https://5ce4abbbc1ee360014725c91.mockapi.io/api/todos";

export default props => {
  const [todos, setTodo] = useState([]);
  const [todoToShow, setTodoShow] = useState("all");
  const [isLoading, setLoading] = useState(false);

  const markTodoDone = async (id, doneTodo) => {
    const res = await axios.put(`${API}/${id}`, {
      done: !doneTodo
    });
    setTodo(
      todos.map(todo => {
        if (todo.id === res.data.id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      })
    );
  };

  const removeTodo = async id => {
    const res = await axios.delete(`${API}/${id}`);
    const filteredArray = todos.filter(item => item.id !== res.data.id);
    setTodo(filteredArray);
  };

  const editTodo = id => {
    setTodo(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdited: true
          };
        } else {
          return todo;
        }
      })
    );
  };

  const editTodoList = async (text, id) => {
    const res = await axios.put(`${API}/${id}`, {
      text
    });
    const data = res.data;
    const todo = todos.map(todo => {
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
    setTodo(todo);
  };

  const closeTodo = id => {
    setTodo(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdited: false
          };
        } else {
          return todo;
        }
      })
    );
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get(API);
      const data = res.data;
      data.sort((a, b) => {
        return b.id - a.id;
      });
      setTodo(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const addTodo = async text => {
    if (text) {
      const res = await axios.post(API, {
        text,
        done: false,
        isEdited: false
      });
      const data = res.data;
      setTodo([data, ...todos]);
    }
  };

  const updateTodoToShow = s => {
    setTodoShow(s);
  };

  const getFilterTodo = () => {
    switch (todoToShow) {
      case "active":
        return todos.filter(t => !t.done);
      case "complete":
        return todos.filter(t => t.done);
      default:
        return todos;
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: getFilterTodo(),
        filter: todoToShow,
        markTodoDone: markTodoDone,
        removeTodo: removeTodo,
        editTodo: editTodo,
        editTodoList: editTodoList,
        closeTodo: closeTodo,
        addTodo: addTodo,
        updateTodoToShow: updateTodoToShow,
        isLoading: isLoading
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
