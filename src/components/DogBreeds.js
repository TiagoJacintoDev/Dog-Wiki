import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../services/axiosInstance';

export function DogBreeds() {
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
    <div>
      {dogs.map(dog => (
        <div key={dog.id}>
          <img src={dog.image.url}></img>
          <h3>{dog.name}</h3>
        </div>
      ))}
    </div>
  );
}
