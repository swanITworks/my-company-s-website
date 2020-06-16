import React from "react"
import Logo from "../../../assets/logo.svg"
import classes from "./logo.module.css"

let classesArray = [classes.logo]
let svgClassesArray = [classes.logoSvg];

const logo = (props) => {
  const scroll = props.isScroll
  if (scroll === true) {
    classesArray.push(classes.scroll)
    svgClassesArray.push(classes.scrollSVG)
  } else {
    classesArray = [classes.logo]
    svgClassesArray = [classes.logoSvg]
  }

  return (
    <div className={classes.logoArea}>
      <Logo className={svgClassesArray.join(" ")}/>
      <span className={classesArray.join(" ")}>Swan <span>It</span> Works.</span>
    </div>
  )
}

export default logo