import React from "react";
import classes from "./Footer_Items_Copyright.module.css"

const copyright = () => {
  return (
    <article className={classes.copyright}>
      <p>Copyright © {new Date().getFullYear()} <span>WM SWAN LTD</span> - ALL RIGHTS RESERVED.</p>
    </article>
  )
}

export default copyright;