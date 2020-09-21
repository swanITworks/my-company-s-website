import React from "react"
import classes from "./Footer_Items_BoxWithHours.module.css"

const BoxWithHours = ({ data: { title, description, monThur, fri, satSun, closed }}) => {
  return (
    <article className={classes.hoursBox}>
      <h4 className={classes.title}>{ title }</h4>
      <div className={classes.items}>
        <p>{ description }</p>
        <div className={classes.row}>
          <p>{ monThur }</p>
          <p>7.00 AM - 3.00 PM</p>
        </div>
        <div className={classes.row}>
          <p>{ fri }</p>
          <p>7.00 AM - 2.00 PM</p>
        </div>
        <div className={classes.row}>
          <p>{ satSun }</p>
          <p>{ closed }</p>
        </div>
      </div>
    </article>
  )
};

export default BoxWithHours;