import dogLogo from '../../assets/images/dog-logo.png';
import dogBg from '../../assets/images/dog-background-image.png';
import { MdOutlineSearch } from 'react-icons/md';
import { useState } from 'react';
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
} from './styles';
import { Link } from 'react-router-dom';

export default function Hero({ dogs }) {
  const [inputValue, setInputValue] = useState('');
  const [isAutoCompleteOpen, setIsAutoCompleteOpen] = useState(false);
  const dogBreeds = dogs.map(dog => dog.name);
  const filteredBreeds = dogBreeds.filter(breed =>
    breed.toLowerCase().includes(inputValue.toLowerCase())
  );
  const currentDog = filteredBreeds
    .find((dog, index) => index === 0)
    .replace(' ', '');

  const randomBreeds = dogs.map(dog => dog.name);
  randomBreeds.sort(function () {
    return 0.5 - Math.random();
  });
  const firstRandomBreed = randomBreeds
    .find((dog, index) => index === 0)
    .replace(' ', '');

  return (
    <Container>
      <BackgroundImage src={dogBg} />
      <TextColumn>
        <Logo src={dogLogo} />
        <Paragraph>Get to know more about your dog breed </Paragraph>
        <form onSubmit={e => e.preventDefault} style={{ position: 'relative' }}>
          <Input
            type='text'
            placeholder='Enter your breed'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onFocus={() => setIsAutoCompleteOpen(true)}
          />
          <Button>
            <Link to={`/dogs/${currentDog}`}>
              <MdOutlineSearch size={25} color='#75758B' />
            </Link>
          </Button>
          {isAutoCompleteOpen && inputValue && filteredBreeds.length > 0 && (
            <AutoComplete>
              {filteredBreeds.map(breed => (
                <p
                  key={breed}
                  style={{ cursor: 'pointer' }}
                  onClick={e => {
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
          or try a <RandomLink to={`/dogs/${firstRandomBreed}`}>random</RandomLink>{' '}
          breed
        </Paragraph>
      </TextColumn>
    </Container>
  );
}
