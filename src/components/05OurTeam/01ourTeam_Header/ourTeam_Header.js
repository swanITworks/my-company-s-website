import React from "react"
import classes from "./ourTeam_Header.module.css"

const ourTeam_Header = () => {
  return (
    <article className={classes.ourTeamHeader}>
      <h2 className={classes.title}>OUR EXPERT</h2>
      <h3 className={classes.slogan}>Meet The Specialists. Our diverse team of professionals, take care of your IT needs.</h3>
    </article>
  )
}

export default ourTeam_Header