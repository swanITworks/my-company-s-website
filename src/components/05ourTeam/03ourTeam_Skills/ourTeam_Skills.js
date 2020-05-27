import React from "react"
import classes from "./ourTeam_Skills.module.css"

function ourTeam_Skills(props) {

  const skills = props.skills
  console.log(skills)

  const skillsTags = skills.map((item, index) => {
    return (
      <div className={classes.skill}>{Object.keys(item)}{Object.values(item)}</div>
    )
  })

  return (
    <div className={classes.skills}>{skillsTags}</div>
  )
}


export default ourTeam_Skills