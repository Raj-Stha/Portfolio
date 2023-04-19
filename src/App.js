import { Routes, Route } from 'react-router';
import './App.css';
import BaseRoute from './components/BaseRoute';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<BaseRoute />}>
        <Route path='/' element={< Homepage />}></Route>
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
