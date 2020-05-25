import React from "react"
import PropTypes from "prop-types"
import { useField } from "formik"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/helpers"
import { Icon } from "../Icon"
import styles from "./TextArea.module.css"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

export const TextArea = ({
  extraClasses,
  label,
  resizeVerticalOnly,
  ...props
}) => {
  const css = useExtraClasses(styles, extraClasses)
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

  const labelClasses = classnames(css.textareaLabel, css.stackField)

  const textareaClasses = classnames(css.textarea, {
    [css.resizeVerticalOnly]: resizeVerticalOnly,
  })

  return (
    <div className={css.root}>
      {label && (
        <label htmlFor={props.id || props.name} className={labelClasses}>
          <span className={css.labelText}>{label}</span>
          <textarea
            id={props.id || props.name}
            className={textareaClasses}
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

export default TextArea

TextArea.defaultProps = {
  resizeVerticalOnly: false,
}

TextArea.propTypes = {
  /**
   * Determines if this textarea is can only be resized vertically
   */
  resizeVerticalOnly: PropTypes.bool,
}
