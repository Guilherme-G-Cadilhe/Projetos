import { Route, Routes } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';

import Layout from './components/layout/Layout'


function App(props) {
  //localhost:3000/
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}></Route>
        <Route path='/new-meetup' element={<NewMeetupsPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

// -----------------------------------------------------
// import Todo from './components/Todo';


// function App(props) {
//   return (
//     <div>
//       <h1>My Todos</h1>
//       <Todo text="My Todos" />
//       <Todo text="Colocar comida pros gato" />
//       <Todo text="Fazer API POSorders" />

//     </div>
//   );
// }

// export default App;
