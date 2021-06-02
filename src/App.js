import { useState, useEffect } from "react";

import Form from "./Form";
import Filter from "./Filter";
import TodoList from "./TodoList";

import styles from "./App.module.css";

function App() {
  // State
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("Incomplete");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [completionStatus, setCompletionStatus] = useState([]);

  // This Use Effect runs on Init
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use Effect
  useEffect(() => {
    console.log("effect called");
    renderFilteredTodos();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const createTodo = function (userInput) {
    setTodos([
      ...todos,
      { name: userInput, id: Math.random() * 10, completed: false },
    ]);
    setInput("");
    console.log(todos);
  };

  const renderFilteredTodos = function (filterValue) {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "Incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        console.log("Default");
    }
  };

  // Save to Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>My Todo App</div>
      <div className={styles["user-input"]}>
        <Form
          className={styles["user-input-child"]}
          createTodo={createTodo}
          input={input}
          setInput={setInput}
        />
        <Filter
          className={styles["user-input-child"]}
          status={status}
          setStatus={setStatus}
          renderFilter={renderFilteredTodos}
        />
      </div>

      {filteredTodos.map((todo) => {
        return (
          <TodoList
            // Props
            todos={todos}
            todo={todo}
            // Value
            name={todo.name}
            key={todo.id}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}

export default App;
