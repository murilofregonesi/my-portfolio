import React from "react";
import styled from "styled-components";
import Summary from "../../components/Summary";
import icon_creative from "../../assets/img/icon_creative.svg";
import icon_database from "../../assets/img/icon_database.svg";
import icon_professional from "../../assets/img/icon_professional.svg";
import icon_web from "../../assets/img/icon_web.svg";
import Skill from "../../components/Skill";
import jsonData from "./data.json";
import Translate from "../../UI/Translate";
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
          title={Translate(jsonData, "web_dev_title")}
          description={Translate(jsonData, "web_dev_description")}
        />
        <Skill
          image={icon_database}
          title={Translate(jsonData, "database_title")}
          description={Translate(jsonData, "database_description")}
        />
      </SkillList>
      <SkillList>
        <Skill
          image={icon_creative}
          title={Translate(jsonData, "creative_title")}
          description={Translate(jsonData, "creative_description")}
        />
        <Skill
          image={icon_professional}
          title={Translate(jsonData, "professional_title")}
          description={Translate(jsonData, "professional_description")}
        />
      </SkillList>
    </>
  );
}
