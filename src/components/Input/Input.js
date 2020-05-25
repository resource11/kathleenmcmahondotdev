import React from "react"
import PropTypes from "prop-types"
import { useField } from "formik"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/helpers"
import { Icon } from "../Icon"
import styles from "./Input.module.css"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

export const InputSizes = {
  small: "small",
  large: "large",
}

export const Input = ({ extraClasses, isHidden, label, ...props }) => {
  const css = useExtraClasses(styles, extraClasses)
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

  const rootClasses = classnames(css.root, {
    [css.hidden]: isHidden,
  })

  const labelClasses = classnames(css.inputLabel, css.stackField)

  return (
    <div className={rootClasses}>
      {label && (
        <label htmlFor={props.id || props.name} className={labelClasses}>
          <span className={css.labelText}>{label}</span>
          <input
            id={props.id || props.name}
            className={css.input}
            {...field}
            {...props}
          />
          {meta.touched && meta.error ? (
            <div className={css.errorText}>
              <Icon
                icon={faExclamationCircle}
                extraClasses={{ icon: css.errorIcon }}
              />
              {meta.error}
            </div>
          ) : null}
        </label>
      )}
    </div>
  )
}

export default Input

Input.defaultProps = {
  isHidden: null,
}

Input.propTypes = {
  /**
   * Determines if this input is hidden from screen readers. Pair this with inputs of type hidden
   */
  isHidden: PropTypes.bool,
}
