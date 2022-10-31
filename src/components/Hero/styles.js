import styled from "styled-components";
import { variables as v } from "../../styleHelpers/variables";
import { Container as ContainerH } from "../../styleHelpers/helpers";
import { Link as LinkH } from "react-router-dom";

export const Container = styled(ContainerH)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${v.size.smaller};
  margin-top: ${v.size.smaller};

  @media (min-width: ${v.ds.laptop}) {
    flex-direction: row;
    justify-content: center;
    gap: ${v.size.small};
  }
`;

export const BackgroundImage = styled.img`
  width: 50%;
  border-radius: 25%;
  border: 3px solid black;
  border-bottom: 0;

  @media (min-width: ${v.ds.laptop}) {
    width: 35%;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${v.size.smallest};
`;

export const Logo = styled.img`
  width: 20%;
`;

export const Paragraph = styled.p`
  font-size: ${v.fs.medium};
`;

export const Input = styled.input`
  font-size: ${v.fs.medium};
  padding: ${v.size.smallest} ${v.size.small} ${v.size.smallest}
    ${v.size.smaller};
  border-radius: 500px;
  border: 3px solid black;
  outline: 0;
  width: 100%;

  &:focus-visible {
    border-color: ${v.color.accent};
  }
`;

export const Button = styled.button`
  position: absolute;
  width: max-content;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${v.color.gray};
  right: ${v.size.smallest};
  top: 50%;
  translate: 0 -50%;
`;

export const AutoComplete = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: ${v.size.smallest};
  z-index: 100;
  background-color: white;
  max-height: ${v.size.larger};
  overflow-y: scroll;
  top: calc(100% + ${v.size.smallest});
  left: 50%;
  translate: -50% 0;
  width: 100%;
  padding: ${v.size.smallest};
  border-radius: ${v.size.smallest};
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 20px;

  & > * {
    padding: ${v.size.smallest};
    &:hover {
      background-color: ${v.color.lightGray};
    }
  }
`;

export const RandomLink = styled(LinkH)`
  color: ${v.color.link};
  text-decoration: none;
  font-weight: ${v.fw.semiBold};

  &:hover {
    color: ${v.color.hover};
  }
`;
