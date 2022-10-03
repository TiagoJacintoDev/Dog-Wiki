import { Link, SectionTitle } from '../../styleHelpers/helpers';
import { Container, Span, TextWrapper } from './styles';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function BlogPost() {
  return (
    <Container>
      <TextWrapper>
        <SectionTitle>
          <Link>Why should you have a dog?</Link>
        </SectionTitle>
        <p>
          Having a dog around can actually trigger the release of calming chemicals
          in your body which lower your stress and anxiety levels
        </p>

        <Link>
          <Span>
            READ MORE <HiOutlineArrowNarrowRight size={40} />
          </Span>
        </Link>
      </TextWrapper>
    </Container>
  );
}
