import { Fragment } from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";
import Card from "./Card";

const Modal = (props) => {
  const onConfirmHandler = function (e) {
    e.preventDefault();

    props.setErrorMessage("");
  };

  const ModalPopup = function () {
    return (
      <Fragment>
        <div className={style.modal}>
          <Card className={style.modal}>
            <header className={style.header}>
              <h2>{props.title}</h2>
            </header>
            <div className={style.content}>
              <p>{props.message}</p>
            </div>
            <footer className={style.actions}>
              <button onClick={onConfirmHandler}>Okay</button>
            </footer>
          </Card>
        </div>
      </Fragment>
    );
  };

  const Backdrop = function () {
    return <div className={style.backdrop} onClick={props.onConfirm} />;
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("modal"))}
      {ReactDOM.createPortal(
        <ModalPopup title={props.title} message={props.message} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
