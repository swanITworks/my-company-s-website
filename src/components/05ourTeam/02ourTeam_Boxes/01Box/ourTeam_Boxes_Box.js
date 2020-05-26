import React from "react"
import classes from "./ourTeam_Boxes_Box.module.css"
import { Link } from "gatsby"
import mobileApps from "../../../../images/mobileApps.jpg"
import webApps from "../../../../images/webApps.jpg"
import websites from "../../../../images/websites.jpg"


const ourTeam_Boxes_Box = (props) => {
  const person = props.data;

  const imageStyles = {
    height: "330px",
    width: "390px",
    backgroundPosition: "center",
  }

  return (
    <article className={classes.ourTeam_Box}>
      <div className={classes.top}>
        <div style={imageStyles}/>
      </div>
      <p>{person.name}</p>
      <button>hej</button>
    </article>
  )
}

export default ourTeam_Boxes_Box