import React from "react";

/**
 *
 * @param {import("../types/backdrop.props").BackdropProps} props
 */
function Backdrop(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return <div className="backdrop" onClick={cancelHandler} />;
}

export default Backdrop;
