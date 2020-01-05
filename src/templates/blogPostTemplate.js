import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Dump from "../components/Dump";
import { Layout } from "../components/Layout";

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <Dump prev={prev} />
      <Dump next={next} />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {prev === false ? null : (
        <>
          {prev && (
            <>
              <p>previous post:</p>
              <Link to={prev.fields.slug}>
                <p>{prev.frontmatter.title}</p>
              </Link>
            </>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <>
              <p>next post:</p>
              <Link to={next.fields.slug}>
                <p>{next.frontmatter.title}</p>
              </Link>
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
