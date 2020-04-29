const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // // you only want to operate on `Md` nodes. If you had content from a
  // // remote CMS you could also check to see if the parent node was a
  // // `File` node here
  // if (node.internal.type === `MarkdownRemark`) {
  //   const slug = createFilePath({ node, getNode, basePath: `pages` })
  //   createNodeField({
  //     // Name of the field you are adding
  //     name: `slug`,
  //     // Individual MD node
  //     node,
  //     // Generated value based on files in the src/pages folder
  //     // don't need a separating "/" before the value because
  //     // createFilePath returns a path with the leading "/".
  //     value: slug,
  //   })
  // }

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/blog${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            body
            excerpt
            frontmatter {
              author
              date
              path
              title
            }
          }
        }
      }
    }
  `)
  // console.log(JSON.stringify(result, null, 4))

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // // Create variable for Markdown blog post data.
  // const mdPosts = result.data.allMarkdownRemark.edges

  // Create variable for MDX blog post data.
  const mdxPosts = result.data.allMdx.edges

  // // Create Markdown blog post pagess.
  // // you'll call `createPage` for each result
  // mdPosts.forEach(({ node }) => {
  //   createPage({
  //     // This is the slug you created before
  //     // (or `node.frontmatter.slug`)
  //     path: node.fields.slug,
  //     // This component will wrap our MD content
  //     component: path.resolve(`./src/templates/blog-post.js`),
  //     // You can use the values in this context in
  //     // our page layout component
  //     context: {
  //       // Data passed to context is available
  //       // in page queries as GraphQL variables.
  //       slug: node.fields.slug,
  //     },
  //   })
  // })

  // Create MDX blog post pages.
  // you'll call `createPage` for each result
  mdxPosts.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // path: node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/blog-mdx-layout.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        body: node.body,
        frontmatter: node.frontmatter,
        excerpt: node.excerpt,
      },
    })
  })
}
