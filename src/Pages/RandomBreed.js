import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RandomBreed({ dogs }) {
  const navigateTo = useNavigate();
  const randomBreeds = dogs.map(dog => dog.name);
  randomBreeds.sort(function () {
    return 0.5 - Math.random();
  });
  const firstRandomBreed = randomBreeds
    .find((dog, index) => index === 0)
    .replace(/\s/g, '');

  useEffect(() => {
    const navigateTimeout = setTimeout(() => {
      navigateTo(`/dogs/${firstRandomBreed}`);
    }, 500);

    return () => {
      clearTimeout(navigateTimeout);
    };
  }, []);
}
