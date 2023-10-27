/**
 * @param {import("../types/todo.props").TodoProps} props properties passed to component
 * @returns Todo JSX element
 */
function Todo(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn">Click me</button>
      </div>
    </div>
  );
}

export default Todo;
