import React from "react";
import styled from "styled-components";
import { black_1000 } from "../../UI/variables";
import avatar from "../../assets/img/avatar.jpeg";
import data from "./data.json";

const HeroBox = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fdb5c3;
  color: ${black_1000};
  margin-bottom: 5em;
`;

const HeroAvatar = styled.img`
  height: 256px;
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroInfoHello = styled.p`
  color: ${black_1000};
  font-size: 16px;
  margin-bottom: 1em;
`;

const HeroInfoName = styled.p`
  color: ${black_1000};
  font-weight: bold;
  font-size: 32px;
  margin: 0;
  padding-left: 16px;
`;

const HeroInfoPosition = styled.p`
  color: ${black_1000};
  font-weight: bold;
  font-size: 16px;
  margin-top: 0.5em;
  padding-left: 16px;
`;

export function Hero() {
  return (
    <HeroBox>
      <HeroInfo>
        <HeroInfoHello>{data.hello}</HeroInfoHello>
        <HeroInfoName>Murilo Fregonesi Falleiros</HeroInfoName>
        <HeroInfoPosition>{data.position}</HeroInfoPosition>
      </HeroInfo>
      <HeroAvatar src={avatar} alt="Avatar do Hero" />
    </HeroBox>
  );
}
