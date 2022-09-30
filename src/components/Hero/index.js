import dogLogo from '../../assets/images/dog-logo.png';
import dogBg from '../../assets/images/dog-background-image.png';
import { MdOutlineSearch } from 'react-icons/md';
import { useState } from 'react';
import {
  BackgroundImage,
  Container,
  Logo,
  Paragraph,
  Link,
  Input,
  Button,
  AutoComplete,
} from './styles';

export default function Hero({ dogs }) {
  const [inputValue, setInputValue] = useState('');
  const [isAutoCompleteOpen, setIsAutoCompleteOpen] = useState(false);
  const dogBreeds = dogs.map(dog => dog.name);
  const filteredBreeds = dogBreeds.filter(breed =>
    breed.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <Container>
      <BackgroundImage src={dogBg} />
      <Logo src={dogLogo} />
      <Paragraph>Get to know more about your dog breed </Paragraph>
      <form style={{ position: 'relative' }}>
        <Input
          type='text'
          placeholder='Enter your breed'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onFocus={() => setIsAutoCompleteOpen(true)}
        />
        <Button>
          <MdOutlineSearch size={25} />
        </Button>
        {isAutoCompleteOpen && inputValue && filteredBreeds.length > 0 && (
          <AutoComplete>
            {filteredBreeds.map(breed => (
              <p
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
        or try a <Link>random</Link> breed
      </Paragraph>
    </Container>
  );
}
