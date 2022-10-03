import styled from 'styled-components';
import { variables as v } from './variables';
import { Link as LinkH } from 'react-router-dom';

export const Container = styled.div`
  border-radius: 40px;
  padding: ${v.size.smaller};
  @media (min-width: ${v.ds.laptop}) {
    margin-inline: 10%;
  }
`;

export const BreedLink = styled(LinkH)`
  text-decoration: none;
  color: white;
  width: 300px;
  margin-bottom: ${v.size.small};
  flex-grow: 1;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
`;

export const DogImg = styled.img`
  object-fit: cover;
  object-position: top;
  aspect-ratio: 4 / 3;
  border-radius: 20px;
  margin-bottom: ${v.size.smallest};

  transition: scale 250ms;
  ${({ isHovering }) => isHovering && `scale: 0.95`}
`;

export const Caption = styled.h3`
  ${({ isHovering }) => isHovering && `color: ${v.color.accent}`}
`;

export const SectionTitle = styled.h2`
  font-size: ${v.fs.largeLarger};
  font-weight: ${v.fw.bold};
`;

export const Link = styled(LinkH)`
  color: white;
  text-decoration: none;
  &:hover {
    color: ${v.color.accent};
  }
`;
