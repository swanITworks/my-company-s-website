import React from "react"
import classes from "./Footer_Items_BoxWithHours.module.css"

const BoxWithHours = () => {
  return (
    <article className={classes.hoursBox}>
      <h4 className={classes.title}>OPENING HOURS</h4>
      <div className={classes.items}>
        <p>Architecto beatae vitae dicta sunt ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
        <p>Date</p>
      </div>
    </article>
  )
};

export default BoxWithHours;