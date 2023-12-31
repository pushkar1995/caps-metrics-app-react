import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details/Details';
import Homepage from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:code" element={<Details />} />
      <Route path="*" element={<div>Page not found 404</div>} />
    </Routes>
  );
}

export default App;
