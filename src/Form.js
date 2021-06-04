import { useState } from "react";
import styles from "./Form.module.css";
import Modal from "./Modal";

const Form = (props) => {
  const [errorMessageForm, setErrorMessageForm] = useState();

  const inputHandler = function (e) {
    props.setInput(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    if (props.input === "") {
      setErrorMessageForm({
        title: "Error!",
        message: "You need to write something porra",
      });
    } else props.createTodo(props.input);

    props.setStatus("Incomplete");
  };

  return (
    <div>
      {errorMessageForm && (
        <Modal
          title={errorMessageForm.title}
          message={errorMessageForm.message}
          setErrorMessage={setErrorMessageForm}
        />
      )}
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
    </div>
  );
};

export default Form;
