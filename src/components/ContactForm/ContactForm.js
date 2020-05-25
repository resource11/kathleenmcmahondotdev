import React from "react"
import { Formik, Form, useField } from "formik"
import * as Yup from "yup"
import { useExtraClasses } from "../../utils/helpers"
import { Icon } from "../Icon"
import { Input } from "../Input"
import styles from "./ContactForm.module.css"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

const TextInput = ({ label, extraClasses, ...props }) => {
  const css = useExtraClasses(styles, extraClasses)
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

  return (
    <div className={css.root}>
      {label && (
        <label htmlFor={props.id || props.name} className={css.inputLabel}>
          <span className={css.labelTxt}>{label}</span>
          <input
            id={props.id || props.name}
            className={css.input}
            {...field}
            {...props}
          />
          {meta.touched && meta.error ? (
            <div className={css.errorTxt}>
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

const TextArea = ({ label, extraClasses, ...props }) => {
  const css = useExtraClasses(styles, extraClasses)
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div className={css.root}>
      {label && (
        <label htmlFor={props.id || props.name} className={css.textareaLabel}>
          <span className={css.labelTxt}>{label}</span>
          <textarea
            id={props.id || props.name}
            className={css.textarea}
            {...field}
            {...props}
          />
          {meta.touched && meta.error ? (
            <div className={css.errorTxt}>
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export const ContactForm = () => {
  return (
    <>
      <h2>Contact Me</h2>
      {/* Formik component is a React Context-powered Component. 
      It connects the state/methods from the Formik component 
      to the Form and other components */}
      <p>You can also reach me my email</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Email is required"),
          message: Yup.string().required("Message is required"),
        })}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-kathleen", ...values }),
          })
            .then(() => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
                actions.resetForm()
              }, 400)
            })
            .catch(() => {
              alert("Error")
            })
            .finally(() => actions.setSubmitting(false))
        }}
      >
        <Form
          name="contact-kathleen"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <Input
            label="bot-catcher"
            name="bot-field"
            type="hidden"
            isHidden={true}
          />
          <Input label="Name" name="name" type="text" placeholder="Jane" />
          {/* <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          /> */}
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <TextArea
            label="Message"
            name="message"
            placeholder="type a message"
          />
          <button type="submit">Send message</button>
        </Form>
      </Formik>
    </>
  )
}

export default ContactForm
