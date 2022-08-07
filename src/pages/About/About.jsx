import React from "react";
import styled from "styled-components";
import Avatar from "../../components/Avatar";
import ProfileBasics from "../../components/ProfileBasics";

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export function About() {
  return (
    <HeaderInfo>
      <Avatar />
      <ProfileBasics />
    </HeaderInfo>
  );
}
