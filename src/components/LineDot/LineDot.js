import React from "react"
import PropTypes from "prop-types"
import { useExtraClasses } from "../../utils/useExtraClasses"
import styles from "./LineDot.module.css"

export const LineDot = ({ extraClasses }) => {
  const css = useExtraClasses(styles, extraClasses)
  return (
    <div className={css.root}>
      <div className={css.lineDotLine}></div>
      <div className={css.lineDotDot}></div>
    </div>
  )
}

export default LineDot

LineDot.propTypes = {
  children: PropTypes.object,
}
