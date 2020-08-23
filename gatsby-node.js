const path = require(`path`)
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const { frontmatter } = node
    createNodeField({
      name: "slug",
      node,
      /* createFilePath returns a path with the leading "/"
      to the appended file name. I'm adding it by hand here 
      because I'm using the frontmatter path instead.
      */
      value: `/write/${frontmatter.slug}`,
    })
    createNodeField({
      name: "featuredImage",
      node,
      value: frontmatter.featuredImage,
    })
    createNodeField({
      name: "isFeatured",
      node,
      value: frontmatter.isFeatured,
    })
    createNodeField({
      name: "isHidden",
      node,
      value: frontmatter.isHidden,
    })
    createNodeField({
      name: "isPublished",
      node,
      value: frontmatter.isPublished,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/(post)/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            fields {
              slug
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
    const { fields, id } = node
    createPage({
      path: fields.slug,
      component: path.resolve(`./src/templates/post-mdx-layout.js`),
      context: {
        id,
      },
    })
  })
}
