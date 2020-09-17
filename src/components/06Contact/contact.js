import React from "react"
import classes from "./contact.module.css"
import ContactHeader from "./01contact_header/contact_header"
import Icons from "./02contact_icons/contact_icons"
import Form from "./03contact_form/contact_form"
import useTranslations from "../useTranslations"

const Contact = () => {

  const { contact: { title, description, slogan: { text, markedText }, icons, form } } = useTranslations();

  return (
    <section id={'contact'} className={classes.contact}>
      <ContactHeader title={ title } text={ text } markedText={ markedText } description={ description }/>
      <Icons icons={icons}/>
      <Form form={ form } />
    </section>
  )
}

export default Contact