// add support for postCSS processing
const postCSSPresetEnv = require(`postcss-preset-env`)
const postCSSImport = require(`postcss-import`)
const postCSSColorFunction = require(`postcss-color-function`)
const postCSSMixins = require(`postcss-mixins`)
const postCSSVariables = require(`postcss-css-variables`)
const postCSSNested = require(`postcss-nested`)

// add support for .env file in `gastby-source-cloudinary`
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Kathleen McMahon | Engineer - Designer - Speaker`,
    author: `Kathleen McMahon`,
    description: `A software engineer, product designer, and internationally-known conference speaker with a passion for making inclusive and accessible experiences.`,
    url: "https://kathleenmcmahon.dev", // No trailing slash allowed!
    siteUrl: `https://kathleenmcmahon.dev`,
    image:
      "https://res.cloudinary.com/kathleenmcmahon/image/upload/w_auto,q_auto/v1590693720/kathleenmcmahon-dot-dev/social-sharing-card.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@resource11",
  },
  plugins: [
    `@pauliescanlon/gatsby-mdx-embed`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-autolink-headers`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-catch-links`,
    `gatsby-remark-reading-time`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          postCSSImport(),
          postCSSPresetEnv({
            stage: 0,
            preserve: true,
            browsers: ">0.25%, not op_mini all",
            features: {
              "color-mod-function": false,
              "focus-within-pseudo-class": false,
            },
          }),
          postCSSVariables({
            preserve: true,
          }),
          postCSSColorFunction({
            preserveCustomProps: false,
          }),
          postCSSMixins(),
          postCSSNested(),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/templates/default-mdx-layout.js`),
          posts: require.resolve(`./src/templates/post-mdx-layout.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1000,
              maxHeight: 250,
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              // className: `autolinkHeadings`,
              maintainCase: false,
              id: `data-id`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-164033871-1`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edges) => {
                return Object.assign({}, edges.node.frontmatter, {
                  description: edges.node.excerpt,
                  date: edges.node.frontmatter.date,
                  author: edges.node.frontmatter.author,
                  url: `${site.siteMetadata.siteUrl}${edges.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${edges.node.fields.slug}`,
                  categories: edges.node.frontmatter.tags,
                })
              })
            },
            query: `
              {
                allMdx(filter: {frontmatter: {isHidden: {eq: false}, isPublished: {eq: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
                  edges {
                    node {
                      frontmatter {
                        title
                        tags
                        author
                        date(formatString: "DD MMMM, YYYY")
                      }
                      excerpt
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: `Kathleen McMahon | Engineer - Designer - Speaker`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `samples/`,
      },
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: "kathleenmcmahon-dot-dev",
        fluidMaxWidth: 800,
        fluidMinWidth: 200,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // Path to the data directory
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svgs`,
        path: `${__dirname}/src/svgs`,
      },
    },
  ],
}
