import React from "react";
import styled from "styled-components";
import data from "./data.json";

const BasicsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 0.6rem;
`;

const Title = styled.span`
  font-size: 16px;
  padding-bottom: 0.4rem;
`;

const Local = styled.span`
  font-size: 14px;
`;

export function ProfileBasics() {
  return (
    <BasicsWrapper>
      <Name>{data.name}</Name>
      <Title>{data.title}</Title>
      <Local>{data.local}</Local>
    </BasicsWrapper>
  );
}
