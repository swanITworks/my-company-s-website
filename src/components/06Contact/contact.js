import React from "react"
import classes from "./contact.module.css"
import ContactHeader from "./01contact_header/contact_header"
import Icons from "./02contact_icons/contact_icons"
import Form from "./03contact_form/contact_form"

const Contact = () => {
  return (
    <section id={'contact'} className={classes.contact}>
      <ContactHeader/>
      <Icons/>
      <Form/>
    </section>
  )
}

export default Contact