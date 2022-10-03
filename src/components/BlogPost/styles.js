import styled from 'styled-components';
import { Container as ContainerH } from '../../styleHelpers/helpers';
import { variables as v } from '../../styleHelpers/variables';

export const Container = styled(ContainerH)`
  margin-top: ${v.size.small};
  background-color: black;
  color: white;
`;

export const Span = styled.span`
  display: flex;
  gap: ${v.size.smallest};
  align-items: center;
`;

export const TextWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${v.size.smaller};
  }
`;
