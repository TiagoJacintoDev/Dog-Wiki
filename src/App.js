import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { BreedList } from './Pages/BreedList';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './services/axiosInstance';
import RandomBreed from './Pages/RandomBreed';
import Footer from './components/Footer';
import DogPage from './Pages/DogPage';

export default function App() {
  const {
    data: dogs,
    isLoading,
    error,
  } = useQuery(['dogsData'], async () => {
    const res = await axiosInstance.get('breeds');
    return res.data;
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <>
      <Routes>
        <Route path='/' element={<Home dogs={dogs} />} />
        <Route path='/dogs' element={<BreedList dogs={dogs} />} />
        <Route path='/random' element={<RandomBreed dogs={dogs} />} />
        <Route path='/dogs/:dog' element={<DogPage dogs={dogs} />} />
      </Routes>
      <Footer />
    </>
  );
}
