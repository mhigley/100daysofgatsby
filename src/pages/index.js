import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
// import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Layout } from "../components/Layout";
import Dump from "../components/Dump";

const IndexWrapper = styled.div``;
const PostWrapper = styled.div``;

export default ({ data }) => {
  return (
    <Layout>
      <Dump data={data} />
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
          return (
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          );
        })}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;
