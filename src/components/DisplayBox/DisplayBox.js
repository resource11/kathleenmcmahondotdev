import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import css from "./DisplayBox.module.css"

export const DisplayBox = ({ children, display = "block" }) => {
  const displayBoxCSS = classnames(css.displayBox, css[display])
  return <div className={displayBoxCSS}>{children}</div>
}

export default DisplayBox

DisplayBox.propTypes = {
  children: PropTypes.object,
  display: PropTypes.string,
}
