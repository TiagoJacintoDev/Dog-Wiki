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
