import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/useExtraClasses"
import styles from "./Component.module.css"

export const Component = ({ children, extraClasses }) => {
  const css = useExtraClasses(styles, extraClasses)

  return <div className={css.root}>{children}</div>
}

export default Component

Component.propTypes = {
  children: PropTypes.object,
}
