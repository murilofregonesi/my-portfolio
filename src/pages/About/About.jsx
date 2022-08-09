import React from "react";
import styled from "styled-components";
import ProfileBasics from "../../components/ProfileBasics";
import avatar from "../../assets/img/avatar.jpeg";
import icon_creative from "../../assets/img/icon_creative.svg";
import icon_database from "../../assets/img/icon_database.svg";
import icon_professional from "../../assets/img/icon_professional.svg";
import icon_web from "../../assets/img/icon_web.svg";
import Skill from "../../components/Skill";
import data from "./data.json";

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 3em 3em;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  height: 128px;
`;

const SkillList = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export function About() {
  return (
    <>
      <HeaderInfo>
        <AvatarImg src={avatar} alt="Avatar" />
        <ProfileBasics />
      </HeaderInfo>
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
