import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <Container>{children}</Container>
    </>
  );
};
