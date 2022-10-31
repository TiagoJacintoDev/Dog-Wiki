import { Container, Title } from "./styles";
import Navbar from "../../components/Navbar";
import { Grid, BreedLink, DogImg, Caption } from "../../styleHelpers/helpers";
import { removeWhitespace } from "../../helpers/functions";

import { useState } from "react";

export default function BreedList({ dogs }) {
  const [hoveringId, setHoveringId] = useState(null);

  return (
    <>
      <Navbar />
      <Container>
        <Title>Breed List</Title>
        <Grid>
          {dogs.map((dog) => (
            <BreedLink
              to={`/dogs/${removeWhitespace(dog.name)}`}
              key={dog.id}
              onMouseEnter={() => setHoveringId(dog.id)}
              onMouseLeave={() => setHoveringId(null)}
            >
              <DogImg isHovering={hoveringId === dog.id} src={dog.image.url} />
              <Caption isHovering={hoveringId === dog.id}>{dog.name}</Caption>
            </BreedLink>
          ))}
        </Grid>
      </Container>
    </>
  );
}
