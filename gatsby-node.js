const path = require(`path`)
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    createNodeField({
      name: "slug",
      node,
      /* createFilePath returns a path with the leading "/"
      to the appended file name. I'm adding it by hand here 
      because I'm using the frontmatter path instead.
      */
      value: `/write/${node.frontmatter.path}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

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

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const mdxPosts = result.data.allMdx.edges

  mdxPosts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-mdx-layout.js`),
      context: {
        id: node.id,
        body: node.body,
        frontmatter: node.frontmatter,
        excerpt: node.excerpt,
      },
    })
  })
}
