import React from "react";
import styled from "styled-components";
import Summary from "../../components/Summary";
import icon_creative from "../../assets/img/icon_creative.svg";
import icon_database from "../../assets/img/icon_database.svg";
import icon_professional from "../../assets/img/icon_professional.svg";
import icon_web from "../../assets/img/icon_web.svg";
import Skill from "../../components/Skill";
import data from "./data.json";
import { Hero } from "../../components/Hero/Hero";

const SkillList = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (orientation: portrait) {
    max-width: 80%;
    align-self: center;
  }
`;

export function About() {
  return (
    <>
      <Hero />
      <Summary />
      <SkillList>
        <Skill
          image={icon_web}
          title={data.web_dev.title}
          description={data.web_dev.description}
        />
        <Skill
          image={icon_database}
          title={data.database.title}
          description={data.database.description}
        />
      </SkillList>
      <SkillList>
        <Skill
          image={icon_creative}
          title={data.creative.title}
          description={data.creative.description}
        />
        <Skill
          image={icon_professional}
          title={data.professional.title}
          description={data.professional.description}
        />
      </SkillList>
    </>
  );
}
