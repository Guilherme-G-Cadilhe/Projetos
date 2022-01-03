import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App(props) {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="My Todos" />
      <Todo text="Colocar comida pros gato" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
