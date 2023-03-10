import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Detail from './components/Detail';
import './App.css';

const App = () => (
  <div>
    <header className="App-header">
      <Navbar />
      <div className="line" />
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  </div>
);

export default App;
