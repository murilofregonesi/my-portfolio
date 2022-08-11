import React from "react";
import styled from "styled-components";
import data from "./data.json";
import avatar from "../../assets/img/avatar.jpeg";
import { black_200 } from "../../UI/variables";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 5em 4em;

  @media (orientation: portrait) {
    flex-direction: column;
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
`;

const BtnWrapper = styled.span`
  margin-left: 1em;
`;

const SummaryAvatar = styled.img`
  border-radius: 12px;
  height: 256px;
`;

const AvatarShadow = styled.span`
  height: 256px;
  width: 256px;
  background-color: ${black_200};
  border-radius: 12px;
  position: absolute;
  translate: 16px 16px;
  z-index: -1;
`;

export function Summary() {
  const navigate = useNavigate();

  return (
    <SummaryWrapper>
      <SummaryAvatar src={avatar} alt="Avatar do resumo" />
      <AvatarShadow />
      <SummaryInfo>
        <SummaryTitle>Sobre mim</SummaryTitle>
        <SummaryContent>{data.about}</SummaryContent>
        <BtnList>
          <BtnWrapper>
            <Button
              text={data.button_job}
              onClick={() => {
                navigate("/carreira");
              }}
            />
          </BtnWrapper>
          <BtnWrapper>
            <Button
              text={data.button_projects}
              transparent
              onClick={() => {
                navigate("/carreira");
              }}
            />
          </BtnWrapper>
        </BtnList>
      </SummaryInfo>
    </SummaryWrapper>
  );
}
