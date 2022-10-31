import { useMemo, useState } from "react";
import {
  DogImg,
  Grid,
  BreedLink,
  Caption,
  Link,
} from "../../styleHelpers/helpers";
import { Container, PreTitle, SectionTitle } from "./styles";
import { removeWhitespace } from "../../helpers/functions";

export default function FeaturedBreeds({ dogs }) {
  const [hoveringId, setHoveringId] = useState(null);
  const fourRandomBreeds = useMemo(() => {
    const randomBreeds = dogs.map((dog) => dog);
    randomBreeds.sort(function () {
      return 0.5 - Math.random();
    });
    return randomBreeds.filter((dog, index) => index < 4);
  }, []);

  return (
    <Container>
      <PreTitle>Complete Breed List</PreTitle>
      <SectionTitle>
        <Link to="/dogs">66+ Breeds for you to explore</Link>
      </SectionTitle>
      <Grid>
        {fourRandomBreeds.map((breed) => (
          <BreedLink
            style={{ margin: 0 }}
            to={`/dogs/${removeWhitespace(breed.name)}`}
            key={breed.id}
            onMouseEnter={() => setHoveringId(breed.id)}
            onMouseLeave={() => setHoveringId(null)}
          >
            <DogImg
              isHovering={hoveringId === breed.id}
              src={breed.image.url}
            />
            <Caption
              style={{ marginBottom: "30px" }}
              isHovering={hoveringId === breed.id}
            >
              {breed.name}
            </Caption>
          </BreedLink>
        ))}
      </Grid>
    </Container>
  );
}
