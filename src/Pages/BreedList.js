import { DogBreeds } from '../components/DogBreeds';

export function BreedList({ dogs }) {
  return (
    <>
      <DogBreeds dogs={dogs} />
    </>
  );
}
