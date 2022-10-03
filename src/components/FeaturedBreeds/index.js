import { useMemo, useState } from 'react';
import { DogImg, Grid, BreedLink, Caption, Link } from '../../styleHelpers/helpers';
import { Container, PreTitle, SectionTitle } from './styles';

export default function FeaturedBreeds({ dogs }) {
  const [idOfHovering, setIdOfHovering] = useState(null);
  const fourRandomBreeds = useMemo(() => {
    const randomBreeds = dogs.map(dog => dog);
    randomBreeds.sort(function () {
      return 0.5 - Math.random();
    });
    return randomBreeds.filter((dog, index) => index < 4);
  }, []);

  return (
    <Container>
      <PreTitle>Complete Breed List</PreTitle>
      <SectionTitle>
        <Link to='/dogs'>66+ Breeds for you to explore</Link>
      </SectionTitle>
      <Grid>
        {fourRandomBreeds.map(breed => (
          <BreedLink
            style={{ margin: 0 }}
            to={`/dogs/${breed.name.replace(' ', '')}`}
            key={breed.id}
            onMouseEnter={() => setIdOfHovering(breed.id)}
            onMouseLeave={() => setIdOfHovering(null)}
          >
            <DogImg isHovering={idOfHovering === breed.id} src={breed.image.url} />
            <Caption
              style={{ marginBottom: '30px' }}
              isHovering={idOfHovering === breed.id}
            >
              {breed.name}
            </Caption>
          </BreedLink>
        ))}
      </Grid>
    </Container>
  );
}
