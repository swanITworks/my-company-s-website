import React from "react"
import classes from "./bestItem.module.css"

const bestItem = (props) => (
  <div className={classes.bestItem}>
    <p className={classes.bestTitle}><span className={classes.number}>{props.number}</span> {props.title}</p>
    <p className={classes.bestText}>
      {props.text}
    </p>
  </div>
);

export default bestItem;