import React from "react"
import classes from "./Footer_Items_BoxWithHours.module.css"

const BoxWithHours = () => {
  return (
    <article className={classes.hoursBox}>
      <h4 className={classes.title}>OPENING HOURS</h4>
      <div className={classes.items}>
        <p>We work 24 hours a day but in the hours below you are guaranteed that we will answer the phone or call you back. All hours refer to the UTC / GMT time zone</p>
        <div className={classes.row}>
          <p>MON - THURS:</p>
          <p>7.00 AM - 3.00 PM</p>
        </div>
        <div className={classes.row}>
          <p>FRI:</p>
          <p>7.00 AM - 2.00 PM</p>
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