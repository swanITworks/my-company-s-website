import React from "react"

import classes from "./actionButton.module.css"

const ActionButton = (props) => {
  if (props.type === "transparent") {
    return (
      <button
        className={classes.actionButtonTransparency}>{props.text}</button>
    )
  } else if (props.type === "orange") {
    return (
      <button
        className={classes.orange} type='submit'>{props.text}</button>
    )
  } else {
    return (
      <button className={classes.actionButton}>{props.text}</button>
    )
  }
}

export default ActionButton