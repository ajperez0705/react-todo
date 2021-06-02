import styles from "./TodoList.module.css";

const TodoList = (props) => {
  const completedTodoHandler = function (e) {
    props.todo.completed = true;

    console.log(e);

    props.todos.filter((el) => el.id !== props.todo.id);
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
    </div>
  );
};

export default TodoList;
