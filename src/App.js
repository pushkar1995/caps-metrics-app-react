import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:yearToFilter" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
