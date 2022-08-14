import React from "react";
import styled from "styled-components";
import data from "./data.json";
import photo from "../../assets/img/workstation.jpg";
import { blue_200, blue_600 } from "../../UI/variables";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import icon_link from "../../assets/img/icon_link.svg";

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 5em 4em;

  @media (orientation: portrait) {
    flex-direction: column;
    margin: 0 0 3em 0;
    justify-content: center;
    align-items: center;
  }
`;

const SummaryInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 512px;
  margin: 0 4.5em;
`;

const SummaryTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 0.6rem;
`;

const SummaryContent = styled.span`
  font-size: 14px;
`;

const BtnList = styled.span`
  margin-top: 2em;
  display: flex;

  @media (orientation: portrait) {
    display: none;
  }
`;

const BtnWrapper = styled.span`
  margin-left: 1em;
`;

const SummaryAvatar = styled.img`
  border-radius: 12px;
  max-height: 320px;
  max-width: 285px;
  width: auto;
  height: auto;
  box-shadow: 15px 15px 0px -5px ${blue_200};
  border: 2px solid ${blue_600};

  @media (orientation: portrait) {
    width: 202px;
    height: 226px;
    margin-bottom: 3em;
  }
`;

export function Summary() {
  const navigate = useNavigate();

  return (
    <SummaryWrapper>
      <SummaryAvatar src={photo} alt="Avatar do resumo" />
      <SummaryInfo>
        <SummaryTitle>Sobre mim</SummaryTitle>
        <SummaryContent>{data.about}</SummaryContent>
        <BtnList>
          <BtnWrapper>
            <Button
              text={data.button_job}
              icon={icon_link}
              onClick={() => {
                navigate("/carreira");
              }}
            />
          </BtnWrapper>
          <BtnWrapper>
            <Button
              text={data.button_projects}
              icon={icon_link}
              transparent
              onClick={() => {
                navigate("/projetos");
              }}
            />
          </BtnWrapper>
        </BtnList>
      </SummaryInfo>
    </SummaryWrapper>
  );
}
