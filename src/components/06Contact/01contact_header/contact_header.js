import React from "react"
import classes from "./contact_header.module.css"

const ContactHeader = ({title, text, markedText, description }) => {
  return (
      <article className={classes.contactHeader}>
        <h2 className={classes.title}>{ title }</h2>
        <h3 className={classes.slogan}>{ text } <span>{ markedText }</span></h3>
        <p className={classes.info}>{ description }</p>
      </article>
  )
}

export default ContactHeader