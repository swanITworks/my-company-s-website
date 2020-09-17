import React from "react"
import classes from "./ourTeam_Skills.module.css"

function OurTeam_Skills(props) {

  const progressValues = props.progressValues;
  const skills = props.skills


  const skillsTags = skills.map((item, index) => {
    const percent = progressValues[index]
    return (
      <div key={index} className={classes.skill}>
        <div className={classes.description}>
          <div>{item.skillName}</div>
          <div>{item.skillValue}%</div>
        </div>
        <div className={classes.progressBar}></div>
        <div style={{
          width: percent+'%',
        }} className={classes.progress}></div>
      </div>
    )
  })

  return (
    <div className={classes.skills}>{skillsTags}</div>
  )
}


export default OurTeam_Skills