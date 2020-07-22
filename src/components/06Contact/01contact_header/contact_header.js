import React from "react"
import classes from "./contact_header.module.css"

const ContactHeader = () => {
  return (
      <article className={classes.contactHeader}>
        <h2 className={classes.title}>CONTACT</h2>
        <h3 className={classes.slogan}>We put <span>you first.</span></h3>
        <p className={classes.info}>At Swan IT Works, we treat every client the same whether they're a micro, small or large corporation. Even if it’s about an upcoming project, a quote or a query, contact us. We adjust our offers and services around you.</p>
      </article>
  )
}

export default ContactHeader