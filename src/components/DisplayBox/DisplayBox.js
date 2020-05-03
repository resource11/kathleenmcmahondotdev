import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import css from "./DisplayBox.module.css"

const DisplayBox = () => {
  const { children, display = "block" } = this.props
  const displayBoxCSS = classnames(css.displayBox, css[display])
  return <div className={displayBoxCSS}>{children}</div>
}

DisplayBox.propTypes = {
  children: PropTypes.object,
  display: PropTypes.string,
}
