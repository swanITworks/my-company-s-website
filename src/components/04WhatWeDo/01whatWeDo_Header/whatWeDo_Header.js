import React from "react"
import classes from "./whatWeDo_Header.module.css"

const whatWeDo_Header = () => {
  return (
    <article className={classes.whatWeDoHeader}>
      <h2 className={classes.title}>WHAT WE DO</h2>
      <h3 className={classes.slogan}>Be a prime focus of a leading <span>global service.</span></h3>
      <p className={classes.info}>If you need bespoke software, Swan IT Works have you covered. We work meticulously on websites to complicated applications based on business intelligence. Our developer’s skillsets are unlimited building software for all devices and operating systems.
      </p>
    </article>
  )
}

export default whatWeDo_Header