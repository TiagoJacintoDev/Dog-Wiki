import {
  Container as ContainerH,
  SectionTitle as SectionTitleH,
} from '../../styleHelpers/helpers';
import styled from 'styled-components';
import { variables as v } from '../../styleHelpers/variables';

export const PreTitle = styled.p`
  margin-top: ${v.size.smaller};
`;

export const Container = styled(ContainerH)`
  @media (min-width: ${v.ds.laptop}) {
    margin-top: ${v.size.small};
  }
  background-color: black;
  color: white;
`;

export const SectionTitle = styled(SectionTitleH)`
  margin-bottom: ${v.size.smaller};
`;
