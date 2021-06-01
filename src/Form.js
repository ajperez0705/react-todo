const Form = (props) => {
  const inputHandler = function (e) {
    props.setInput(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    props.createTodo(props.input);
  };

  return (
    <form action="">
      <input value={props.input} onChange={inputHandler} type="text" />
      <button onClick={submitHandler} className="form-btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
