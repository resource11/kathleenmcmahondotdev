import React from "react"
import PropTypes from "prop-types"
import styles from "./Component.module.css"

export const Component = ({ children }) => {
  return <div className={css.root}>{children}</div>
}

export default Component

Component.propTypes = {
  children: PropTypes.object,
}
