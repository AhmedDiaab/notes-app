import React from "react";

/**
 *
 * @param {import("../types/modal.props").ModalProps} props
 */
function Modal(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  function canceclHandler() {
    props.onCancel();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn" onClick={canceclHandler}>Cancel</button>
      <button className="btn brn-alt" onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
