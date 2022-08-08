import React from "react";
import styled from "styled-components";
import { black_1000 } from "../../UI/variables";
import icon_github from "../../assets/img/icon_github.svg";
import icon_linkedin from "../../assets/img/icon_linkedin.svg";

const FooterWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 2em 0 0.4em 0;
  background: linear-gradient(
    0deg,
    rgb(255, 255, 255, 0.1),
    ${black_1000} 100%
  );
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Brand = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

const MediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
`;

const MediaIcon = styled.img`
  height: 32px;
  padding-left: 4px;
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Brand>Murilo Fregonesi Falleiros</Brand>
      <MediaIcons>
        <a href="https://www.linkedin.com/in/murilofregonesi/">
          <MediaIcon src={icon_linkedin} />
        </a>
        <a href="https://github.com/murilofregonesi">
          <MediaIcon src={icon_github} />
        </a>
      </MediaIcons>
    </FooterWrapper>
  );
}
