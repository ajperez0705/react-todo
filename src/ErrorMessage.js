import style from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return (
    <div className={style["error-container"]}>
      <h4 className={style["error-message"]}>{props.message}</h4>
    </div>
  );
};

export default ErrorMessage;
