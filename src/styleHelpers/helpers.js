import styled from 'styled-components';
import { variables as v } from './variables';

export const Container = styled.div`
  border-radius: 40px;
  padding: ${v.size.smaller};
  @media (min-width: ${v.ds.laptop}) {
    margin-inline: 10%;
  }
`;
