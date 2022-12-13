import dogLogo from "../../assets/images/dog-logo.png";
import dogBg from "../../assets/images/dog-background-image.png";
import { MdOutlineSearch } from "react-icons/md";
import { useState } from "react";
import {
  BackgroundImage,
  Container,
  Logo,
  Paragraph,
  RandomLink,
  Input,
  Button,
  AutoComplete,
  TextColumn,
} from "./styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { removeWhitespace } from "../../helpers/functions";

export default function Hero({ dogs }) {
  const navigateTo = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isAutoCompleteOpen, setIsAutoCompleteOpen] = useState(false);

  const dogBreeds = dogs.map((dog) => dog.name);
  const filteredBreeds = dogBreeds.filter((breed) =>
    breed.toLowerCase().includes(inputValue.toLowerCase())
  );

  let currentDog;
  if (filteredBreeds.length > 0) {
    currentDog = filteredBreeds.find((dog, index) => index === 0);
  }

  function navigateToDogPage(e) {
    e.preventDefault();
    if (!currentDog) return;
    navigateTo(`/dogs/${removeWhitespace(currentDog)}`);
  }

  return (
    <Container>
      <BackgroundImage src={dogBg} />
      <TextColumn>
        <Logo src={dogLogo} />
        <Paragraph>Get to know more about your dog breed </Paragraph>
        <form onSubmit={navigateToDogPage} style={{ position: "relative" }}>
          <Input
            type="text"
            placeholder="Enter your breed"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsAutoCompleteOpen(true)}
          />
          <Button type="button">
            <Link onClick={navigateToDogPage}>
              <MdOutlineSearch size={25} color="#75758B" />
            </Link>
          </Button>
          {isAutoCompleteOpen && inputValue && filteredBreeds.length > 0 && (
            <AutoComplete>
              {filteredBreeds.map((breed) => (
                <p
                  key={breed}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    setInputValue(e.target.innerText);
                    setIsAutoCompleteOpen(false);
                  }}
                >
                  {breed}
                </p>
              ))}
            </AutoComplete>
          )}
        </form>
        <Paragraph>
          or try a <RandomLink to={`/random`}>random</RandomLink> breed
        </Paragraph>
      </TextColumn>
    </Container>
  );
}
