const siteMetadata = {
  title: `The Localhost Blog`,
  description: `Working through a Gatsby blog w/ MDX tutorial`,
  image: `/default-site-image.jpg`,
  siteUrl: `http://localhost:8000`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@matthewhigley`,
  authorName: `Matthew Higley`
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    }
  ]
};
