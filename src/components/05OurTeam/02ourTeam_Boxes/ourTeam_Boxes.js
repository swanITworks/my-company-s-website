import React from "react"
import classes from "./ourTeam_Boxes.module.css"
import Img from "gatsby-image"

function ourTeam_Boxes(props) {
  const person = props.person

  return (
    <article className={classes.ourTeamBoxes}>
      <div className={classes.imageBox}>
        <Img fluid={person.image}/>
      </div>
      <section className={classes.nameBox}>
        <p className={classes.name}><span className={classes.span}>{person.name}</span></p>
        <p className={classes.title}>{person.title}</p>
      </section>
      <section className={classes.description}>{person.info}</section>
    </article>
  )
}

export default ourTeam_Boxes