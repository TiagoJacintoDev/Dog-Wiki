import {
  Caption,
  Container,
  DogImg,
  Grid,
  Logo,
  Title,
  BreedLink,
  LinkList,
} from './styles';
import Navbar from '../../components/Navbar';

import { useState } from 'react';

export function BreedList({ dogs }) {
  const [idOfHovering, setIdOfHovering] = useState(null);
  return (
    <>
      <Navbar />
      <Container>
        <Title>Breed List</Title>
        <Grid>
          {dogs.map(dog => (
            <BreedLink
              to={`/dogs/${dog.name.replace(' ', '')}`}
              key={dog.id}
              onMouseEnter={() => setIdOfHovering(dog.id)}
              onMouseLeave={() => setIdOfHovering(null)}
            >
              <DogImg isHovering={idOfHovering === dog.id} src={dog.image.url} />
              <Caption isHovering={idOfHovering === dog.id}>{dog.name}</Caption>
            </BreedLink>
          ))}
        </Grid>
      </Container>
    </>
  );
}
