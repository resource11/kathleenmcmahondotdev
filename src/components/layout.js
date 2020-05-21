import React from "react"
import classnames from "classnames"
import "../utils/fontawesome"
import data from "../../data"

import { MdxEmbedProvider } from "@pauliescanlon/gatsby-mdx-embed"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import css from "./layout.module.css"

const Layout = ({ children }) => {
  const { primaryNav, footerNav } = data

  const mainClasses = classnames(css.main, css.stack)

  return (
    <MdxEmbedProvider>
      <div className={css.contentWrapper}>
        <header className={css.header}>
          <a href="#main">Skip to main</a>
          <div>
            <Link to={`/`}>KathleenMcMahon.dev</Link>
          </div>
          <nav className={css.nav}>
            <ul className={css.listItem}>
              {primaryNav.map((nav) => (
                <li key={nav.name}>
                  <Link to={nav.link}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main id="main" className={mainClasses}>
          {children}
        </main>
        <footer className={css.footer} role="contentinfo">
          <ul className={css.listItem}>
            {footerNav.map((nav) => (
              <li key={nav.icon}>
                <a
                  href={nav.link}
                  aria-label={nav.ariaLabel ? nav.ariaLabel : null}
                >
                  <FontAwesomeIcon
                    icon={["fab", nav.icon]}
                    className={css.icon}
                  />
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          <small>copyright 2020 Kathleen McMahon</small>
        </footer>
      </div>
    </MdxEmbedProvider>
  )
}

export default Layout
