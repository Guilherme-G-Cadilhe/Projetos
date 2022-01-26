// import { useState } from 'react'
// import Modal from './Modal';
// import Backdrop from './Backdrop';

// function Todo(props) {
//   const [modalOpen, setModal] = useState(false);

//   function deleteHandler() {
//     setModal(true)
//   }
//   function closeModal() {
//     setModal(false)
//   }

//   return (
//     <div className="card">
//       <h2>{props.text}</h2>
//       <div className="actions">
//         <button className="btn" onClick={deleteHandler}>
//           Delete
//         </button>
//       </div>
//       {modalOpen ? <Modal onClick={closeModal} /> : null} {/*Ou utilize a expressão seguinte */}
//       {modalOpen && <Backdrop onClick={closeModal} />}

//     </div>
//   );
// }

// export default Todo;
