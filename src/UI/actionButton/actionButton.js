import React from "react"
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import classes from "./actionButton.module.css"

const ActionButton = (props) => {
  if (props.type === "transparent") {
    return (
      <AnchorLink to={props.onClick} className={classes.actionButtonTransparency} stripHash>{props.text}</AnchorLink>
    )
  } else if (props.type === "orange") {
    return (
      <AnchorLink to={'/contact#contact'} className={classes.orange} stripHash>{props.text}</AnchorLink>
    )
  } else {
    return (
      <AnchorLink to={'/contact#contact'} className={classes.actionButton} stripHash>{props.text}</AnchorLink>
    )
  }
}

export default ActionButton