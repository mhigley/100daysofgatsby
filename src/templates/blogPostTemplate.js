import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Layout } from "../components/Layout";

const Image = styled(Img)`
  border-radius: 5px;
`;

export default ({ data, pageContext }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName
  } = useSiteMetadata();
  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title, date, cover } = frontmatter;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      {!!frontmatter.cover ? (
        <>
          <Image sizes={frontmatter.cover.childImageSharp.sizes} />
          <small>{frontmatter.coverCredit}</small>
        </>
      ) : null}
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
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
        coverCredit
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
