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

  const { primaryNav, footerNav } = data

  console.log(`nav is ${JSON.stringify(primaryNav, null, 2)}`)

  return (
    <MdxEmbedProvider>
      {/* // <ShortCodeWrapper> */}
      <div className={lcss.withSidebar}>
        <div className={lcss.contentWrapper}>
          <header>
            <a href="#mainContent">Skip to main</a>
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
                {primaryNav.map((nav) => (
                  <li key={nav.name}>
                    <Link to={nav.link}>{nav.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <div className={lcss.notSidebar}>
            <main id="mainContent" className={lcss.main}>
              {children}
            </main>
            <footer className={lcss.footer} role="contentinfo">
              <ul className={lcss.listItem}>
                {footerNav.map((nav) => (
                  <li key={nav.link}>
                    <a href={nav.link} aria-label={nav.ariaLabel}>
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
              <small>copyright 2020 Kathleen McMahon</small>
            </footer>
          </div>
        </div>
      </div>
      {/* // </ShortCodeWrapper> */}
    </MdxEmbedProvider>
  )
}

export default Layout
