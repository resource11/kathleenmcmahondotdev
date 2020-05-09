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
      name: "hidden",
      node,
      value: frontmatter.hidden,
    })
    createNodeField({
      name: "published",
      node,
      value: frontmatter.published,
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
              featuredImage
              slug
            }
            body
            excerpt
            frontmatter {
              author
              date
              description
              featuredImage
              hidden
              published
              slug
              tags
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
    const { body, excerpt, fields, frontmatter, id } = node
    createPage({
      path: fields.slug,
      component: path.resolve(`./src/templates/blog-mdx-layout.js`),
      context: {
        id,
        body,
        frontmatter,
        excerpt,
      },
    })
  })
}
