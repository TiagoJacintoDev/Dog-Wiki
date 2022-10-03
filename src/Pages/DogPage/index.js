import { useParams } from 'react-router-dom';
import { DogImg, SectionTitle } from '../../styleHelpers/helpers';
import { Characteristic, Container } from './styles';

export default function DogPage({ dogs }) {
  const { dog } = useParams();
  const dogName = dog.split(/(?=[A-Z])/).join(' ');
  const currentDog = dogs.find(dog => dog.name === dogName);

  return (
    <Container>
      <DogImg src={currentDog.image.url} />
      <SectionTitle>{currentDog.name}</SectionTitle>
      <div>
        {currentDog.bred_for && (
          <p>
            <Characteristic>Bred For:</Characteristic> {currentDog.bred_for}
          </p>
        )}
        {currentDog.breed_group && (
          <p>
            <Characteristic>Breed Group:</Characteristic> {currentDog.breed_group}
          </p>
        )}
        {currentDog.temperament && (
          <p>
            <Characteristic>Temperament:</Characteristic> {currentDog.temperament}
          </p>
        )}
        {currentDog.origin && (
          <p>
            <Characteristic>Origin:</Characteristic> {currentDog.origin}
          </p>
        )}
        {currentDog.life_span && (
          <p>
            <Characteristic>Lifespan:</Characteristic> {currentDog.life_span}
          </p>
        )}
      </div>
    </Container>
  );
}
