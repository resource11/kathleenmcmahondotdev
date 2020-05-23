import React from "react"
import PropTypes from "prop-types"
// import data from "../../../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import css from "./SiteFooter.module.css"

export const SiteFooter = ({ footerNav }) => {
  // const { footerNav } = data
  return (
    <footer className={css.footer} role="contentinfo">
      <ul className={css.footerNavUl}>
        {footerNav.map((nav) => (
          <li key={nav.icon} className={css.footerNavLi}>
            <a
              href={nav.link}
              aria-label={nav.ariaLabel ? nav.ariaLabel : null}
              className={css.link}
            >
              <FontAwesomeIcon
                icon={["fab", nav.icon]}
                className={css.footerIcon}
              />
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
      <small>copyright 2020 - present Kathleen McMahon</small>
    </footer>
  )
}

export default SiteFooter

SiteFooter.propTypes = {
  data: PropTypes.object,
}
