import React from "react"
import classes from "./contact_header.module.css"

const ContactHeader = () => {
  return (
      <article className={classes.contactHeader}>
        <h2 className={classes.title}>CONTACT</h2>
        <h3 className={classes.slogan}>We alway here to <span>helps you</span></h3>
        <p className={classes.info}>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut </p>
      </article>
  )
}

export default ContactHeader