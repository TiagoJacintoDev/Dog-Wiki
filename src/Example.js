import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function Example() {
  const {
    isLoading,
    error,
    data: dogs,
  } = useQuery(['dogsData'], async () => {
    const res = await axios.get('https://api.thedogapi.com/v1/breeds');
    return res.data;
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      {dogs.map(dog => (
        <img src={dog.image.url}></img>
      ))}
    </div>
  );
}
