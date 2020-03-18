import React from "react"

import classes from "./actionButton.module.css"

const actionButton = (props) => {


  return (
    <button className={props.type === 'transparent' ? classes.actionButtonTransparency : classes.actionButton}>{props.text}</button>
  )
}

export default actionButton