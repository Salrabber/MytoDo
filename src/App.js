import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./loader";
import Modal from "./Modal/Modal";
import "./App.css"
import Filter from "./Filter/Filter"

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./Todo/AddTodo"));
      }, 3000);
    })
);

function App() {
  let [todos, setTodos] = React.useState([]);
  let [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //     .then((response) => response.json())
  //     .then((todos) => {
  //       setTimeout(() => {
  //         setTodos(todos);
  //       }, 2000);
  //     });
  // }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutor</h1>
        <div className="buttonsWrapper">
          <Filter />
          <Modal />
        </div>
        <React.Suspense fallback={<p>Ждём твою мамку . . . .</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>Netu Nihuya</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
