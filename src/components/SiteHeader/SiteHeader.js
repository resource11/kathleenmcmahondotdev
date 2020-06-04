import React from "react"
import { Link } from "gatsby"
import data from "../../../data"
import KMLogo from "../../svgs/KMLogo.svg"
import css from "./SiteHeader.module.css"

export const SiteHeader = () => {
  const { primaryNav } = data
  return (
    <header className={css.header} id="#top">
      <div className={css.headerLinks}>
        <a href="#main" className={css.skipLink}>
          Skip to main <span role="presentation">content</span>
        </a>
        <Link to={`/`} className={css.logo}>
          <img
            src={KMLogo}
            alt="KathleenMcMahon.dev"
            className={css.logoImg}
            role="img"
          />
          <span class={css.visuallyHidden}>KathleenMcMahon.me</span>
        </Link>
      </div>

      <nav className={css.primaryNav}>
        <ul className={css.primaryNavUl}>
          {primaryNav.map((nav) => (
            <li key={nav.name} className={css.primaryNavLi}>
              <Link
                to={nav.link}
                className={css.link}
                activeClassName={css.activeLink}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
