import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Button } from "../Button"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import css from "./ContactForm.module.css"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

/* Formik component is a React Context-powered Component. It connects the state/methods from the Formik component to the Form and other components
 */

export const ContactForm = () => {
  return (
    <>
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
                // alert(JSON.stringify(values, null, 2))
                alert("Your message has been sent.")
                actions.setSubmitting(false)
                actions.resetForm()
              }, 400)
            })
            .catch(() => {
              alert("Whoops! Something went wrong. Please try again.")
            })
            .finally(() => actions.setSubmitting(false))
        }}
      >
        <Form
          name="contact-kathleen"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className={css.stackForm}
        >
          <Input
            label="bot-catcher"
            name="bot-field"
            type="hidden"
            isHidden={true}
          />
          <Input label="Name" name="name" type="text" placeholder="Jane" />
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
          <Button type="submit">Send message</Button>
        </Form>
      </Formik>
    </>
  )
}

export default ContactForm
