import React from "react";
import styled from "styled-components";

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 4em;
  max-width: 220px;
  text-align: center;
`;

const SkillImg = styled.img`
  height: 32px;
`;

const SkillTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const SkillDescription = styled.p`
  font-size: 14px;
  margin: 0;
`;

export function Skill({ image, title, description }) {
  return (
    <SkillWrapper>
      <SkillImg src={image} />
      <SkillTitle>{title}</SkillTitle>
      <SkillDescription>{description}</SkillDescription>
    </SkillWrapper>
  );
}
