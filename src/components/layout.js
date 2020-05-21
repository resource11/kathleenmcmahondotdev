import React from "react"
import classnames from "classnames"
import "../utils/fontawesome"
import data from "../../data"
import KMLogo from "../svgs/KMLogo.svg"

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
          <div className={css.headerLinks}>
            <a href="#main">Skip to main</a>
            <Link to={`/`} className={css.logo}>
              <img
                src={KMLogo}
                alt="KathleenMcMahon.dev"
                className={css.logoImg}
              />
            </Link>
          </div>

          <nav className={css.primaryNav}>
            <ul className={css.primaryNavList}>
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
          <nav className={css.footerNav}>
            <ul className={css.footerNavList}>
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
          </nav>
          <small>copyright 2020 Kathleen McMahon</small>
        </footer>
      </div>
    </MdxEmbedProvider>
  )
}

export default Layout
