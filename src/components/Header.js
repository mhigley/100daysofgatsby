import { Link } from "gatsby";
import React from "react";

export const Header = ({ siteTitle, siteDescription }) => (
  <Link
    to="/"
    style={{
      display: "block",
      textAlign: "center",
      borderBottom: "1px solid #eaeaea",
      marginBottom: "5vw"
    }}
  >
    <h1>{siteTitle}</h1>
    <p>{siteDescription}</p>
  </Link>
);
