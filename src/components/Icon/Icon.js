import React from "react"
import PropTypes from "prop-types"
import "../../utils/fontawesome"
import { useExtraClasses } from "../../utils/useExtraClasses"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Icon.module.css"

export const Icon = ({ icon, children, extraClasses }) => {
  const css = useExtraClasses(styles, extraClasses)
  return (
    <span className={css.span}>
      <FontAwesomeIcon className={css.icon} icon={icon} /> {children}
    </span>
  )
}

export default Icon

Icon.propTypes = {
  children: PropTypes.object,
  extraClasses: PropTypes.object,
  icon: PropTypes.array,
}
