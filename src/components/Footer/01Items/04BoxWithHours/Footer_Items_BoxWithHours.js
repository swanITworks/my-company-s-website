import React from "react"
import classes from "./Footer_Items_BoxWithHours.module.css"

const BoxWithHours = () => {
  return (
    <article className={classes.hoursBox}>
      <h4 className={classes.title}>OPENING HOURS</h4>
      <div className={classes.items}>
        <p>Architecto beatae vitae dicta sunt ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
        <div className={classes.row}>
          <p>MON - THURS:</p>
          <p>7.00 AM - 3.00 PM</p>
        </div>
        <div className={classes.row}>
          <p>FRI:</p>
          <p>6.00 AM - 2.00 PM</p>
        </div>
        <div className={classes.row}>
          <p>SAT - SUN:</p>
          <p>CLOSED</p>
        </div>

      </div>
    </article>
  )
};

export default BoxWithHours;