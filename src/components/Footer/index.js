import { useNavigate } from "react-router-dom";
import dogLogo from "../../assets/images/dog-logo.png";
import { Container, DogLogo, LinkList, NavLink } from "./styles";

export default function Footer() {
  const navigateTo = useNavigate();
  return (
    <Container>
      <DogLogo src={dogLogo} onClick={() => navigateTo("/")} />

      <LinkList>
        <NavLink>About</NavLink>
        <NavLink to="/dogs">Full Dogs List</NavLink>
        <NavLink to="/random">Random Dog</NavLink>
      </LinkList>
    </Container>
  );
}
