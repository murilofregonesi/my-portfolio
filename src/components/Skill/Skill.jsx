import React from "react";
import styled from "styled-components";
import { white_1000, white_800 } from "../../UI/variables";

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 4em;
  max-width: 256px;
  text-align: center;
  flex-shrink: 1;
  flex-grow: 1;

  @media (orientation: portrait) {
    margin: 1em 2em;
  }
`;

const SkillImg = styled.img`
  height: 32px;
`;

const SkillTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${white_1000};
`;

const SkillDescription = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${white_800};
`;

export function Skill({ image, title, description }) {
  return (
    <SkillWrapper>
      <SkillImg src={image} />
      <SkillTitle>{title}</SkillTitle>
      <SkillDescription
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </SkillWrapper>
  );
}
