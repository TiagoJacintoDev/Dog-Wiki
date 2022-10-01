import styled from 'styled-components';
import { variables as v } from '../../styleHelpers/variables';
import { Container as ContainerH } from '../../styleHelpers/helpers';
import { Link as LinkH } from 'react-router-dom';

export const Container = styled(ContainerH)`
  background-color: black;
  color: white;
`;

export const Title = styled.h1`
  margin-bottom: ${v.size.smaller};
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
  aspect-ratio: 4 / 3;
  border-radius: 20px;
  margin-bottom: ${v.size.smallest};

  transition: scale 250ms;
  ${({ isHovering }) => isHovering && `scale: 0.95`}
`;

export const Caption = styled.h3`
  ${({ isHovering }) => isHovering && `color: ${v.color.accent}`}
`;
