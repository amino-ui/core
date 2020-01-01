import React from "react";
import styled from "styled-components";

const AminoLayout = styled.div`
  /* background: var(--amino-page-background); */
`;

export const Layout: React.FC = props => {
  return <AminoLayout>{props.children}</AminoLayout>;
};