import styles from "./Form.module.css";

const Form = (props) => {
  const inputHandler = function (e) {
    props.setInput(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    if (props.input === "") return;

    props.createTodo(props.input);
  };

  return (
    <form className={styles.form} action="">
      <input
        className={styles.input}
        placeholder="Create a new todo..."
        value={props.input}
        onChange={inputHandler}
        type="text"
      />
      <button onClick={submitHandler} className={styles["form-btn"]}>
        Submit
      </button>
    </form>
  );
};

export default Form;
