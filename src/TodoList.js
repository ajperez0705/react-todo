import styles from "./TodoList.module.css";

const TodoList = (props) => {
  // Adds the completed class to clicked card and organizes it into the correct status
  const completedTodoHandler = function (e) {
    props.todo.completed = true;
    props.todos.filter((el) => el.id !== props.todo.id);

    resetFilteredTodos();
  };

  // Deletes clicked todo from the array
  const deleteTodoHandler = function (e) {
    e.preventDefault();

    for (let i = 0; i < props.todos.length; i++) {
      if (props.todos[i].id === props.todo.id) {
        props.todos.splice(i, 1);
      }
      resetFilteredTodos();
      props.saveLocalTodos();
      props.errorHandler();
      // console.log(props.filteredTodos);
    }
  };

  // Re-renders the filtered Todos matching the filter dropdown
  const resetFilteredTodos = function () {
    if (props.filterStatus === "Completed") {
      props.setFilteredTodos(
        props.todos.filter((todo) => todo.completed === true)
      );
    } else if (props.filterStatus === "Incomplete") {
      props.setFilteredTodos(
        props.todos.filter((todo) => todo.completed === false)
      );
    } else return;
  };

  //   Dev Ed Solution
  //   const completeHandler = () => {
  //     props.setTodos(
  //       props.todos.map((item) => {
  //         if (item.id === props.todo.id) {
  //           return {
  //             ...item,
  //             completed: !item.completed,
  //           };
  //         }
  //       })
  //     );
  //   };

  return (
    <div className={styles["todo-card"]}>
      <button
        onClick={completedTodoHandler}
        className={`${styles["complete-btn"]} ${
          props.completed === true ? styles["completed-todo-btn"] : ""
        } `}
      >
        ✔
      </button>
      <div
        className={`${styles["todo-text"]} 
        ${props.completed === true ? styles.completed : ""}`}
      >
        {props.name}
      </div>
      <button onClick={deleteTodoHandler}>Delete</button>
    </div>
  );
};

export default TodoList;
