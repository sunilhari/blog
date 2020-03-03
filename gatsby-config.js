// const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `sunilhari`,
    author: `Sunil Hari`,
    firstname: "Sunil",
    description: `My Little Space in Web`,
    whatDoIdo: "I code for Living",
    myLocation: "Bangalore,INDIA",
    siteUrl: `https://sunilhari.in`,
    social: {
      twitter: `sunilhario`,
      github: `sunilhari`,
      instagram: `sunilhario`,
    },
    menuConfig: [
      {
        label: "Home",
        path: "/",
        isExternal: false,
      },
      {
        label: "Blog",
        path: "/blogs",
        isExternal: false,
      },
      {
        label: "About",
        path: "/about",
        isExternal: false,
      },
      {
        label: "Github",
        path: "https://github.com/sunilhari",
        isExternal: true,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.analyticsid,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sunil Hari`,
        short_name: `sunilhari`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-page-progress`,
      options: {
        height: 3,
        prependToBody: true,
        color: `#003b9a`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
  ],
}
