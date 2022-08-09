import React from "react";
import styled from "styled-components";
import data from "./data.json";

const BasicsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 512px;
  margin: 0 3em;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 0.6rem;
`;

const Local = styled.span`
  font-size: 14px;
`;

export function ProfileBasics() {
  return (
    <BasicsWrapper>
      <Title>Sobre mim</Title>
      <Local>{data.about}</Local>
    </BasicsWrapper>
  );
}
