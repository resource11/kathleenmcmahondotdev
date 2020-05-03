import React from "react"
import { css } from "@emotion/core"
import data from "../../data"
import lcss from "./layout.module.css"
import { useStaticQuery, Link, graphql } from "gatsby"
import { MdxEmbedProvider } from "@pauliescanlon/gatsby-mdx-embed"
// import { ShortCodeWrapper } from "./shortcodewrapper"

import { rhythm } from "../utils/typography"

const Layout = ({ children }) => {
  const graphQLData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allFile(
          filter: { relativeDirectory: { eq: "pages" }, name: { ne: "index" } }
        ) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `
  )

  const primaryNavLinks = data.primaryNavLinks

  console.log(`nav is ${JSON.stringify(data.primaryNavLinks, null, 2)}`)

  return (
    <MdxEmbedProvider>
      {/* // <ShortCodeWrapper> */}
      <div className={lcss.withSidebar}>
        <div className={lcss.contentWrapper}>
          <header>
            <div
              css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
              `}
            >
              <Link to={`/`}>KathleenMcMahon.dev</Link>
            </div>
            <nav>
              <ul className={lcss.listItem}>
                <li>
                  <Link to={`/about/`}>About</Link>
                </li>
                {primaryNavLinks.map((nav) => (
                  <li key={nav.name}>
                    <Link to={nav.link}>{nav.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <div className={lcss.notSidebar}>
            <main className={lcss.main}>{children}</main>
            <footer className={lcss.footer} role="contentinfo">
              <small>This is a footer</small>
            </footer>
          </div>
        </div>
      </div>
      {/* // </ShortCodeWrapper> */}
    </MdxEmbedProvider>
  )
}

export default Layout
