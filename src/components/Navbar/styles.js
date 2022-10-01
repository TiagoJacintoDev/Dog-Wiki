import styled from 'styled-components';
import { variables as v } from '../../styleHelpers/variables';
import { Link as LinkH } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: ${v.size.small};
`;

export const ImgLink = styled(LinkH)`
  width: 10%;

  transition: scale 250ms;
  &:hover {
    scale: 0.95;
  }

  @media (max-width: ${v.ds.tablet}) {
    width: ${v.size.medium};
    margin: ${v.size.smaller} auto;
  }
`;

export const Logo = styled.img``;

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${v.size.small};
  font-size: ${v.fs.medium};
  @media (max-width: ${v.ds.tablet}) {
    display: none;
  }
`;

export const NavLink = styled(LinkH)`
  color: black;
  text-decoration: none;
  &:hover {
    color: ${v.color.accent};
  }
`;
