import React from "react";
import styled from "styled-components";
import {
  black_1000,
  orange_600,
  orange_1000,
  orange_200,
} from "../../UI/variables";
import avatar from "../../assets/img/hero.png";
import data from "./data.json";

const HeroBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${orange_200};
  color: ${black_1000};
  margin-bottom: 5em;
`;

const HeroAvatar = styled.img`
  height: 280px;
  padding: 2em 0 3em 0;

  @media (orientation: portrait) {
    height: 248px;
  }
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroInfoTitle = styled.p`
  color: ${orange_1000};
  font-weight: bold;
  font-size: 42px;
  margin: 0;
  padding-top: 2em;

  @media (orientation: portrait) {
    font-size: 24px;
    max-width: 70%;
  }
`;

const HeroInfoSubtitle = styled.p`
  color: ${orange_600};
  font-weight: bold;
  font-size: 20px;
  margin-top: 1.5em;

  @media (orientation: portrait) {
    font-size: 12px;
    text-align: center;
    max-width: 90%;
  }
`;

export function Hero() {
  return (
    <HeroBox>
      <HeroInfo>
        <HeroInfoTitle>{data.title}</HeroInfoTitle>
        <HeroInfoSubtitle>{data.subtitle}</HeroInfoSubtitle>
      </HeroInfo>
      <HeroAvatar src={avatar} alt="Avatar do Hero" />
    </HeroBox>
  );
}
