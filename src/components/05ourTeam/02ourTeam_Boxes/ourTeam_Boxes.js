import React from "react"
import classes from "./ourTeam_Boxes.module.css"

function ourTeam_Boxes(props) {
  const person = props.person

  const imageStyles = {
    backgroundPosition: "center",
    backgroundImage: `url(${person.image})`,
    backgroundSize: "cover",
    width: '33.5%',
    backgroundRepeat: 'noRepeat',
  }

  return (
    <article className={classes.ourTeamBoxes}>
      <div style={imageStyles}></div>
      <div className={classes.nameBox}>
        <p className={classes.name}><span className={classes.span}>{person.name}</span></p>
        <p className={classes.title}>{person.title}</p>
      </div>
      <div className={classes.description}>{person.info}</div>
    </article>
  )
}

export default ourTeam_Boxes