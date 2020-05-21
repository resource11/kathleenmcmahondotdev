import React from "react"
import PropTypes from "prop-types"
import "../../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import css from "./Icon.module.css"

export const Icon = ({ icon, children }) => {
  return (
    <span>
      <FontAwesomeIcon className={css.icon} icon={icon} /> {children}
    </span>
  )
}

export default Icon

Icon.propTypes = {
  children: PropTypes.object,
  icon: PropTypes.string,
}
