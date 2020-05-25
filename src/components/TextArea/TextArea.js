import React from "react"
import PropTypes from "prop-types"
import { useField } from "formik"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/helpers"
import { Icon } from "../Icon"
import styles from "./TextArea.module.css"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

export const TextArea = ({ extraClasses, isHidden, label, ...props }) => {
  const css = useExtraClasses(styles, extraClasses)
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

  const rootClasses = classnames(css.root, {
    [css.hidden]: isHidden,
  })

  return (
    <div className={rootClasses}>
      {label && (
        <label htmlFor={props.id || props.name} className={css.textareaLabel}>
          <span className={css.labelText}>{label}</span>
          <textarea
            id={props.id || props.name}
            className={css.textarea}
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
  isHidden: null,
}

TextArea.propTypes = {
  /**
   * Determines if this textarea is hidden from screen readers. Pair this with textareas of type hidden
   */
  isHidden: PropTypes.bool,
}
