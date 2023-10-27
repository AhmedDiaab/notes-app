import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
// React elements must start with capital letter
// this is how react deferentiates between native html elements 
// and custom elements
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React"/> 
      <Todo text="Learn Next"/> 
      <Todo text="Create Application"/> 
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
