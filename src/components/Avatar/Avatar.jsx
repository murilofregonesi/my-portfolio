import React from "react";
import styled from "styled-components";
import avatar from "../../assets/img/avatar.jpeg";

const AvatarImg = styled.img`
  border-radius: 50%;
  height: 128px;
`;

export function Avatar() {
  return <AvatarImg src={avatar} alt="Avatar" />;
}
