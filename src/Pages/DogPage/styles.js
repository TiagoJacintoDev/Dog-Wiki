import styled from "styled-components";
import { variables as v } from "../../styleHelpers/variables";
import { Container as ContainerH } from "../../styleHelpers/helpers";

export const Characteristic = styled.strong`
  font-weight: ${v.fw.bold};
`;

export const Container = styled.div`
  margin-inline: ${v.size.smaller};
  margin-block: ${v.size.small};
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: ${v.size.smaller};
  }
`;
