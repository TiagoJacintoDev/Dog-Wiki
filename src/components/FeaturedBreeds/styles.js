import { Container as ContainerH } from '../../styleHelpers/helpers';
import styled from 'styled-components';
import { variables as v } from '../../styleHelpers/variables';

export const PreTitle = styled.p`
  margin-top: ${v.size.smallest};
`;

export const Container = styled(ContainerH)`
  background-color: black;
  color: white;
`;
