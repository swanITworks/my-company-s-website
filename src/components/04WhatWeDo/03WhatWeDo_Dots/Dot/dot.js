import React from "react"
import classes from "./dot.module.css"

const dot = (props) => {
  const selected = props.selected
  if (selected) {
    return (
      <div className={classes.selected}></div>
    )
  }
  return (
    <div className={classes.dot}></div>
  )
}

export default dot