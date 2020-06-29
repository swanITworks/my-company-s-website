import React from "react"
import classes from "./contact_header.module.css"

const ContactHeader = () => {
  return (
      <article className={classes.contactHeader}>
        <h2 className={classes.title}>CONTACT</h2>
        <h3 className={classes.slogan}>We alway here to <span>helps you</span></h3>
        <p className={classes.info}>Please don't hesitate to contact us, we work with micro, small and big companies. We adjust our offer to your requirements. It will be pleasure for us to can speak with you about our next project and estimate cost of it.</p>
      </article>
  )
}

export default ContactHeader