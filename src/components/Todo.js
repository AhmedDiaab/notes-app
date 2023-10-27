/**
 * @param {import("../types/todo.props").TodoProps} props properties passed to component
 * @returns Todo JSX element
 */
function Todo(props) {
    function deleteHandler() {
        alert('deleted')
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Click me</button>
      </div>
    </div>
  );
}

export default Todo;
