import React from "react";
import styled from "styled-components";
import { black_1000, black_800, black_600, blue_200 } from "../../UI/variables";
import avatar from "../../assets/img/hero.png";
import data from "./data.json";

const HeroBox = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${blue_200};
  color: ${black_1000};
  margin-bottom: 5em;
`;

const HeroAvatar = styled.img`
  height: 360px;
  padding: 2em 0;

  @media (orientation: portrait) {
    height: 200px;
  }
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (orientation: portrait) {
    max-width: 164px;
  }
`;

const HeroInfoHello = styled.p`
  color: ${black_1000};
  font-size: 16px;
  margin-bottom: 1em;
  padding-left: 16px;

  @media (orientation: portrait) {
    font-size: 12px;
  }
`;

const HeroInfoName = styled.p`
  color: ${black_800};
  font-weight: bold;
  font-size: 42px;
  margin: 0;

  @media (orientation: portrait) {
    font-size: 18px;
  }
`;

const HeroInfoPosition = styled.p`
  color: ${black_600};
  font-weight: bold;
  font-size: 20px;
  margin-top: 0.5em;

  @media (orientation: portrait) {
    font-size: 12px;
  }
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
