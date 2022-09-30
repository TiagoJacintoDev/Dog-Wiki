import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { Dogs } from './Pages/Dogs';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dogs' element={<Dogs />} />
    </Routes>
  );
}
