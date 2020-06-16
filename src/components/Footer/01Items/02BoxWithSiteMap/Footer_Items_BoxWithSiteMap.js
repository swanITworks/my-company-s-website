import React from "react"
import classes from "./Footer_Items_BoxWithSiteMap.module.css"

const BoxWithSiteMap = () => {
  return (
    <article className={classes.Box}>
      <h4 className={classes.title}>USEFULL LINKS</h4>
      <div className={classes.items}>
        <p>About US</p>
        <span>Our Service</span>
        <p>About US</p>
        <p>Contact</p>
      </div>
    </article>
  )
}

export default BoxWithSiteMap