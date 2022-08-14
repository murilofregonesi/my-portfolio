import React from "react";
import image from "../../assets/img/page_404.png";
import styled from "styled-components";

const Image = styled.img`
  width: 300px;
  align-self: center;
  margin-top: 5em;
`;

export function PageNotFound() {
  return <Image src={image} />;
}
