import styled from "styled-components";
import {
  Link as LinkH,
  Container as ContainerH,
} from "../../styleHelpers/helpers";
import { variables as v } from "../../styleHelpers/variables";

export const NavLink = styled(LinkH)`
  color: black;

  @media (max-width: ${v.ds.laptop}) {
    text-align: center;
  }
`;

export const LinkList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${v.size.smaller};
  list-style: none;

  @media (min-width: ${v.ds.laptop}) {
    flex-direction: row;
  }
`;

export const DogLogo = styled.img`
  cursor: pointer;
  @media (max-width: ${v.ds.tablet}) {
    margin-top: ${v.size.small};
  }
  width: 30%;
  @media (min-width: ${v.ds.laptop}) {
    width: 12%;
  }
`;

export const Container = styled(ContainerH)`
  margin-bottom: ${v.size.small};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${v.ds.tablet}) {
    & > :not(:last-child) {
      margin-bottom: ${v.size.smaller};
    }
  }

  @media (max-width: ${v.ds.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`;
