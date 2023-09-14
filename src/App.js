import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<Details />} />
        <Route path="*" element={<div>Page not found 404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
