
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import English from './pages/English';
import Hindi from './pages/Hindi';
import Home from './pages/Home';
import Result from './pages/Result';
import TypingTest from './pages/TypingTest';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/hindi' element={<Hindi/>}/>
        <Route path='/english' element={<English/>}/>
        <Route path='/typing-test' element={<TypingTest />}/>
        <Route path='/result' element={<Result />}/>
      </Routes>
    </>
  );
}

export default App;
