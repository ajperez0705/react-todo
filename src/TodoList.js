const TodoList = (props) => {
  const completedTodoHandler = function (e) {
    console.log(props.todo);

    props.todo.completed = true;

    // props.todos.filter((el) => el.id !== props.todo.id);
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
    <div className="todo-card">
      <button
        onClick={completedTodoHandler}
        className={`complete-btn ${props.completed ? "completed" : ""}`}
      >
        ✔
      </button>
      <div className="todo-text">{props.name}</div>
    </div>
  );
};

export default TodoList;
