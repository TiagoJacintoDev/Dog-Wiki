import { NavLink, LinkList, Logo, Nav, ImgLink } from './styles';
import dogLogo from '../../assets/images/dog-logo.png';
import { Container } from '../../styleHelpers/helpers';

export default function Navbar() {
  return (
    <Container>
      <Nav>
        <ImgLink to='/'>
          <Logo src={dogLogo} />
        </ImgLink>

        <LinkList>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/dogs'>Full Cat List</NavLink>
          </li>
          <li>
            <NavLink to='/random'>Random Cat</NavLink>
          </li>
        </LinkList>
      </Nav>
    </Container>
  );
}
