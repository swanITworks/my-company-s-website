import React from "react"
import classes from "./ourTeam_Header.module.css"

const ourTeam_Header = ( { title, slogan } ) => {
  return (
    <article className={classes.ourTeamHeader}>
      <h2 className={classes.title}>{ title }</h2>
      <h3 className={classes.slogan}>{ slogan }</h3>
    </article>
  )
}

export default ourTeam_Header