import React from "react";
import styled from "styled-components";
import ProfileBasics from "../../components/ProfileBasics";
import avatar from "../../assets/img/avatar.jpeg";

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  height: 128px;
`;

export function About() {
  return (
    <HeaderInfo>
      <AvatarImg src={avatar} alt="Avatar" />
      <ProfileBasics />
    </HeaderInfo>
  );
}
