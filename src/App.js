import { useState, useEffect } from "react";

import Form from "./Form";
import Filter from "./Filter";
import TodoList from "./TodoList";

import styles from "./App.module.css";
import ErrorMessage from "./ErrorMessage";

function App() {
  // State
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("Incomplete");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [error, setError] = useState();

  // This Use Effect runs on Init
  useEffect(() => {
    getLocalTodos();
    errorFilterHandler();
  }, []);

  // Use Effect
  useEffect(() => {
    renderFilteredTodos();
    saveLocalTodos();
    errorFilterHandler();
  }, [todos, status]);

  // Functions
  const createTodo = function (userInput) {
    setTodos([
      ...todos,
      { name: userInput, id: Math.random() * 10, completed: false },
    ]);
    setInput("");
    // errorFilterHandler();
  };

  // const renderFilteredTodos = function () {
  //   switch (status) {
  //     case "Completed":
  //       setFilteredTodos(todos.filter((todo) => todo.completed === true));
  //       if (filteredTodos.length === 0) {
  //         setError({
  //           message: "You have not completed any tasks! Go get something done!",
  //         });
  //       }
  //       console.log("complete called");
  //       break;
  //     case "Incomplete":
  //       setFilteredTodos(todos.filter((todo) => todo.completed === false));
  //       if (filteredTodos.length === 1) {
  //         setError({
  //           message: "You have not completed any tasks! Go get something done!",
  //         });
  //       }
  //       // console.log(error.message);
  //       break;
  //     default:
  //       setFilteredTodos(todos);
  //   }
  // };

  const renderFilteredTodos = function (e) {
    console.log(e);
    if (status === "Completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      if (filteredTodos.length === 0) {
        setError({
          message: "You have not completed any tasks! Go get something done!",
        });
      }
      console.log("complete called");
    } else if (status === "Incomplete") {
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
      if (filteredTodos.length === 1) {
        setError({
          message: "You have not completed any tasks! Go get something done!",
        });
      }
      console.log("incomplete called");
    }
    // console.log(error.message);
    else setFilteredTodos(todos);
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

  const errorFilterHandler = () => {
    if (todos.length === 0) {
      setError({
        message: "There are no todos, create one!",
      });
      return;
    } else if (todos.length > 0) {
      setError(null);
    }

    // const filterErrorHandler = () => {
    //   setError({
    //     message: "You have not completed any tasks! Go get something done!",
    //   });
    // };

    // if (input === "") {
    //   setError({
    //     message: "You need to have a minimum of 1 character!",
    //   });
    // } else return;
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
          errorFilterHandler={errorFilterHandler}
          status={status}
          setStatus={setStatus}
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
            errorFilterHandler={errorFilterHandler}
            saveLocalTodos={saveLocalTodos}
            filterStatus={status}
            setFilteredTodos={setFilteredTodos}
            filteredTodos={filteredTodos}
            todos={todos}
            todo={todo}
            // Value
            name={todo.name}
            key={todo.id}
            completed={todo.completed}
          />
        );
      })}
      {error && <ErrorMessage message={error.message} />}
      {/* <Modal message={error.message} /> */}
    </div>
  );
}

export default App;
