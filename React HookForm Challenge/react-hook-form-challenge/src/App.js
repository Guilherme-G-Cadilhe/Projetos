import { Route, Routes } from 'react-router-dom';

import Step1 from './pages/Step1';
import { Step2 } from './pages/Step2';
import { Step3 } from './pages/Step3';
import { Step4 } from './pages/Step4';

import { Header } from './components/Header';
// dropzone to drag and drop files
// yup to validate the fields
// libhponenumber-js to validate phoe numbers
// hookform/resolvers to be able to use yup with react hook form
// react confetti

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path="/" element={<Step1 />}></Route>
          <Route path="/step2" element={<Step2 />}></Route>
          <Route path="/step3" element={<Step3 />}></Route>
          <Route path="/result" element={<Step4 />}></Route>
        </Routes>
      </Header>
    </div>
  );
}

export default App;
