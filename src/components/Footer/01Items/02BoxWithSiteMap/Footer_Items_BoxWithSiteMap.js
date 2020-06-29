import React from "react"
import classes from "./Footer_Items_BoxWithSiteMap.module.css"
import { Link } from "gatsby"

const BoxWithSiteMap = () => {
  return (
    <article className={classes.Box}>
      <h4 className={classes.title}>USEFULL LINKS</h4>
      <div className={classes.items}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/whatwedo'}><span>What we do</span></Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
    </article>
  )
}

export default BoxWithSiteMap