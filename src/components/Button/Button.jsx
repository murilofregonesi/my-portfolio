import React from "react";
import styled from "styled-components";
import {
  black_200,
  black_400,
  black_600,
  white_1000,
} from "../../UI/variables";

const Btn = styled.button`
  border-radius: 4px;
  background-color: ${(props) =>
    props.transparent ? "rgba(0,0,0,0)" : black_600};
  color: ${white_1000};
  width: fit-content;
  padding: 1em 1em;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid ${black_200};

  :hover {
    background-color: ${black_400};
  }
`;

export function Button({ text, onClick, transparent }) {
  return (
    <Btn {...(transparent ? { transparent } : {})} onClick={onClick}>
      {text}
    </Btn>
  );
}
