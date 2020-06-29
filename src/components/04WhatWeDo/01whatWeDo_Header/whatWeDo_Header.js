import React from "react"
import classes from "./whatWeDo_Header.module.css"

const whatWeDo_Header = () => {
  return (
    <article className={classes.whatWeDoHeader}>
      <h2 className={classes.title}>WHAT WE DO</h2>
      <h3 className={classes.slogan}>Take the world’s <span>best services</span> For you</h3>
      <p className={classes.info}>We produce bespoke software. We can do everything and meet your every need. From a website to complicated applications based on business intelligence. Develop software for all devices and operating systems.
      </p>
    </article>
  )
}

export default whatWeDo_Header