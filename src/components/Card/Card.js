import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import css from "./Card.module.css"

export const Card = ({ children, display = "block" }) => {
  const CardCSS = classnames(css.card, css[display])
  return <h4 className={CardCSS}>testing and {children}</h4>
}

export default Card

Card.propTypes = {
  children: PropTypes.object,
  display: PropTypes.string,
}
