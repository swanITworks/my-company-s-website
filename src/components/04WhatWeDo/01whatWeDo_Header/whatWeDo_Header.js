import React from "react"
import classes from "./whatWeDo_Header.module.css"

const whatWeDo_Header = ({ title, slogan, description, markedSlogan }) => {
  return (
    <article className={classes.whatWeDoHeader}>
      <h2 className={classes.title}>{title}</h2>
      <h3 className={classes.slogan}>{slogan} <span>{markedSlogan}</span></h3>
      <p className={classes.info}>{description}</p>
    </article>
  )
}

export default whatWeDo_Header