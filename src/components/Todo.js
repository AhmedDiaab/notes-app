import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

/**
 * @param {import("../types/todo.props").TodoProps} props properties passed to component
 * @returns Todo JSX element
 */
function Todo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function deleteHandler() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Click me
        </button>
      </div>
      {isModalOpen && <Modal />}
      {isModalOpen && <Backdrop />}
    </div>
  );
}

export default Todo;
